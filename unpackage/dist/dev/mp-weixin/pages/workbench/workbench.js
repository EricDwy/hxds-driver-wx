(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/workbench/workbench"],{

/***/ 78:
/*!********************************************************************************!*\
  !*** D:/0upup/hxds-driver-wx/main.js?{"page":"pages%2Fworkbench%2Fworkbench"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _workbench = _interopRequireDefault(__webpack_require__(/*! ./pages/workbench/workbench.vue */ 79));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_workbench.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 79:
/*!*************************************************************!*\
  !*** D:/0upup/hxds-driver-wx/pages/workbench/workbench.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _workbench_vue_vue_type_template_id_7e8c81f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workbench.vue?vue&type=template&id=7e8c81f4& */ 80);
/* harmony import */ var _workbench_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workbench.vue?vue&type=script&lang=js& */ 82);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _workbench_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _workbench_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _workbench_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workbench.vue?vue&type=style&index=0&lang=less& */ 86);
/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _workbench_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _workbench_vue_vue_type_template_id_7e8c81f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _workbench_vue_vue_type_template_id_7e8c81f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _workbench_vue_vue_type_template_id_7e8c81f4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/workbench/workbench.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/*!********************************************************************************************!*\
  !*** D:/0upup/hxds-driver-wx/pages/workbench/workbench.vue?vue&type=template&id=7e8c81f4& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_template_id_7e8c81f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./workbench.vue?vue&type=template&id=7e8c81f4& */ 81);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_template_id_7e8c81f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_template_id_7e8c81f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_template_id_7e8c81f4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_template_id_7e8c81f4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 81:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0upup/hxds-driver-wx/pages/workbench/workbench.vue?vue&type=template&id=7e8c81f4& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uAvatar: function () {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-avatar/u-avatar */ "uview-ui/components/u-avatar/u-avatar").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-avatar/u-avatar.vue */ 263))
    },
    uTopTips: function () {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-top-tips/u-top-tips */ "uview-ui/components/u-top-tips/u-top-tips").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-top-tips/u-top-tips.vue */ 270))
    },
    uToast: function () {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-toast/u-toast */ "uview-ui/components/u-toast/u-toast").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-toast/u-toast.vue */ 256))
    },
    uModal: function () {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-modal/u-modal */ "uview-ui/components/u-modal/u-modal").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-modal/u-modal.vue */ 277))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = ["接客户", "到达代驾点", "开始代驾"].includes(_vm.workStatus)
  var g1 = ["开始接单", "停止接单"].includes(_vm.workStatus)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 82:
/*!**************************************************************************************!*\
  !*** D:/0upup/hxds-driver-wx/pages/workbench/workbench.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./workbench.vue?vue&type=script&lang=js& */ 83);
/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 83:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0upup/hxds-driver-wx/pages/workbench/workbench.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var QQMapWX = __webpack_require__(/*! ../../lib/qqmap-wx-jssdk.min.js */ 84);
var qqmapsdk;
var plugin = requirePlugin('WechatSI');
var dayjs = __webpack_require__(/*! dayjs */ 85);
var _default = {
  data: function data() {
    return {
      reviewAuth: uni.getStorageSync('realAuth') == 3,
      hour: 0,
      income: 0,
      orders: 0,
      map: null,
      windowHeight: 0,
      contentStyle: '',
      latitude: 39.908823,
      longitude: 116.39747,
      service: {
        locationIcon: '../../static/workbench/service-icon-1.png',
        locationText: '定位正常',
        locationStyle: '',
        messageIcon: '../../static/workbench/service-icon-2.png',
        messageText: '推送正常',
        messageStyle: '',
        listenIcon: '../../static/workbench/service-icon-3.png',
        listenText: '收听订单',
        listenStyle: '',
        settingIcon: '../../static/workbench/service-icon-4.png',
        settingText: '接单设置',
        settingStyle: ''
      },
      settings: {
        listenService: true,
        autoAccept: false
      },
      workStatus: uni.getStorageSync('workStatus'),
      newOrder: null,
      newOrderList: [],
      executeOrder: {
        id: '',
        photo: '',
        title: '',
        tel: '',
        customerId: '',
        startPlace: '',
        startPlaceLocation: {},
        endPlace: '',
        endPlaceLocation: {},
        favourFee: '',
        carPlate: '',
        carType: '',
        createTime: ''
      },
      reciveNewOrderTimer: null,
      playFlag: false,
      audio: null,
      canAcceptOrder: false,
      accepting: false,
      showModel: false,
      modelTitle: '',
      modelContent: '',
      model: {
        cancelConfirm: {
          show: false,
          title: '提示消息',
          content: '如果不满足订单免费取消规则，只能有偿取消订单，并且可能被禁止接单一段时间，您确认要取消当前订单？'
        },
        cancelSuccess: {
          show: false,
          title: '提示消息',
          content: ''
        }
      },
      recordNum: 0,
      recordManager: null,
      stopRecord: false
    };
  },
  methods: {
    changeListenService: function changeListenService(bool) {
      if (bool) {
        this.service.listenIcon = '../../static/workbench/service-icon-3.png';
        this.service.listenStyle = 'color:#46B68F';
        this.service.listenText = '收听订单';
      } else {
        this.service.listenIcon = '../../static/workbench/service-icon-7.png';
        this.service.listenStyle = 'color:#FF4D4D';
        this.service.listenText = '不听订单';
      }
    },
    returnLocationHandle: function returnLocationHandle() {
      this.map.moveToLocation();
    },
    startWorkHandle: function startWorkHandle() {
      var that = this;
      /*
       * TODO 检查司机是否可以接单
       * 1.没有被禁止接单
       * 2.没有未缴纳的罚款
       * 3.当天已经做了人脸验证
       */
      //设置司机当天通过身份验证
      uni.setStorageSync('verification', {
        result: true,
        date: dayjs().format('YYYY-MM-DD')
      });
      uni.showModal({
        title: '提示消息',
        content: '你要开始接收代驾订单信息？',
        success: function success(resp) {
          if (resp.confirm) {
            uni.vibrateShort({});
            var audio = uni.createInnerAudioContext();
            that.audio = audio;
            audio.src = '/static/voice/voice_1.mp3';
            audio.play();
            that.$refs.uToast.show({
              title: '开始接单了',
              type: 'success',
              callback: function callback() {
                that.ajax(that.url.startWork, 'POST', null, function (resp) {});
                uni.setStorageSync('workStatus', '开始接单');
                that.workStatus = '开始接单';
                //初始化新订单和列表变量
                that.newOrder = null;
                that.newOrderList.length = 0;
                that.executeOrder = {};
                //创建接收新订单消息的定时器，每隔5秒钟接收一次新订单消息
                if (that.reciveNewOrderTimer == null) {
                  that.reciveNewOrderTimer = that.createTimer(that);
                }
              }
            });
          }
        }
      });
    },
    stopWorkHandle: function stopWorkHandle() {
      var that = this;
      uni.showModal({
        title: '提示消息',
        content: '你要停止接收代驾订单信息？',
        success: function success(resp) {
          if (resp.confirm) {
            uni.vibrateShort({});
            if (that.audio != null) {
              that.audio.stop();
            }
            var audio = uni.createInnerAudioContext();
            that.audio = audio;
            audio.src = '/static/voice/voice_2.mp3';
            audio.play();
            that.$refs.uToast.show({
              title: '停止接单了',
              type: 'default',
              callback: function callback() {
                that.ajax(that.url.stopWork, 'POST', null, function (resp) {});
                that.workStatus = '停止接单';
                uni.setStorageSync('workStatus', '停止接单');
                //初始化新订单和列表变量
                that.newOrder = null;
                that.newOrderList.length = 0;
                that.executeOrder = {};
                //销毁接收新订单消息的定时器
                clearInterval(that.reciveNewOrderTimer);
                that.reciveNewOrderTimer = null;
                that.playFlag = false;
              }
            });
          }
        }
      });
    },
    createTimer: function createTimer(ref) {
      var timer = setInterval(function () {
        ref.ajax(ref.url.receiveNewOrderMessage, 'POST', null, function (resp) {
          var result = resp.data.result;
          if (result.length > 0) {
            // console.log(result);
            ref.newOrderList = result.concat(ref.newOrderList);
            if (ref.playFlag == false) {
              //调用封装函数
              ref.showNewOrder(ref);
            }
          }
        }, false);
      }, 5000);
      return timer;
    },
    showNewOrder: function showNewOrder(ref) {
      ref.playFlag = true;
      ref.canAcceptOrder = false;
      var order = ref.newOrderList.shift();
      var orderId = order.orderId;
      var distance = order.distance;
      var expectsFee = order.expectsFee;
      var favourFee = order.favourFee;
      var from = order.from;
      var to = order.to;
      var mileage = order.mileage;
      var minute = order.minute;
      ref.newOrder = {
        orderId: orderId,
        distance: distance,
        expectsFee: expectsFee,
        favourFee: favourFee,
        from: from,
        to: to,
        mileage: mileage,
        minute: minute
      };
      if (ref.settings.listenService) {
        var audio = uni.createInnerAudioContext();
        ref.audio = audio;
        plugin.textToSpeech({
          lang: 'zh_CN',
          tts: true,
          content: "\u5373\u65F6\u8BA2\u5355\uFF0C\u8DDD\u79BB\u60A8".concat(distance, "\u516C\u91CC\uFF0C\u4ECE").concat(from, "\uFF0C\u5230").concat(to, "\uFF0C\u5168\u7A0B\u7EA6").concat(mileage, "\u516C\u91CC\uFF0C\u9884\u4F30\u4EE3\u9A7E\u8D39").concat(expectsFee, "\u5143"),
          success: function success(resp) {
            audio.src = resp.filename;
            audio.play();
            audio.onEnded(function () {
              ref.canAcceptOrder = true;
              var verification = uni.getStorageSync('verification');
              /*
               * TODO 判断人脸识别凭证是否过期，如果过期就要重新人脸验证。
               * 这是以防司机今天开始接单人脸验证通过，但是一直没有停止接单，
               * 到了次日依然要重新做人脸验证。
               *
               */
              if (false) {} else {
                if (ref.settings.autoAccept) {
                  var data = {
                    orderId: orderId
                  };
                  ref.ajax(ref.url.acceptNewOrder, 'POST', data, function (resp) {
                    var result = resp.data.result;
                    if (result == '接单成功') {
                      uni.showToast({
                        title: '接单成功'
                      });
                      audio = uni.createInnerAudioContext();
                      ref.audio = audio;
                      audio.src = '/static/voice/voice_3.mp3';
                      audio.play();
                      audio.onEnded(function () {
                        ref.ajax(ref.url.stopWork, 'POST', null, function (resp) {});
                        //初始化新订单和列表变量
                        ref.newOrder = null;
                        ref.newOrderList.length = 0;
                        ref.executeOrder.id = orderId;
                        clearInterval(ref.reciveNewOrderTimer);
                        ref.reciveNewOrderTimer = null;
                        ref.playFlag = false;
                        //隐藏了工作台页面底部操作条之后，需要重新计算订单执行View的高度
                        ref.contentStyle = "width: 750rpx;height:".concat(ref.windowHeight - 200 - 0, "px;");
                        //加载订单执行数据
                        ref.loadExecuteOrder(ref);
                      });
                    } else {
                      //自动抢单失败
                      audio = uni.createInnerAudioContext();
                      ref.audio = audio;
                      audio.src = '/static/voice/voice_4.mp3';
                      audio.play();
                      audio.onEnded(function () {
                        ref.playFlag = false;
                        if (ref.newOrderList.length > 0) {
                          ref.showNewOrder(ref);
                        } else {
                          ref.newOrder = null;
                        }
                      });
                    }
                  }, false);
                } else {
                  ref.playFlag = false;
                  setTimeout(function () {
                    //如果用户不是正在手动抢单中，就播放下一个新订单
                    if (!ref.accepting) {
                      ref.canAcceptOrder = false;
                      if (ref.newOrderList.length > 0) {
                        ref.showNewOrder(ref); //递归调用
                      } else {
                        ref.newOrder = null;
                      }
                    }
                  }, 3000);
                }
              }
            });
          },
          fail: function fail(resp) {
            console.error('语音订单播报失败', resp);
            ref.playFlag = false;
            ref.canAcceptOrder = true;
            ref.acception = false;
          }
        });
      }
    },
    acceptHandle: function acceptHandle() {
      var that = this;
      if (!that.canAcceptOrder || that.accepting) {
        return;
      }
      that.accepting = true;
      uni.vibrateShort({});
      that.ajax(that.url.acceptNewOrder, 'POST', {
        orderId: that.newOrder.orderId
      }, function (resp) {
        var audio = uni.createInnerAudioContext();
        var result = resp.data.result;
        //手动抢单成功
        if (result == '接单成功') {
          uni.showToast({
            title: '接单成功'
          });
          that.audio = audio;
          audio.src = '/static/voice/voice_3.mp3';
          audio.play();
          audio.onEnded(function () {
            //停止接单
            that.audio = null;
            that.ajax(that.url.stopWork, 'POST', null, function (resp) {});
            //初始化新订单和列表变量
            that.executeOrder.id = that.newOrder.orderId;
            that.newOrder = null;
            that.newOrderList.length = 0;
            clearInterval(that.reciveNewOrderTimer);
            that.reciveNewOrderTimer = null;
            that.playFlag = false;
            that.accepting = false;
            that.canAcceptOrder = false;
            //隐藏了工作台页面底部操作条之后，需要重新计算订单执行View的高度
            that.contentStyle = "width: 750rpx;height:".concat(that.windowHeight - 200 - 0, "px;");
            //加载订单执行数据
            that.loadExecuteOrder(that);
          });
        } else {
          that.audio = audio;
          audio.src = '/static/voice/voice_4.mp3';
          audio.play();
          that.playFlag = false;
          setTimeout(function () {
            that.accepting = false;
            that.canAcceptOrder = false;
            if (that.newOrderList.length > 0) {
              that.showNewOrder(that); //递归调用
            } else {
              that.newOrder = null;
            }
          }, 3000);
        }
      });
    },
    loadExecuteOrder: function loadExecuteOrder(ref) {
      var data = {
        orderId: ref.executeOrder.id
      };
      ref.ajax(ref.url.searchDriverExecuteOrder, 'POST', data, function (resp) {
        var result = resp.data.result;
        ref.executeOrder = {
          id: ref.executeOrder.id,
          photo: result.photo,
          title: result.title,
          tel: result.tel,
          customerId: result.customerId,
          startPlace: result.startPlace,
          startPlaceLocation: JSON.parse(result.startPlaceLocation),
          endPlace: result.endPlace,
          endPlaceLocation: JSON.parse(result.endPlaceLocation),
          favourFee: result.favourFee,
          carPlate: result.carPlate,
          carType: result.carType,
          createTime: result.createTime
        };
        ref.workStatus = '接客户';
        uni.setStorageSync('workStatus', '接客户');
        uni.setStorageSync('executeOrder', ref.executeOrder);
      });
    },
    callCustomerHandle: function callCustomerHandle() {
      var that = this;
      uni.makePhoneCall({
        phoneNumber: that.executeOrder.tel
      });
    },
    callServiceHandle: function callServiceHandle() {
      var that = this;
      uni.makePhoneCall({
        phoneNumber: '10086'
      });
    },
    showMoveHandle: function showMoveHandle() {
      var that = this;
      uni.navigateTo({
        url: '../../execution/move/move?orderId=' + that.executeOrder.id
      });
    },
    arriveStartPlaceHandle: function arriveStartPlaceHandle() {
      var that = this;
      uni.showModal({
        title: '消息通知',
        content: '确认已经到达了代驾点？',
        success: function success(resp) {
          if (resp.confirm) {
            // qqmapsdk.calculateDistance({
            //     mode: 'straight',
            //     from: {
            //         latitude: that.latitude,
            //         longitude: that.longitude
            //     },
            //     to: [
            //         {
            //             latitude: that.executeOrder.startPlaceLocation.latitude,
            //             longitude: that.executeOrder.startPlaceLocation.longitude
            //         }
            //     ],
            //     success: function(resp) {
            //         let distance = resp.result.elements[0].distance;
            //         if (distance <= 1000) {
            var data = {
              orderId: that.executeOrder.id,
              customerId: that.executeOrder.customerId
            };
            that.ajax(that.url.arriveStartPlace, 'POST', data, function (resp) {
              if (resp.data.rows == 1) {
                uni.showToast({
                  icon: 'success',
                  title: '订单状态更新成功'
                });
                that.workStatus = '到达代驾点';
                uni.setStorageSync('workStatus', '到达代驾点');
              }
            });
            //         } else {
            //             uni.showToast({
            //                 icon: 'none',
            //                 title: '请移动到距离代驾起点1公里以内'
            //             });
            //         }
            //     },
            //     fail: function(error) {
            //         console.log(error);
            //     }
            // });
          }
        }
      });
    },

    startDrivingHandle: function startDrivingHandle() {
      var that = this;
      uni.showModal({
        title: '消息通知',
        content: '您已经接到客户，现在开始代驾？',
        success: function success(resp) {
          if (resp.confirm) {
            //设置录音标志位
            that.stopRecord = false;
            var data = {
              orderId: that.executeOrder.id,
              customerId: that.executeOrder.customerId
            };
            that.ajax(that.url.startDriving, 'POST', data, function (resp) {
              if (resp.data.rows == 1) {
                uni.showToast({
                  icon: 'success',
                  title: '订单状态更新成功'
                });
                that.workStatus = '开始代驾';
                uni.setStorageSync('workStatus', '开始代驾');
                //开始录音
                that.recordManager.start({
                  duration: 20 * 1000,
                  lang: 'zh_CN'
                });
              }
            });
          }
        }
      });
    },
    endDrivingHandle: function endDrivingHandle() {
      var that = this;
      uni.showModal({
        title: '消息通知',
        content: '已经到达终点，现在结束代驾？',
        success: function success(resp) {
          if (resp.confirm) {
            // qqmapsdk.calculateDistance({
            //     mode: 'straight',
            //     from: {
            //         latitude: that.latitude,
            //         longitude: that.longitude
            //     },
            //     to: [
            //         {
            //             latitude: that.executeOrder.endPlaceLocation.latitude,
            //             longitude: that.executeOrder.endPlaceLocation.longitude
            //         }
            //     ],
            //     success: function(resp) {
            //         let distance = resp.result.elements[0].distance;
            //         if (distance <= 2000) {
            var data = {
              orderId: that.executeOrder.id,
              customerId: that.executeOrder.customerId,
              status: 5
            };
            that.ajax(that.url.updateOrderStatus, 'POST', data, function (resp) {
              that.stopRecord = true;
              try {
                that.recordManager.stop();
                that.recordNum = 0;
                that.stopRecord = false;
                that.workStatus = '结束代驾';
                uni.setStorageSync('workStatus', '结束代驾');
                uni.navigateTo({
                  url: '../../order/enter_fee/enter_fee?orderId=' + that.executeOrder.id + '&customerId=' + that.executeOrder.customerId
                });
              } catch (e) {
                console.error(e);
              }
            });
            //         } else {
            //             uni.showToast({
            //                 icon: 'none',
            //                 title: '请移动到距离代驾终点2公里以内'
            //             });
            //         }
            //     },
            //     fail: function(error) {
            //         console.log(error);
            //     }
            // });
          }
        }
      });
    },

    showNavigationHandle: function showNavigationHandle() {
      var that = this;
      var latitude = null;
      var longitude = null;
      var destination = null;
      if (that.workStatus == '接客户') {
        latitude = Number(that.executeOrder.startPlaceLocation.latitude);
        longitude = Number(that.executeOrder.startPlaceLocation.longitude);
        destination = that.executeOrder.startPlace;
      } else {
        latitude = Number(that.executeOrder.endPlaceLocation.latitude);
        longitude = Number(that.executeOrder.endPlaceLocation.longitude);
        destination = that.executeOrder.endPlace;
      }
      //打开手机导航软件
      that.map.openMapApp({
        latitude: latitude,
        longitude: longitude,
        destination: destination
      });
    }
  },
  onLoad: function onLoad() {
    var that = this;
    //新添加----------------------------------------------
    qqmapsdk = new QQMapWX({
      key: that.tencent.map.key
    });
    //---------------------------------------------------
    if (!that.reviewAuth) {
      var windowHeight = uni.getSystemInfoSync().windowHeight;
      that.windowHeight = windowHeight;
      var recordManager = plugin.getRecordRecognitionManager(); //初始化录音管理器

      recordManager.onStop = function (resp) {
        if (that.workStatus == '开始代驾' && that.stopRecord == false) {
          that.recordManager.start({
            duration: 20 * 1000,
            lang: 'zh_CN'
          });
        }
        var tempFilePath = resp.tempFilePath;
        //上传录音
        that.recordNum += 1;
        var data = {
          name: "".concat(that.executeOrder.id, "-").concat(that.recordNum, ".mp3"),
          text: resp.result
        };
        // console.log(data);
        that.upload(that.url.uploadRecordFile, tempFilePath, data, function (resp) {
          console.log('录音上传成功');
        });
      };
      recordManager.onStart = function (resp) {
        console.log('成功开始录音识别');
        if (that.recordNum == 0) {
          uni.vibrateLong({
            complete: function complete() {}
          });
          uni.showToast({
            icon: 'none',
            title: '请提示客户系上安全带！'
          });
        }
      };
      recordManager.onError = function (resp) {
        console.error('录音识别故障', resp.msg);
      };
      that.recordManager = recordManager;
    }
    //查询正在执行的订单
    that.ajax(that.url.searchDriverCurrentOrder, 'POST', null, function (resp) {
      if (resp.data.hasOwnProperty('result')) {
        var result = resp.data.result;
        that.executeOrder = {
          id: result.id,
          photo: result.photo,
          title: result.title,
          tel: result.tel,
          customerId: result.customerId,
          startPlace: result.startPlace,
          startPlaceLocation: JSON.parse(result.startPlaceLocation),
          endPlace: result.endPlace,
          endPlaceLocation: JSON.parse(result.endPlaceLocation),
          favourFee: result.favourFee,
          carPlate: result.carPlate,
          carType: result.carType,
          createTime: result.createTime
        };
        var map = {
          '2': '接客户',
          '3': '到达代驾点',
          '4': '开始代驾'
        };
        that.contentStyle = "width: 750rpx;height:".concat(that.windowHeight - 200 - 0, "px;");
        that.workStatus = map[result.status + ''];
        uni.setStorageSync('workStatus', that.workStatus);
        uni.setStorageSync('executeOrder', that.executeOrder);
        // console.log(that.workStatus);
        if (that.workStatus == '开始代驾') {
          that.recordManager.start({
            duration: 20 * 1000,
            lang: 'zh_CN'
          });
        }
      }
    }, false);

    //初始化地图
    that.map = uni.createMapContext('map');
  },
  onShow: function onShow() {
    var that = this;

    //TODO 定时刷新消息

    //TODO 更新消息服务状态，可用或者不可用

    if (!that.reviewAuth) {
      //查询控制台数据
      that.ajax(that.url.searchWorkbenchData, 'POST', null, function (resp) {
        var result = resp.data.result;
        that.hour = result.business.duration;
        that.income = result.business.income;
        that.orders = result.business.orders;
        var settings = result.settings;
        uni.setStorageSync('settings', settings);
        that.settings.listenService = settings.listenService;
        that.settings.autoAccept = settings.autoAccept;
        that.changeListenService(that.settings.listenService);
      });

      //实时获取定位
      uni.$on('updateLocation', function (location) {
        // console.log(location)
        if (location != null) {
          that.service.locationIcon = '../../static/workbench/service-icon-1.png';
          that.service.locationText = '定位正常';
          that.service.locationStyle = 'color:#46B68F';
          that.latitude = location.latitude;
          that.longitude = location.longitude;
        } else {
          that.service.locationIcon = '../../static/workbench/service-icon-5.png';
          that.service.locationText = '定位失败';
          that.service.locationStyle = 'color:#FF4D4D';
        }
      });
      var workStatus = uni.getStorageSync('workStatus');

      //判断工作状态，是否定时轮询接单
      if (workStatus == '开始接单') {
        that.newOrder = null;
        that.newOrderList.length = 0;
        that.playFlag = false;
        //创建接收新订单消息的定时器，每隔5秒钟接收一次新订单消息
        that.reciveNewOrderTimer = that.createTimer(that);
      }

      //初始化控件高度
      if (['接客户', '到达代驾点', '开始代驾'].includes(workStatus)) {
        that.contentStyle = "width: 750rpx;height:".concat(that.windowHeight - 200 - 0, "px;");
      } else {
        that.contentStyle = "width: 750rpx;height:".concat(that.windowHeight - 200 - 70, "px;");
      }
    }
  },
  onHide: function onHide() {
    uni.$off('updateLocation');
    this.newOrder = null;
    this.newOrderList.length = 0;
    if (this.audio != null) {
      this.audio.stop();
      this.audio = null;
    }
    clearInterval(this.reciveNewOrderTimer);
    this.reciveNewOrderTimer = null;
    this.playFlag = false;
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 86:
/*!***********************************************************************************************!*\
  !*** D:/0upup/hxds-driver-wx/pages/workbench/workbench.vue?vue&type=style&index=0&lang=less& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./workbench.vue?vue&type=style&index=0&lang=less& */ 87);
/* harmony import */ var _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_workbench_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 87:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/0upup/hxds-driver-wx/pages/workbench/workbench.vue?vue&type=style&index=0&lang=less& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[78,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/workbench/workbench.js.map