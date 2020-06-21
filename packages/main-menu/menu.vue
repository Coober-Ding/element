<script>
function createMenuItemTitle(h, item) {
  var ret = [];
  ret.push(createIcon(h, item.icon));
  ret.push(createTitle(h, item.displayName));
  return ret;
}
function createSubMenuTitle(h, item) {
  return h('div', {slot: 'title' }, [
    h('i', {class: item.icon}),
    h('span', item.displayName)
  ]);
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
  return h('span', {slot: 'title'}, name);
}
function createMenuContent(vueObj, h, menu) {
  return menu.map(function(item) {
    if (!item.children) {
      var menuItemChildNode = createMenuItemTitle(h, item);
      return h(
        'el-menu-item',
        {
          props: {
            index: item.id
          },
          slot: 'default'
        },
        menuItemChildNode
      );
    } else {
      var subMenuChildNode = [];
      subMenuChildNode.push(createSubMenuTitle(h, item));
      subMenuChildNode = subMenuChildNode.concat(createMenuContent(vueObj, h, item.children));
      return h(
        'el-submenu',
        {
          props: {
            index: item.id
          },
          slot: 'default'
        },
        subMenuChildNode
      );
    }
  });
}
export default {
  name: 'MainMenu',
  props: {
    data: {
      type: Array,
      required: true
    },
    collapse: {
      type: Boolean
    },
    mode: {type: String},
    bgColor: {type: String},
    textColor: {type: String},
    activeTextColor: {type: String},
    defaultSelected: {type: String}
  },
  render(h) {
    return h(
      'el-menu',
      {
        props: {
          // el-menu的一些属性
          collapse: this.collapse,
          mode: this.mode || 'vertical',
          'background-color': this.bgColor,
          'text-color': this.textColor,
          'active-text-color': this.activeTextColor,
          'unique-opened': true,
          router: false,
          'default-active': this.defaultSelected
        },
        on: {
          // el-menu 的事件
          select: (index, indexPath) => {
            this.$emit('menu-select', index, indexPath);
          }
        }
      },
      createMenuContent(this, h, this.data)
    );
  }
};
</script>
