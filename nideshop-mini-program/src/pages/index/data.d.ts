
// 轮播图数据类型
interface BannerType {
  id: number;
  name: string;
  adPositionId: number;
  link: string;
  imageUrl: string;
  content: string;
  enabled: number;
  endTime: string;
  mediaType: number;
}

// 频道菜单数据类型
interface ChannelType {
  id: number;
  name: string;
  url: string;
  iconUrl: string;
  sortOrder: number;
}


// 品牌数据数据类型
interface BrandType {
  id: number;
  name: string;
  simpleDesc: string;
  appListPicUrl: string;
  listPicUrl: string;
  picUrl: string;
  newPicUrl: string;
  floorPrice: string;
  isNew: number;
  isShow: number;
  sortOrder: number;
  newSortOrder: number;
}

// 新品数据的数据类型
interface NewGoodsType {
  id: number;
  listPicUrl: string;
  name: string;
  retailPrice: string;
}

// 人气推荐数据的数据类型
interface HotGoodsType {
  id: number;
  name: string;
  retailPrice: string;
  listPicUrl: string;
  goodsBrief: string;
}

// 专题精选数据的数据类型
interface TopicType {
  id: number;
  avatar: string;
  content: string;
  itemPicUrl: string;
  isShow: number;
  priceInfo: string;
  readCount: string;
  scenePicUrl: string;
  sortOrder: number;
  subtitle: string;
  title: string;
  topicCategoryId: number;
  topicTagId: number;
  topicTemplateId: number;
}

// 货物数据的数据类型
interface GoodsType {
  id: number;
  name: string;
  listPicUrl: string;
  retailPrice: string;
}

// 分类数据的数据类型
interface CategoryType {
  id: number;
  name: string;
  goodsList: GoodsType[];
}
export interface IndexState {
  banner: BannerType[];
  channel: ChannelType[];
  brandList: BrandType[];
  newGoodsList: NewGoodsType[];
  hotGoodsList: HotGoodsType[];
  topicList: TopicType[];
  categoryList: CategoryType[];
  goodsCount: number; //商品总数
}