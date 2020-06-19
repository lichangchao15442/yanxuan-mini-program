import request from '../../utils/request'

export const fetchSearchData = () => request({
  url: '/search/index',
  method: 'GET'
})

export const fetchSearchHelperData = (params: { keyword: string; }) => request({
  url: '/search/helper',
  method: 'GET',
  data: params
})

export const fetchGoodsList = (params: {
  keyword: string;
  page: number;
  size: number;
  sort: string;
  order: 'asc' | 'desc',
  categoryId: number;
}) => request({
  url: '/goods/list',
  method: 'GET',
  data: params
})