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
export default {
  inject: {
    '$frame': {
      from: 'frame',
      default: null
    }
  },
  created() {
    tryRegisterToPageFrame(this);
  },
  beforeDestroy() {
    unregisterToPageFrame(this);
  }
};
