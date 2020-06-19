import { Reducer } from 'redux'

import { IndexState } from './data'
import { getIndexData , getGoodsCount} from './service'

interface IndexModelType {
  namespace: string;
  state: IndexState;
  effects: {
    fetchIndexData: any;
    fetchGoodsCount: any;
  };
  reducers: {
    save: Reducer
  };
}

const Model: IndexModelType = {
  namespace: 'index',

  state:{
    banner: [],
    channel: [],
    brandList: [],
    newGoodsList: [],
    hotGoodsList: [],
    topicList: [],
    categoryList: [],
    goodsCount: 0
  },

  effects: {
    // 获取首页数据
    *fetchIndexData({ payload }, { call, put} ) {
      const response = yield call(getIndexData, payload)
      if(response.code === '1') {
        yield put({
          type: 'save',
          payload: {
            banner: response.data.banner,
            channel: response.data.channel,
            brandList: response.data.brandList,
            newGoodsList: response.data.newGoodsList,
            hotGoodsList: response.data.hotGoodsList,
            topicList: response.data.topicList,
            categoryList: response.data.categoryList,
          }
        })
      }
    },
    // 获取商品总数
    *fetchGoodsCount({ }, { call, put }) {
      const response = yield call(getGoodsCount)
      if(response.code === '1') {
        yield put({
          type: 'save',
          payload: {
            goodsCount: response.data
          }
        })
      }
    }
  },

  reducers:{
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
}

export default Model