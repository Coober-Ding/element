<script>
import ElMenu from 'element-ui/packages/menu';
import ElMenuItem from 'element-ui/packages/menu-item';
import ElSubmenu from 'element-ui/packages/submenu';

function createMenuItemTitle(h, item) {
  var ret = [];
  ret.push(createIcon(h, item.icon));
  ret.push(createTitle(h, item.name));
  return ret;
}
function createSubMenuTitle(h, item) {
  return h('div', {slot: 'title' }, [
    h('i', {class: item.icon}),
    h('span', item.name)
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
        ElMenuItem,
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
        ElSubmenu,
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
    backgroundColor: {type: String},
    textColor: {type: String},
    activeTextColor: {type: String},
    defaultActive: {type: String}
  },
  render(h) {
    return h(
      ElMenu,
      {
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
        style: {height: '100%'},
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
