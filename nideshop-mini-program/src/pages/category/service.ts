import request from '../../utils/request'

export  const getGoodsCategory = (data:{id:string}) => request({
  url: '/goods/category',
  method:'GET',
  data
})

export const getGoddsList = (data: {
  categoryId: number;
  page: number;
  size: number;
}) => request({
  url: '/goods/list',
  method: 'GET',
  data
})