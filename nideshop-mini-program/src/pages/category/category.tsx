import Taro, { useRouter, useEffect, useState } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { Dispatch } from 'redux'
import { AtTabs, AtTabsPane } from 'taro-ui'
import classnames from 'classnames'

import { CategoryState } from './data'
import './category.scss'

interface CategoryProps {
  category: CategoryState;
  dispatch: Dispatch
}

const Category = (props: CategoryProps) => {
  // router
  const router = useRouter()
  const { params: { id } } = router

  // props
  const { dispatch, category: { goodsCategory, currentCategory, goodsList } } = props

  // useState
  const [tabList, setTabList] = useState<{ title: string }[]>([]) // 分类tab标签
  const [currentTab, setCurrentTab] = useState<number>(0) // 当前选中的tab

  /** 进入页面，设置选中的tab */
  useEffect(() => {
    let initIndex = 0
    goodsCategory.map((item, index) => {
      if (item.id === Number(id)) {
        initIndex = index
      }
      return item
    })
    setCurrentTab(initIndex)
  }, [goodsCategory])

  useEffect(() => {
    if (goodsCategory.length) {
      // 生成tabList
      const data = goodsCategory.map(item => ({ title: item.name }))
      setTabList(data)
    }
  }, [goodsCategory])

  useEffect(() => {
    const categoryId = goodsCategory.length ? goodsCategory[currentTab].id : id

    // 获取分类列表和当前分类
    dispatch({
      type: 'category/fetchGoodsCategory',
      payload: {
        id: categoryId
      }
    })

    // 获取某个分类下面的商品数据
    dispatch({
      type: 'category/fetchGoodsList',
      payload: {
        categoryId,
        page: 1,
        size: 10000
      }
    })
  }, [currentTab])

  return <View className="container">
    <AtTabs
      className='my-at-tabs'
      current={currentTab}
      scroll
      tabList={tabList}
      onClick={(index) => { setCurrentTab(index) }}
    />
    <View className='goods-title'>
      <View className='goods-title-name'>{currentCategory.name}</View>
      <View className='goods-title-frontName'>{currentCategory.frontName}</View>
    </View>
    <View className='goods-list'>
      {goodsList.map((item, index) => <View key={item.id} className={classnames('goods-item', index % 2 === 0 ? 'goods-item-left' : 'goods-item-right')} >
        <Image src={item.listPicUrl} mode='aspectFit' />
        <View className='goods-item-name' style={{ width: '100%' }}>
          <Text className='text-ellipsis'>{item.name}</Text>
        </View>
        <Text className='goods-item-price'>¥ {parseInt(item.retailPrice)}</Text>
      </View>)}
    </View>
  </View>
}

export default connect(({ category }: {
  category: CategoryState
}) => ({ category }))(Category)