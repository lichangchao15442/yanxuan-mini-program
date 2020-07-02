(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/search/search"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/search/search.tsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/search/search.tsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./search.scss */ "./src/pages/search/search.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Search, _Taro$Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray21", "loopArray22", "loopArray23", "loopArray24", "loopArray25", "$compid__10", "$compid__11", "$compid__12", "searchValue", "historyKeywordList", "hotKeywordList", "showSearchHelper", "helpKeywords", "goodsList", "currentShowType", "showCategoryTabs", "currentCategoryTab", "filterCategoryList"], _this.anonymousFunc2Map = {}, _this.anonymousFunc3Map = {}, _this.anonymousFunc4Map = {}, _this.anonymousFunc10Map = {}, _this.customComponents = ["AtSearchBar", "AtTag", "AtIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__10"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__10 = _genCompid2[0],
          $compid__10 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__11"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__11 = _genCompid4[0],
          $compid__11 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__12"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__12 = _genCompid6[0],
          $compid__12 = _genCompid6[1];

      var props = this.__props;

      // props 
      var dispatch = props.dispatch,
          _props$search = props.search,
          defaultKeyword = _props$search.defaultKeyword,
          hotKeywordList = _props$search.hotKeywordList,
          historyKeywordList = _props$search.historyKeywordList,
          helpKeywords = _props$search.helpKeywords,
          goodsList = _props$search.goodsList,
          filterCategoryList = _props$search.filterCategoryList;
      // useState

      var _useState = (0, _taroWeapp.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          searchValue = _useState2[0],
          setSearchValue = _useState2[1]; // 搜索框的值


      var _useState3 = (0, _taroWeapp.useState)(''),
          _useState4 = _slicedToArray(_useState3, 2),
          selectedHotKeyword = _useState4[0],
          setSelectedHotKeyword = _useState4[1]; // 当前选中的热门关键字的值


      var _useState5 = (0, _taroWeapp.useState)(true),
          _useState6 = _slicedToArray(_useState5, 2),
          showSearchHelper = _useState6[0],
          setShowSearchHelper = _useState6[1]; // 是否显示搜索帮助列表


      var _useState7 = (0, _taroWeapp.useState)({ keyword: '', page: 1, size: 20, sort: 'id', order: 'desc', categoryId: 0 }),
          _useState8 = _slicedToArray(_useState7, 2),
          tagQuery = _useState8[0],
          setTagQuery = _useState8[1]; // 点击标签进行搜索的条件


      var _useState9 = (0, _taroWeapp.useState)(''),
          _useState10 = _slicedToArray(_useState9, 2),
          currentShowType = _useState10[0],
          setCurrentShowType = _useState10[1]; // 当前选中的商品列表的展示类型


      var _useState11 = (0, _taroWeapp.useState)(0),
          _useState12 = _slicedToArray(_useState11, 2),
          currentCategoryTab = _useState12[0],
          setCurrentCategoryTab = _useState12[1]; // 当前选中的分类标签的ID，默认为全部（id:0）


      var _useState13 = (0, _taroWeapp.useState)(false),
          _useState14 = _slicedToArray(_useState13, 2),
          showCategoryTabs = _useState14[0],
          setShowCategoryTabs = _useState14[1]; // 是否显示分类tabs
      /** 当不存在搜索的关键字时获取搜索页面展示的数据 */


      (0, _taroWeapp.useEffect)(function () {
        if (!searchValue) {
          dispatch({
            type: 'search/fetchSearchData',
            callback: function callback(data) {
              var hotKeywordList = data.hotKeywordList;
              // 热门关键字默认选中第一个

              if (hotKeywordList.length) {
                setSelectedHotKeyword(hotKeywordList[0].keyword);
              }
            }
          });
          // 将商品列表中的相关状态至为初始状态
          setTagQuery({ keyword: '', page: 1, size: 20, sort: 'id', order: 'desc', categoryId: 0 });
          setCurrentShowType('');
          setCurrentCategoryTab(0);
        }
      }, [searchValue]);
      /** 搜索框值或者商品列表的展示条件发生变化引起的回调 */
      (0, _taroWeapp.useEffect)(function () {
        if (searchValue) {
          if (showSearchHelper) {
            // 搜索值源于手动输入,请求搜索帮助列表
            dispatch({
              type: 'search/fetchSearchHelperData',
              payload: {
                keyword: searchValue
              }
            });
          } else {
            // 搜索值源于点击
            console.log('点击得到的搜索值', searchValue);
            dispatch({
              type: 'search/fetchGoodsList',
              payload: tagQuery
            });
          }
        }
      }, [searchValue, tagQuery]);
      /** 搜索框的值改变引起的回调函数 */
      var onSearchValueChange = function onSearchValueChange(value) {
        // 更新搜索框的值
        setSearchValue(value);
        if (!showSearchHelper) {
          setShowSearchHelper(true);
        }
      };
      /** 取消搜索的回调函数 */
      var onCancelSearch = function onCancelSearch() {
        _taroWeapp2.default.navigateBack();
      };
      /** 选中某个热门关键字的回调函数 */
      var onChangeSelectedKeyword = function onChangeSelectedKeyword(_ref2) {
        var name = _ref2.name;

        // 更新selectedHotKeyword
        setSelectedHotKeyword(name);
        // 更新搜索框的值
        setSearchValue(name);
        // 更新是否展示帮助数据
        setShowSearchHelper(false);
        // 更新查询商品列表的入参
        setTagQuery(_extends({}, tagQuery, {
          keyword: name
        }));
      };
      /** 选中联想关键词列表中某个关键词 */
      var onSelectedHelp = function onSelectedHelp(name) {
        // 更新搜索框的值
        setSearchValue(name);
        // 更新是否展示帮助数据
        setShowSearchHelper(false);
        // 更新查询商品列表的入参
        setTagQuery(_extends({}, tagQuery, {
          keyword: name
        }));
      };
      /** 切换商品列表展示方式的tab引起的回调函数 */
      var onChangeShowTypeTab = function onChangeShowTypeTab(type) {
        console.log('onChangeShowTypeTab', type);
        switch (type) {
          case 'comprehensive':
            setCurrentShowType('comprehensive');
            setTagQuery(_extends({}, tagQuery, {
              sort: 'default',
              order: 'desc'
            }));
            break;
          case 'price':
          case 'priceAsc':
            setCurrentShowType('priceAsc');
            setTagQuery(_extends({}, tagQuery, {
              sort: 'price',
              order: 'asc'
            }));
            break;
          case 'priceDesc':
            setCurrentShowType('priceDesc');
            setTagQuery(_extends({}, tagQuery, {
              sort: 'price',
              order: 'desc'
            }));
            break;
          case 'category':
            setShowCategoryTabs(true);
          default:
            break;
        }
      };
      /** 选择分类标签 */
      var onSelectCategory = function onSelectCategory(id) {
        console.log('id', id);
        // 改变选中值的颜色
        setCurrentCategoryTab(id);
        // 改变tagQuery的分类ID字段数据 
        setTagQuery(_extends({}, tagQuery, {
          categoryId: id
        }));
        // 隐藏分类列表
        setShowCategoryTabs(false);
      };
      this.anonymousFunc0 = onSearchValueChange;
      this.anonymousFunc1 = onCancelSearch;

      this.anonymousFunc5 = function () {
        onChangeShowTypeTab('comprehensive');
      };

      this.anonymousFunc6 = function () {
        onChangeShowTypeTab('price');
      };

      this.anonymousFunc7 = function () {
        onChangeShowTypeTab('priceAsc');
      };

      this.anonymousFunc8 = function () {
        onChangeShowTypeTab('priceDesc');
      };

      this.anonymousFunc9 = function () {
        onChangeShowTypeTab('category');
      };

      var loopArray21 = !searchValue ? historyKeywordList.map(function (item, __index2) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "gzzzz" + __index2;

        _this2.anonymousFunc2Map[_$indexKey] = onChangeSelectedKeyword;

        var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + 'bazzzzzzzz' + __index2, true),
            _genCompid8 = _slicedToArray(_genCompid7, 2),
            $prevCompid__8 = _genCompid8[0],
            $compid__8 = _genCompid8[1];

        !searchValue && _taroWeapp.propsManager.set({
          "className": "search-hot-keyword",
          "name": item.$original,
          "onClick": _this2.anonymousFunc2.bind(_this2, _$indexKey)
        }, $compid__8, $prevCompid__8);
        return {
          _$indexKey: _$indexKey,
          $compid__8: $compid__8,
          $original: item.$original
        };
      }) : [];
      var loopArray22 = !searchValue ? hotKeywordList.map(function (item, __index3) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = !searchValue ? selectedHotKeyword === item.$original.keyword : null;

        var _$indexKey2 = "hzzzz" + __index3;

        _this2.anonymousFunc3Map[_$indexKey2] = onChangeSelectedKeyword;

        var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + 'bbzzzzzzzz' + __index3, true),
            _genCompid10 = _slicedToArray(_genCompid9, 2),
            $prevCompid__9 = _genCompid10[0],
            $compid__9 = _genCompid10[1];

        !searchValue && _taroWeapp.propsManager.set({
          "className": "search-hot-keyword",
          "name": item.$original.keyword,
          "active": $loopState__temp2,
          "onClick": _this2.anonymousFunc3.bind(_this2, _$indexKey2)
        }, $compid__9, $prevCompid__9);
        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey2: _$indexKey2,
          $compid__9: $compid__9,
          $original: item.$original
        };
      }) : [];
      var loopArray23 = searchValue && showSearchHelper ? helpKeywords.map(function (item, __index4) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey3 = "izzzz" + __index4;

        _this2.anonymousFunc4Map[_$indexKey3] = function () {
          onSelectedHelp(item.$original);
        };

        return {
          _$indexKey3: _$indexKey3,
          $original: item.$original
        };
      }) : [];
      var loopArray24 = showCategoryTabs ? filterCategoryList.map(function (item, __index10) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey4 = "jzzzz" + __index10;

        _this2.anonymousFunc10Map[_$indexKey4] = function () {
          return onSelectCategory(item.$original.id);
        };

        return {
          _$indexKey4: _$indexKey4,
          $original: item.$original
        };
      }) : [];
      var loopArray25 = searchValue && !showSearchHelper && goodsList.length !== 0 ? goodsList.map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp4 = searchValue && !showSearchHelper && goodsList.length !== 0 ? parseInt(item.$original.retailPrice) : null;
        return {
          $loopState__temp4: $loopState__temp4,
          $original: item.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "className": "my-at-search-bar",
        "placeholder": defaultKeyword.keyword,
        "actionName": '\u53D6\u6D88',
        "showActionButton": true,
        "value": searchValue,
        "onChange": this.anonymousFunc0,
        "onActionClick": this.anonymousFunc1
      }, $compid__10, $prevCompid__10);
      searchValue && !showSearchHelper && goodsList.length !== 0 && _taroWeapp.propsManager.set({
        "value": "chevron-up",
        "size": "12",
        "color": currentShowType === 'priceAsc' ? '#b4282d' : 'rgb(222, 222, 222)',
        "onClick": this.anonymousFunc7
      }, $compid__11, $prevCompid__11);
      searchValue && !showSearchHelper && goodsList.length !== 0 && _taroWeapp.propsManager.set({
        "value": "chevron-down",
        "size": "12",
        "color": currentShowType === 'priceDesc' ? '#b4282d' : 'rgb(222, 222, 222)',
        "onClick": this.anonymousFunc8
      }, $compid__12, $prevCompid__12);
      Object.assign(this.__state, {
        loopArray21: loopArray21,
        loopArray22: loopArray22,
        loopArray23: loopArray23,
        loopArray24: loopArray24,
        loopArray25: loopArray25,
        $compid__10: $compid__10,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        searchValue: searchValue,
        historyKeywordList: historyKeywordList,
        hotKeywordList: hotKeywordList,
        showSearchHelper: showSearchHelper,
        helpKeywords: helpKeywords,
        goodsList: goodsList,
        currentShowType: currentShowType,
        showCategoryTabs: showCategoryTabs,
        currentCategoryTab: currentCategoryTab,
        filterCategoryList: filterCategoryList
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(_$indexKey) {
      var _anonymousFunc2Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc2Map[_$indexKey] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(_$indexKey2) {
      var _anonymousFunc3Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc3Map[_$indexKey2] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey2].apply(_anonymousFunc3Map, e);
    }
  }, {
    key: 'anonymousFunc4',
    value: function anonymousFunc4(_$indexKey3) {
      var _anonymousFunc4Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc4Map[_$indexKey3] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey3].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: 'anonymousFunc6',
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: 'anonymousFunc8',
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: 'anonymousFunc9',
    value: function anonymousFunc9(e) {
      ;
    }
  }, {
    key: 'anonymousFunc10',
    value: function anonymousFunc10(_$indexKey4) {
      var _anonymousFunc10Map;

      ;

      for (var _len5 = arguments.length, e = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        e[_key5 - 1] = arguments[_key5];
      }

      return this.anonymousFunc10Map[_$indexKey4] && (_anonymousFunc10Map = this.anonymousFunc10Map)[_$indexKey4].apply(_anonymousFunc10Map, e);
    }
  }]);

  return Search;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc9", "anonymousFunc10"], _class.$$componentPath = "pages/search/search", _temp2);


var Search__Connected = (0, _redux.connect)(function (_ref3) {
  var search = _ref3.search;
  return { search: search };
})(Search);
exports.default = Search__Connected;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Search__Connected, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/huxiaowen/Documents/study/projects_by_me/nideshop/nideshop-mini-program/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/search/search.tsx?taro&type=template&parse=PAGE&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/huxiaowen/Documents/study/projects_by_me/nideshop/nideshop-mini-program/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/search/search.tsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/search/search.wxml";

/***/ }),

/***/ "./src/pages/search/search.scss":
/*!**************************************!*\
  !*** ./src/pages/search/search.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/search/search.tsx":
/*!*************************************!*\
  !*** ./src/pages/search/search.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.tsx?taro&type=template&parse=PAGE& */ "./src/pages/search/search.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _search_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.tsx?taro&type=script&parse=PAGE& */ "./src/pages/search/search.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/search/search.tsx?taro&type=script&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/search/search.tsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_search_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./search.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/search/search.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_search_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_search_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_search_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_search_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_search_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/search/search.tsx?taro&type=template&parse=PAGE&":
/*!********************************************************************!*\
  !*** ./src/pages/search/search.tsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_search_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/huxiaowen/Documents/study/projects_by_me/nideshop/nideshop-mini-program/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./search.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/huxiaowen/Documents/study/projects_by_me/nideshop/nideshop-mini-program/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/search/search.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_search_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_search_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_search_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_search_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/search/search.tsx","runtime","taro","vendors"]]]);