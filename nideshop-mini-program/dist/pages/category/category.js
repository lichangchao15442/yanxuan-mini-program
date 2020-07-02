(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/category/category"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/category/category.tsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/category/category.tsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(/*! ./category.scss */ "./src/pages/category/category.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Category, _Taro$Component);

  function Category() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Category);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Category.__proto__ || Object.getPrototypeOf(Category)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray33", "$compid__19", "goodsList", "currentCategory"], _this.customComponents = ["AtTabs"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Category, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Category.prototype.__proto__ || Object.getPrototypeOf(Category.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__19"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__19 = _genCompid2[0],
          $compid__19 = _genCompid2[1];

      var props = this.__props;

      // router
      var router = (0, _taroWeapp.useRouter)();
      var id = router.params.id;
      // props

      var dispatch = props.dispatch,
          _props$category = props.category,
          goodsCategory = _props$category.goodsCategory,
          currentCategory = _props$category.currentCategory,
          goodsList = _props$category.goodsList;
      // useState

      var _useState = (0, _taroWeapp.useState)([]),
          _useState2 = _slicedToArray(_useState, 2),
          tabList = _useState2[0],
          setTabList = _useState2[1]; // 分类tab标签


      var _useState3 = (0, _taroWeapp.useState)(0),
          _useState4 = _slicedToArray(_useState3, 2),
          currentTab = _useState4[0],
          setCurrentTab = _useState4[1]; // 当前选中的tab
      // useRef


      var hasClickedTab = (0, _taroWeapp.useRef)(false); // 是否点击过分类tab
      (0, _taroWeapp.useEffect)(function () {
        if (goodsCategory.length) {
          // 生成tabList
          var data = goodsCategory.map(function (item) {
            return { title: item.name };
          });
          setTabList(data);
        }
      }, [goodsCategory]);
      (0, _taroWeapp.useEffect)(function () {
        var categoryId = goodsCategory.length ? goodsCategory[currentTab].id : id;
        // 进入页面，设置选中的tab
        if (!hasClickedTab.current) {
          setCurrentTab(findTabIndex(id));
        }
        // 获取分类列表和当前分类
        dispatch({
          type: 'category/fetchGoodsCategory',
          payload: {
            id: categoryId
          }
        });
        // 获取某个分类下面的商品数据
        dispatch({
          type: 'category/fetchGoodsList',
          payload: {
            categoryId: categoryId,
            page: 1,
            size: 10000
          }
        });
      }, [currentTab]);
      /**
       * 在商品分类列表中根据分类ID找到其下标
       * @param id
       */
      var findTabIndex = function findTabIndex(id) {
        var initIndex = 0;
        goodsCategory.map(function (item, index) {
          if (item.id === Number(id)) {
            initIndex = index;
          }
          return item;
        });
        return initIndex;
      };
      /**
       * 点击选中某项分类tab
       * @param index
       */
      var onSelectTab = function onSelectTab(index) {
        hasClickedTab.current = true;
        setCurrentTab(index);
      };

      this.anonymousFunc0 = function (index) {
        onSelectTab(index);
      };

      var loopArray33 = goodsList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = (0, _classnames2.default)('goods-item', index % 2 === 0 ? 'goods-item-left' : 'goods-item-right');
        var $loopState__temp4 = (0, _taroWeapp.internal_inline_style)({ width: '100%' });
        var $loopState__temp6 = parseInt(item.$original.retailPrice);
        return {
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "className": "my-at-tabs",
        "current": currentTab,
        "scroll": true,
        "tabList": tabList,
        "onClick": this.anonymousFunc0
      }, $compid__19, $prevCompid__19);
      Object.assign(this.__state, {
        loopArray33: loopArray33,
        $compid__19: $compid__19,
        goodsList: goodsList,
        currentCategory: currentCategory
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return Category;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "pages/category/category", _temp2);


var Category__Connected = (0, _redux.connect)(function (_ref2) {
  var category = _ref2.category;
  return { category: category };
})(Category);
exports.default = Category__Connected;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Category__Connected, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/huxiaowen/Documents/study/projects_by_me/nideshop/nideshop-mini-program/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/category/category.tsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/huxiaowen/Documents/study/projects_by_me/nideshop/nideshop-mini-program/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/category/category.tsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/category/category.wxml";

/***/ }),

/***/ "./src/pages/category/category.scss":
/*!******************************************!*\
  !*** ./src/pages/category/category.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/category/category.tsx":
/*!*****************************************!*\
  !*** ./src/pages/category/category.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.tsx?taro&type=template&parse=PAGE& */ "./src/pages/category/category.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _category_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.tsx?taro&type=script&parse=PAGE& */ "./src/pages/category/category.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _category_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _category_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/category/category.tsx?taro&type=script&parse=PAGE&":
/*!**********************************************************************!*\
  !*** ./src/pages/category/category.tsx?taro&type=script&parse=PAGE& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_category_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./category.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/category/category.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_category_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_category_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_category_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_category_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_category_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/category/category.tsx?taro&type=template&parse=PAGE&":
/*!************************************************************************!*\
  !*** ./src/pages/category/category.tsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_category_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/huxiaowen/Documents/study/projects_by_me/nideshop/nideshop-mini-program/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./category.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/huxiaowen/Documents/study/projects_by_me/nideshop/nideshop-mini-program/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/category/category.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_category_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_category_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_category_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_category_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/category/category.tsx","runtime","taro","vendors"]]]);