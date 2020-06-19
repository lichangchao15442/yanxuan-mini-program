import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/home', controller.home.index); // 获取首页的展示数据
  router.get('/search/index', controller.search.index); // 获取搜索页面的展示数据
  router.get('/search/helper', controller.search.helper); // 获取搜索帮助的数据
  router.get('/goods/count', controller.goods.getGoodsCount); // 获取商品总数
  router.get('/goods/list', controller.goods.list); // 获取搜索得到的商品列表
};
