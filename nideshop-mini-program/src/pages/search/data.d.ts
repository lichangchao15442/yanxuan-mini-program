

// 默认关键字数据的数据类型
interface DefaultKeywordType {
  id: number;
  isDefault: number;
  isHot: number;
  isShow: number;
  keyword: string;
  schemeUrl: string;
  sortOrder: number;
  type: number;
}

// 热门搜索数据的数据类型
interface HotKeywordType {
  isHot: number;
  keyword: string;
}

// 商品数据类型
interface GoodsType {
  id: number;
  listPicUrl: string;
  name: string;
  retailPrice: string;
}

// 商品列表查询展示方式中的分类列表数据的数据类型
interface FilterCategory {
  id: number;
  name: string;
}

export interface SearchStateType {
  defaultKeyword: DefaultKeywordType | {}; // 搜索框默认值
  hotKeywordList: HotKeywordType[]; // 热门搜索列表
  historyKeywordList: string[]; // 历史搜索列表
  helpKeywords: string[]; // 联想搜索列表
  goodsList: GoodsType[]; // 商品列表
  filterCategoryList: FilterCategory[]; // 分类列表
}