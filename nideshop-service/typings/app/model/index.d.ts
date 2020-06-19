// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAd from '../../../app/model/ad';
import ExportBrand from '../../../app/model/brand';
import ExportCategory from '../../../app/model/category';
import ExportChannel from '../../../app/model/channel';
import ExportGoods from '../../../app/model/goods';
import ExportKeywords from '../../../app/model/keywords';
import ExportSearchHistory from '../../../app/model/search_history';
import ExportTopic from '../../../app/model/topic';

declare module 'egg' {
  interface IModel {
    Ad: ReturnType<typeof ExportAd>;
    Brand: ReturnType<typeof ExportBrand>;
    Category: ReturnType<typeof ExportCategory>;
    Channel: ReturnType<typeof ExportChannel>;
    Goods: ReturnType<typeof ExportGoods>;
    Keywords: ReturnType<typeof ExportKeywords>;
    SearchHistory: ReturnType<typeof ExportSearchHistory>;
    Topic: ReturnType<typeof ExportTopic>;
  }
}
