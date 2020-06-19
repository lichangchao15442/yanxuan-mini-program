(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/search-bar/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx?taro&type=script&parse=COMPONENT&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtSearchBar = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtSearchBar, _AtComponent);

  function AtSearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtSearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtSearchBar.__proto__ || Object.getPrototypeOf(AtSearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "rootCls", "inputType", "value", "isFocus", "disabled", "maxLength", "placeholder", "actionName", "fixed", "showActionButton", "className", "customStyle"], _this.handleFocus = function (event) {
      _this.setState({
        isFocus: true
      });
      _this.props.onFocus && _this.props.onFocus(event);
    }, _this.handleBlur = function (event) {
      _this.setState({
        isFocus: false
      });
      _this.props.onBlur && _this.props.onBlur(event);
    }, _this.handleChange = function (e) {
      _this.props.onChange(e.target.value, e);
    }, _this.handleClear = function (event) {
      if (_this.props.onClear) {
        _this.props.onClear(event);
      } else {
        _this.props.onChange('', event);
      }
    }, _this.handleConfirm = function (event) {
      _this.props.onConfirm && _this.props.onConfirm(event);
    }, _this.handleActionClick = function (event) {
      _this.props.onActionClick && _this.props.onActionClick(event);
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtSearchBar, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtSearchBar.prototype.__proto__ || Object.getPrototypeOf(AtSearchBar.prototype), '_constructor', this).call(this, props);

      this.state = {
        isFocus: !!props.focus
      };
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

      var _props = this.__props,
          value = _props.value,
          placeholder = _props.placeholder,
          maxLength = _props.maxLength,
          fixed = _props.fixed,
          disabled = _props.disabled,
          showActionButton = _props.showActionButton,
          actionName = _props.actionName,
          inputType = _props.inputType,
          className = _props.className,
          customStyle = _props.customStyle;
      var isFocus = this.__state.isFocus;

      var fontSize = 14;
      var rootCls = (0, _classnames2.default)('at-search-bar', {
        'at-search-bar--fixed': fixed
      }, className);
      var placeholderWrapStyle = {};
      var actionStyle = {};
      if (isFocus || !isFocus && value) {
        actionStyle.opacity = 1;
        actionStyle.marginRight = "0";
        placeholderWrapStyle.flexGrow = 0;
      } else if (!isFocus && !value) {
        placeholderWrapStyle.flexGrow = 1;
        actionStyle.opacity = 0;
        actionStyle.marginRight = "-" + ((actionName.length + 1) * fontSize + 7 + 10) + "px";
      }
      if (showActionButton) {
        actionStyle.opacity = 1;
        actionStyle.marginRight = "0";
      }
      var clearIconStyle = { display: 'flex' };
      var placeholderStyle = { visibility: 'hidden' };
      if (!value.length) {
        clearIconStyle.display = 'none';
        placeholderStyle.visibility = 'visible';
      }
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(customStyle);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(placeholderWrapStyle);
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)(placeholderStyle);
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)(clearIconStyle);
      var anonymousState__temp5 = (0, _taroWeapp.internal_inline_style)(actionStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        rootCls: rootCls,
        inputType: inputType,
        value: value,
        disabled: disabled,
        maxLength: maxLength,
        placeholder: placeholder,
        actionName: actionName
      });
      return this.__state;
    }
  }]);

  return AtSearchBar;
}(_component2.default), _class.$$events = ["handleChange", "handleFocus", "handleBlur", "handleConfirm", "handleClear", "handleActionClick"], _class.$$componentPath = "node_modules/taro-ui/dist/weapp/components/search-bar/index", _temp2);


AtSearchBar.defaultProps = {
  value: '',
  placeholder: '搜索',
  maxLength: 140,
  fixed: false,
  focus: false,
  disabled: false,
  showActionButton: false,
  actionName: '搜索',
  inputType: 'text',
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onConfirm: function onConfirm() {},
  onActionClick: function onActionClick() {}
};
AtSearchBar.propTypes = {
  value: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  maxLength: _propTypes2.default.number,
  fixed: _propTypes2.default.bool,
  focus: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  showActionButton: _propTypes2.default.bool,
  actionName: _propTypes2.default.string,
  inputType: _propTypes2.default.oneOf(['text', 'number', 'idcard', 'digit']),
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onConfirm: _propTypes2.default.func,
  onActionClick: _propTypes2.default.func,
  onClear: _propTypes2.default.func
};
exports.default = AtSearchBar;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtSearchBar));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/huxiaowen/Documents/study/projects_by_me/nideshop/nideshop-mini-program/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx?taro&type=template&parse=COMPONENT&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/huxiaowen/Documents/study/projects_by_me/nideshop/nideshop-mini-program/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/taro-ui/dist/weapp/components/search-bar/index.wxml";

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx":
/*!*************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx?taro&type=script&parse=COMPONENT&":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx?taro&type=template&parse=COMPONENT&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/huxiaowen/Documents/study/projects_by_me/nideshop/nideshop-mini-program/node_modules&outputPath=npm!../../../../../@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/huxiaowen/Documents/study/projects_by_me/nideshop/nideshop-mini-program/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_huxiaowen_Documents_study_projects_by_me_nideshop_nideshop_mini_program_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx","runtime","taro","vendors"]]]);