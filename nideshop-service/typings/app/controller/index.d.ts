// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGoods from '../../../app/controller/goods';
import ExportHome from '../../../app/controller/home';
import ExportSearch from '../../../app/controller/search';

declare module 'egg' {
  interface IController {
    goods: ExportGoods;
    home: ExportHome;
    search: ExportSearch;
  }
}
