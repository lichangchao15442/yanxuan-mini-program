
// 商品分类数据类型
interface GoodsCategoryType {
  id: number;
  name: string;
  frontName: string;
}

// 商品数据类型
interface GoodsListType {
  id: number;
  name: string;
  listPicUrl: string;
  retailPrice: string;
}

export interface CategoryState {
  goodsCategory: GoodsCategoryType[];
  currentCategory: GoodsCategoryType | {};
  goodsList: GoodsListType[];
}