import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtSearchBar, AtTag, AtIcon } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { Dispatch } from 'redux'
import _ from 'loadsh'

import { SearchStateType } from './data'
import './search.scss'

interface SearchProps {
  search: SearchStateType;
  dispatch: Dispatch
}

const Search = (props: SearchProps) => {
  // props 
  const { dispatch, search: {
    defaultKeyword,
    hotKeywordList,
    historyKeywordList,
    helpKeywords,
    goodsList,
    filterCategoryList
  } } = props

  // useState
  const [searchValue, setSearchValue] = useState('') // 搜索框的值
  const [selectedHotKeyword, setSelectedHotKeyword] = useState('') // 当前选中的热门关键字的值
  const [showSearchHelper, setShowSearchHelper] = useState(true) // 是否显示搜索帮助列表
  const [tagQuery, setTagQuery] = useState({ keyword: '', page: 1, size: 20, sort: 'id', order: 'desc', categoryId: 0 }) // 点击标签进行搜索的条件
  const [currentShowType, setCurrentShowType] = useState('') // 当前选中的商品列表的展示类型
  const [currentCategoryTab, setCurrentCategoryTab] = useState(0) // 当前选中的分类标签的ID，默认为全部（id:0）
  const [showCategoryTabs, setShowCategoryTabs] = useState(false) // 是否显示分类tabs

  /** 当不存在搜索的关键字时获取搜索页面展示的数据 */
  useEffect(() => {
    if (!searchValue) {
      dispatch({
        type: 'search/fetchSearchData',
        callback: (data) => {
          const { hotKeywordList } = data
          // 热门关键字默认选中第一个
          if (hotKeywordList.length) {
            setSelectedHotKeyword(hotKeywordList[0].keyword)
          }
        }
      })
      // 将商品列表中的相关状态至为初始状态
      setTagQuery({ keyword: '', page: 1, size: 20, sort: 'id', order: 'desc', categoryId: 0 })
      setCurrentShowType('')
      setCurrentCategoryTab(0)
    }
  }, [searchValue])

  /** 搜索框值或者商品列表的展示条件发生变化引起的回调 */
  useEffect(() => {
    if (searchValue) {
      if (showSearchHelper) {
        // 搜索值源于手动输入,请求搜索帮助列表
        dispatch({
          type: 'search/fetchSearchHelperData',
          payload: {
            keyword: searchValue
          }
        })
      } else {
        // 搜索值源于点击
        console.log('点击得到的搜索值', searchValue)
        dispatch({
          type: 'search/fetchGoodsList',
          payload: tagQuery
        })
      }
    }
  }, [searchValue, tagQuery])

  /** 搜索框的值改变引起的回调函数 */
  const onSearchValueChange = (value: string) => {
    // 更新搜索框的值
    setSearchValue(value)
    if (!showSearchHelper) {
      setShowSearchHelper(true)
    }
  }

  /** 取消搜索的回调函数 */
  const onCancelSearch = () => {
    Taro.navigateBack()
  }

  /** 选中某个热门关键字的回调函数 */
  const onChangeSelectedKeyword = ({ name }: { name: string }) => {
    // 更新selectedHotKeyword
    setSelectedHotKeyword(name)
    // 更新搜索框的值
    setSearchValue(name)
    // 更新是否展示帮助数据
    setShowSearchHelper(false)
    // 更新查询商品列表的入参
    setTagQuery({
      ...tagQuery,
      keyword: name
    })
  }

  /** 切换商品列表展示方式的tab引起的回调函数 */
  const onChangeShowTypeTab = (type: string) => {
    console.log('onChangeShowTypeTab', type)
    switch (type) {
      case 'comprehensive':
        setCurrentShowType('comprehensive')
        setTagQuery({
          ...tagQuery,
          sort: 'default',
          order: 'desc'
        })
        break;
      case 'price':
      case 'priceAsc':
        setCurrentShowType('priceAsc')
        setTagQuery({
          ...tagQuery,
          sort: 'price',
          order: 'asc'
        })
        break;
      case 'priceDesc':
        setCurrentShowType('priceDesc')
        setTagQuery({
          ...tagQuery,
          sort: 'price',
          order: 'desc'
        })
        break;
      case 'category':
        setShowCategoryTabs(true)

      default:
        break;
    }
  }

  /** 选择分类标签 */
  const onSelectCategory = (id: number) => {
    console.log('id', id)
    // 改变选中值的颜色
    setCurrentCategoryTab(id)
    // 改变tagQuery的分类ID字段数据 
    setTagQuery({
      ...tagQuery,
      categoryId: id,
    })
    // 隐藏分类列表
    setShowCategoryTabs(false)
  }
  return <View className="container">
    <AtSearchBar
      className="my-at-search-bar"
      placeholder={defaultKeyword.keyword}
      actionName="取消"
      showActionButton
      value={searchValue}
      onChange={onSearchValueChange}
      onActionClick={onCancelSearch}
    />
    {!searchValue &&
      <View className='except-search-input'>
        <View className="search-hot">
          <View className="search-hot-title">
            <Text>历史搜索</Text>
          </View>
          <View className="search-hot-keywords">
            {historyKeywordList.map(item => <AtTag
              className="search-hot-keyword"
              key={item}
              name={item}
              onClick={onChangeSelectedKeyword}
            >{item}</AtTag>)}
          </View>
        </View>
        <View className="search-hot">
          <View className="search-hot-title">
            <Text>热门搜索</Text>
          </View>
          <View className="search-hot-keywords">
            {hotKeywordList.map(item => <AtTag
              className="search-hot-keyword"
              key={item.keyword}
              name={item.keyword}
              active={selectedHotKeyword === item.keyword}
              onClick={onChangeSelectedKeyword}
            >{item.keyword}</AtTag>)}
          </View>
        </View>
      </View>
    }
    {searchValue && showSearchHelper && <View className="search-help-lists except-search-input">
      {helpKeywords.map(item => <View
        className="search-help-list"
        key={item}
        hoverClass="navigator-hover"
      >{item}</View>)}
    </View>
    }
    {searchValue && !showSearchHelper && goodsList.length !== 0 && <View className='search-result'>
      <View className='goods-fixed'>
        <View className="show-types-tab">
          <Text className={currentShowType === 'comprehensive' ? 'global-text-red' : ''} onClick={() => { onChangeShowTypeTab('comprehensive') }}>综合</Text>
          <View className='tab-price'>
            <Text className={currentShowType === 'priceAsc' || currentShowType === 'priceDesc' ? 'global-text-red' : ''} onClick={() => { onChangeShowTypeTab('price') }}>价格</Text>
            <View className='tab-price-icon'>
              <AtIcon value='chevron-up' size='12' color={currentShowType === 'priceAsc' ? '#b4282d' : 'rgb(222, 222, 222)'} onClick={() => { onChangeShowTypeTab('priceAsc') }} />
              <AtIcon value='chevron-down' size='12' color={currentShowType === 'priceDesc' ? '#b4282d' : 'rgb(222, 222, 222)'} onClick={() => { onChangeShowTypeTab('priceDesc') }} />
            </View>
          </View>
          <Text onClick={() => { onChangeShowTypeTab('category') }}>分类</Text>
        </View>
        {showCategoryTabs &&
          <View className="category-tabs">
            {filterCategoryList.map(item => <Text
              className={currentCategoryTab === item.id ? 'active' : ''}
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
            >{item.name}</Text>)}
          </View>
        }
      </View>
      <View className="goods-list">
        {goodsList.map(item => <View className='goods-item'>
          <Image src={item.listPicUrl} />
          <View className='global-goods-list-item'>
            <Text>{item.name}</Text>
            <Text className="goods-price">¥ {parseInt(item.retailPrice)}</Text>
          </View>
        </View>)}
      </View>
    </View>
    }
    {searchValue && !showSearchHelper && goodsList.length === 0 && <View className='except-search-input search-result-empty'>
      <Image className='search-result-empty-icon' src='http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noSearchResult-7572a94f32.png' />
      <View className='search-result-empty-text'>您寻找的商品还未上架</View>
    </View>}
  </View>
}

export default connect(({ search }) => ({ search }))(Search)