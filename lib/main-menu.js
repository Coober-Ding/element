module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "element-ui/lib/menu"
var menu_ = __webpack_require__(46);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "element-ui/lib/menu-item"
var menu_item_ = __webpack_require__(47);
var menu_item_default = /*#__PURE__*/__webpack_require__.n(menu_item_);

// EXTERNAL MODULE: external "element-ui/lib/submenu"
var submenu_ = __webpack_require__(48);
var submenu_default = /*#__PURE__*/__webpack_require__.n(submenu_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/main-menu/menu.vue?vue&type=script&lang=js&





function createMenuItemTitle(h, item) {
  var ret = [];
  ret.push(createIcon(h, item.icon));
  ret.push(createTitle(h, item.name));
  return ret;
}
function createSubMenuTitle(h, item) {
  return h('div', { slot: 'title' }, [h('i', { class: item.icon }), h('span', item.name)]);
}
function createIcon(h, iconClass) {
  if (iconClass) {
    return h('i', {
      class: iconClass,
      slot: 'default'
    });
  }
  return null;
}
function createTitle(h, name) {
  return h('span', { slot: 'title' }, name);
}
function createMenuContent(vueObj, h, menu) {
  return menu.map(function (item) {
    if (!item.children) {
      var menuItemChildNode = createMenuItemTitle(h, item);
      return h(menu_item_default.a, {
        props: {
          index: item.id
        },
        slot: 'default'
      }, menuItemChildNode);
    } else {
      var subMenuChildNode = [];
      subMenuChildNode.push(createSubMenuTitle(h, item));
      subMenuChildNode = subMenuChildNode.concat(createMenuContent(vueObj, h, item.children));
      return h(submenu_default.a, {
        props: {
          index: item.id
        },
        slot: 'default'
      }, subMenuChildNode);
    }
  });
}
/* harmony default export */ var menuvue_type_script_lang_js_ = ({
  name: 'MainMenu',
  props: {
    data: {
      type: Array,
      required: true
    },
    collapse: {
      type: Boolean
    },
    mode: { type: String },
    backgroundColor: { type: String },
    textColor: { type: String },
    activeTextColor: { type: String },
    defaultActive: { type: String }
  },
  render: function render(h) {
    var _this = this;

    return h(menu_default.a, {
      props: {
        // el-menu的一些属性
        collapse: this.collapse,
        mode: this.mode || 'vertical',
        'background-color': this.backgroundColor,
        'text-color': this.textColor,
        'active-text-color': this.activeTextColor,
        'unique-opened': true,
        router: false,
        'default-active': this.defaultActive
      },
      style: { height: '100%' },
      on: {
        // el-menu 的事件
        select: function select(index, indexPath) {
          _this.$emit('menu-select', index, indexPath);
        }
      }
    }, createMenuContent(this, h, this.data));
  }
});
// CONCATENATED MODULE: ./packages/main-menu/menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var main_menu_menuvue_type_script_lang_js_ = (menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/main-menu/menu.vue
var menu_render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  main_menu_menuvue_type_script_lang_js_,
  menu_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/main-menu/menu.vue"
/* harmony default export */ var main_menu_menu = (component.exports);
// CONCATENATED MODULE: ./packages/main-menu/index.js

/* harmony default export */ var main_menu = __webpack_exports__["default"] = (main_menu_menu);

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/menu");

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/menu-item");

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/submenu");

/***/ })

/******/ });