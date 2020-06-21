import PageFrame from './page-frame.vue';
import PageMixin from './page-mixin.js';
PageFrame.install = function(Vue) {
  Vue.mixin(PageMixin);
};
export {PageFrame as default, PageMixin};
