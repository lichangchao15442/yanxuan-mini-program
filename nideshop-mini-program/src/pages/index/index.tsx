import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, Navigator } from '@tarojs/components'
import { Dispatch } from 'redux'
import { connect } from '@tarojs/redux'
import { AtSearchBar } from 'taro-ui'

import { IndexState } from './data'
import './index.scss'

interface IndexProps {
  index: IndexState;
  dispatch: Dispatch
}

const Index = (props: IndexProps) => {
  // props
  const {
    index: {
      banner,
      channel,
      categoryList,
      brandList,
      newGoodsList,
      hotGoodsList,
      topicList,
      goodsCount
    },
    dispatch
  } = props

  // useState
  const [searchValue, setSearchValue] = useState('') // 搜索框的值

  // 进入页面，请求展示数据
  useEffect(() => {
    // 首页数据
    dispatch({
      type: 'index/fetchIndexData',
    })
    // 获取商品总数
    dispatch({
      type: 'index/fetchGoodsCount'
    })
  }, [])

  // 搜索框值变化的回调函数
  const onSearchValueChange = (value: string) => {
    setSearchValue(value)
  }
  return (
    <View className="container">
      <Navigator url="/pages/search/search">
        <AtSearchBar
          placeholder={`商品搜索，共${goodsCount}款好物`}
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </Navigator>
      <Swiper
        style='height: 400rpx'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        {banner.map(item => <SwiperItem className="swiper-item">
          <Image
            key={item.id}
            src={item.imageUrl}
            mode="aspectFit"
          />
        </SwiperItem>)}
      </Swiper>
      <View className="menu">
        {channel.map(item => <Navigator
          className="menu-item"
          key={item.id}
          url={item.url}
        >
          <Image src={item.iconUrl} />
          <Text>{item.name}</Text>
        </Navigator>)}
      </View>
      <View className="selection m-brand">
        <View className="selection-title">
          <Text>品牌制造商直供</Text>
        </View>
        <View className="at-row at-row--wrap brands">
          {brandList.map(item => <View key={item.id} className="at-col-6 brand">
            <Image src={item.newPicUrl} />
            <View className="brand-text">
              <Text className="brand-text-name">{item.name}</Text>
              <Text className="brand-text-price">{item.floorPrice}<Text>元起</Text></Text>
            </View>
          </View>)}
        </View>
      </View>
      <View className="selection m-new">
        <View className="selection-title">
          <Text>周一周四·新品首发</Text>
        </View>
        <View className="at-row at-row--wrap news">
          {newGoodsList.map(item => <View key={item.id} className="at-col-6 new">
            <Image src={item.listPicUrl} />
            <View className="new-text">
              <Text className="new-text-name">{item.name}</Text>
              <Text className="new-text-price">¥{parseInt(item.retailPrice)}</Text>
            </View>
          </View>)}
        </View>
      </View>
      <View className="selection m-hot">
        <View className="selection-title">
          <Text>人气推荐</Text>
        </View>
        <View className="hots">
          {hotGoodsList.map(item => <View className="hot" key={item.id}>
            <Image src={item.listPicUrl} />
            <View className="hot-text">
              <Text className="hot-text-name">{item.name}</Text>
              <Text className="hot-text-brief">{item.goodsBrief}</Text>
              <Text className="hot-text-price">¥{parseInt(item.retailPrice)}</Text>
            </View>
          </View>)}
        </View>
      </View>
      <View className="selection m-topic">
        <View className="selection-title">
          <Text>专题精选</Text>
        </View>
        <Swiper
          style='height: 530rpx'
          autoplay
          circular
        >
          {topicList.map(item => <SwiperItem className="topic" key={item.id}>
            <Image src={item.scenePicUrl} mode="aspectFill" />
            <View className="topic-text">
              <View>
                <Text className="topic-title">{item.title}</Text>
                <Text className="topic-price">¥{item.priceInfo}元起</Text>
              </View>
              <Text className="topic-desc text-ellipsis">{item.subtitle}</Text>
            </View>
          </SwiperItem>)}
        </Swiper>
      </View>
      <View>
        {categoryList.map(category => <View className="selection m-category" key={category.id}>
          <View className="selection-title">
            <Text>{category.name}</Text>
          </View>
          <View className="at-row at-row--wrap categorys">
            {category.goodsList.map(item => <View key={item.id} className="at-col-6 category">
              <Image src={item.listPicUrl} />
              <View className="category-text">
                <Text className="category-text-name text-ellipsis">{item.name}</Text>
                <Text className="category-text-price">¥{parseInt(item.retailPrice)}</Text>
              </View>
            </View>)}
          </View>
        </View>)}
      </View>
    </View>
  )
}

export default connect(({ index }: {
  index: IndexState
}) => ({ index }))(Index)