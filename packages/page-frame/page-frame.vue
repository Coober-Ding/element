<script>
class Route {
  constructor(name, params, env) {
    this.name = name;
    this.params = params;
    this.env = env;
    this.pageInstance = null;
    this.pageCreateCallBack = null;
  }
}

export default {
  name: 'ElPageFrame',
  props: {
    config: Object
  },
  data() {
    return {
      routeStack: []
    };
  },
  provide() {
    return {
      'frame': this
    };
  },
  methods: {
    confirmNav(toRoute, fromRoute) {
      let enterHook = (this.pages[toRoute.name]).beforeNavEnter;
      let leaveHook = fromRoute.pageInstance && fromRoute.pageInstance.beforeNavLeave;
      if (enterHook == null && leaveHook == null) {
        return true;
      } else {
        let confirm = false;

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
    goto(name, params) {
      if (this.pages[name] == null) {
        return;
      }

      let fromRoute = this.currentRoute;
      let toRoute = new Route(name, params);
      if (this.confirmNav(toRoute, fromRoute)) {
        this.routeStack.push(toRoute);
      }
    },
    goback() {
      let toRoute = this.lastRoute;
      let fromRoute = this.currentRoute;

      if (toRoute == null || toRoute.name == null) {
        return;
      }

      if (this.confirmNav(toRoute, fromRoute)) {
        this.routeStack.pop();
      }
    },
    handleDialogClose() {
      this.goback();
    },
    // 向页面组件传入一个注册或卸载自己的函数
    createPageElement(h, component, route, iframe) {
      return h(component, {
        props: route.params,
        registerToPageFrame() {
          route.pageInstance = this;
          if (route.pageCreateCallBack) {
            route.pageCreateCallBack.call(this, this, route);
          }
          // 处理状态恢复
          if (route.environment != null) {
            Object.keys(route.environment).forEach(key => {
              this[key] = route.environment[key];
            });
            route.environment = null;
          }
        },
        unregisterToPageFrame() {
          if (iframe.routeStack.includes(route)) {
            // 处理状态保存
            let page = iframe.pages[route.name];
            if (page.environment != null && page.environment.length > 0) {
              route.environment = {};
              for (let key in page.environment) {
                route.environment[key] = this[key];
              }
            }
            route.pageInstance = null;
          }
        }
      });
    }
  },
  computed: {
    lastRoute() {
      return this.routeStack[this.routeStack.length - 2];
    },
    currentRoute() {
      return this.routeStack[this.routeStack.length - 1];
    },
    pages() {
      let pages = {};
      this.config.pages.filter(page => page.mode !== 'dialog').forEach(page => {
        pages[page.name] = {
          name: page.name,
          component: page.component,
          destroyMode: page.destroyMode
        };
      });
      return pages;
    }
  },
  created() {
    this.routeStack.push(new Route());
    if (this.config.defaultPage) {
      this.routeStack.push(new Route(this.config.defaultPage));
    }
  },
  render(h) {
    if (this.currentRoute.name != null) {
      let page = this.pages[this.currentRoute.name];
      if (page.component != null) {
        return this.createPageElement(h, page.component, this.currentRoute);
      } else {
        return (<div></div>);
      }
    }
  }
};
</script>
