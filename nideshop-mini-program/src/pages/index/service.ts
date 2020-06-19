import request from '../../utils/request'

export const getIndexData = () => request({
  url: '/home',
  method: 'GET'
}) 

export const getGoodsCount = () => request({
  url: '/goods/count',
  method: 'GET'
})