import {Reducer} from 'redux'

import { CategoryState } from './data'
import {getGoodsCategory, getGoddsList} from './service'

interface CategoryModel {
  namespace: string;
  state: CategoryState;
  effects: {
    fetchGoodsCategory: any;
    fetchGoodsList: any;
  };
  reducers: {
    save:Reducer
  };
}

const Model: CategoryModel = {
  namespace: 'category',
  
  state: {
    goodsCategory: [],
    currentCategory: {},
    goodsList: []
  },
  
  effects: {
    /** 获取分类数据 */
    *fetchGoodsCategory({ payload }, { call, put }) {
      const response = yield call(getGoodsCategory, payload)
      if(response.code === '1') {
        yield put({
          type: 'save',
          payload: {
            goodsCategory: response.data.brotherCategory,
            currentCategory: response.data.currentCategory
          }
        })
      }
    },
    /** 获取商品列表 */
    *fetchGoodsList({ payload }, { call, put }) {
      const response = yield call(getGoddsList, payload)
      if (response.code === '1') {
        yield put({
          type: 'save',
          payload: {
            goodsList: response.data.goodsList
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