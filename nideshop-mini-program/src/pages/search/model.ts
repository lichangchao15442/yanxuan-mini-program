import {Reducer} from 'redux'

import { SearchStateType } from './data'
import { fetchSearchData, fetchSearchHelperData, fetchGoodsList } from './service'

interface ModelType {
  namespace: string;
  state: SearchStateType;
  effects: {
    fetchSearchData: any;
    fetchSearchHelperData: any;
    fetchGoodsList: any;
  };
  reducers: {
    save: Reducer
  };
}

const Model:ModelType = {
  namespace: 'search',

  state: {
    defaultKeyword: {},
    hotKeywordList: [],
    historyKeywordList: [],
    helpKeywords: [],
    goodsList: [],
    filterCategoryList: []
  },

  effects: {
    // 获取搜索页面展示数据
    *fetchSearchData({callback }, { call, put }) {
      const response = yield call(fetchSearchData)
      if(response.code === '1') {
        yield put({
          type: 'save',
          payload: {
            defaultKeyword: response.data.defaultKeyword,
            hotKeywordList: response.data.hotKeywordList,
            historyKeywordList: response.data.historyKeywordList,
          }
        })
        callback && callback(response.data)
      }
    },
    // 获取搜索提示数据
    *fetchSearchHelperData({ payload },{ call, put }) {
      const response = yield call(fetchSearchHelperData, payload)
      if(response.code === '1') {
        yield put({
          type: 'save',
          payload: {
            helpKeywords: response.data
          }
        })
      }
    },
    // 获取商品列表
    *fetchGoodsList({ payload }, { call, put }) {
      const response = yield call(fetchGoodsList, payload)
      if(response.code === '1') {
        yield put({
          type: 'save',
          payload: {
            goodsList: response.data.goodsList,
            filterCategoryList: response.data.filterCategory,
          }
        })
      }
    }
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  },
}

export default Model