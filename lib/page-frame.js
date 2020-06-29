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
/******/ 	return __webpack_require__(__webpack_require__.s = 127);
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/page-frame/page-frame.vue?vue&type=script&lang=js&
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Route = function Route(name, params, env) {
  _classCallCheck(this, Route);

  this.name = name;
  this.params = params;
  this.env = env;
  this.pageInstance = null;
  this.pageCreateCallBack = null;
};

/* harmony default export */ var page_framevue_type_script_lang_js_ = ({
  name: 'ElPageFrame',
  props: {
    config: Object,
    keepAlive: String
  },
  data: function data() {
    return {
      routeStack: []
    };
  },
  provide: function provide() {
    return {
      'frame': this
    };
  },

  methods: {
    confirmNav: function confirmNav(toRoute, fromRoute) {
      var enterHook = this.pages[toRoute.name].beforeNavEnter;
      var leaveHook = fromRoute.pageInstance && fromRoute.pageInstance.beforeNavLeave;
      if (enterHook == null && leaveHook == null) {
        return true;
      } else {
        var confirm = false;

        if (enterHook != null) {
          enterHook(toRoute, fromRoute, function next(param) {
            // next(false)取消跳转
            if (param === false) {
              return;
            }

            if (typeof param === 'string') {
              toRoute.name = param;
            } else if (typeof param === 'function') {
              toRoute.pageCreateCallBack = param;
            }
            confirm = true;
          });
        } else {
          confirm = true;
        }

        if (confirm && leaveHook != null) {
          confirm = false;
          leaveHook(toRoute, fromRoute, function next(param) {
            if (param === false) {
              return;
            }
            confirm = true;
          });
        }
        return confirm;
      }
    },
    goto: function goto(name, params) {
      if (this.pages[name] == null) {
        return;
      }

      var fromRoute = this.currentRoute;
      var toRoute = new Route(name, params);
      if (this.confirmNav(toRoute, fromRoute)) {
        this.routeStack.push(toRoute);
      }
    },
    goback: function goback() {
      var toRoute = this.lastRoute;
      var fromRoute = this.currentRoute;

      if (toRoute == null || toRoute.name == null) {
        return;
      }

      if (this.confirmNav(toRoute, fromRoute)) {
        this.routeStack.pop();
      }
    },
    handleDialogClose: function handleDialogClose() {
      this.goback();
    },

    // 向页面组件传入一个注册或卸载自己的函数
    createPageElement: function createPageElement(h, component, route, iframe) {
      return h(component, {
        props: route.params,
        registerToPageFrame: function registerToPageFrame() {
          var _this = this;

          route.pageInstance = this;
          if (route.pageCreateCallBack) {
            route.pageCreateCallBack.call(this, this, route);
          }
          // 处理状态恢复
          if (route.environment != null) {
            Object.keys(route.environment).forEach(function (key) {
              _this[key] = route.environment[key];
            });
            route.environment = null;
          }
        },
        unregisterToPageFrame: function unregisterToPageFrame() {
          if (iframe.routeStack.includes(route)) {
            // 处理状态保存
            var page = iframe.pages[route.name];
            if (page.environment != null && page.environment.length > 0) {
              route.environment = {};
              for (var key in page.environment) {
                route.environment[key] = this[key];
              }
            }
            route.pageInstance = null;
          }
        }
      });
    },
    doRender: function doRender(h) {
      if (this.currentRoute.name != null) {
        var page = this.pages[this.currentRoute.name];
        if (page.component != null) {
          return this.createPageElement(h, page.component, this.currentRoute, this);
        } else {
          return h('div');
        }
      }
    }
  },
  computed: {
    lastRoute: function lastRoute() {
      return this.routeStack[this.routeStack.length - 2];
    },
    currentRoute: function currentRoute() {
      return this.routeStack[this.routeStack.length - 1];
    },
    pages: function pages() {
      var pages = {};
      this.config.pages.filter(function (page) {
        return page.mode !== 'dialog';
      }).forEach(function (page) {
        pages[page.name] = {
          name: page.name,
          component: page.component,
          destroyMode: page.destroyMode
        };
      });
      return pages;
    }
  },
  created: function created() {
    this.routeStack.push(new Route());
    if (this.config.defaultPage) {
      this.routeStack.push(new Route(this.config.defaultPage));
    }
  },
  render: function render(h) {
    if (this.keepAlive != null) {
      return h(
        'keep-alive',
        {
          attrs: { include: this.keepAlive }
        },
        [this.doRender(h)]
      );
    } else {
      return this.doRender(h);
    }
  }
});
// CONCATENATED MODULE: ./packages/page-frame/page-frame.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_frame_page_framevue_type_script_lang_js_ = (page_framevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/page-frame/page-frame.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_frame_page_framevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/page-frame/page-frame.vue"
/* harmony default export */ var page_frame = (component.exports);
// CONCATENATED MODULE: ./packages/page-frame/page-mixin.js
function isDef(v) {
  return v !== undefined && v !== null;
}
function tryRegisterToPageFrame(vm) {
  var i = vm.$options._parentVnode;
  if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerToPageFrame)) {
    i.call(vm);
  }
}
function unregisterToPageFrame(vm) {
  var i = vm.$options._parentVnode;
  if (isDef(i) && isDef(i = i.data) && isDef(i = i.unregisterToPageFrame)) {
    i.call();
  }
}
/* harmony default export */ var page_mixin = ({
  inject: {
    '$frame': {
      from: 'frame',
      default: null
    }
  },
  created: function created() {
    tryRegisterToPageFrame(this);
  },
  beforeDestroy: function beforeDestroy() {
    unregisterToPageFrame(this);
  }
});
// CONCATENATED MODULE: ./packages/page-frame/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "default", function() { return page_frame; });
/* concated harmony reexport PageMixin */__webpack_require__.d(__webpack_exports__, "PageMixin", function() { return page_mixin; });


page_frame.install = function (Vue) {
  Vue.mixin(page_mixin);
};


/***/ })

/******/ });