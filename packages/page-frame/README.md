### 描述
类似于html中iframe，用于切换页面组件  
hook功能，可以在切换前和切换后加入处理逻辑  
this.$frame,可以拿到自己所在的PageFrame  
可以保留组件切走时的状态，goback时会将状态恢复(常用于保存列表页面当前翻到第几页)  
goto(),根据名字，跳转，同时可以向组件传递prop  
goback(),返回到上一个页面  
可以对组件进行keep-alive(当某些组件中的数据比较重时，可以避免重新加载数据)  
 
### 使用方法  
Main.vue
```xml
<template>
  <page-frame ref="mainFrame" :config="frame">
  </page-frame>
</template>
<script>
  export default {
    return {
      frame: {
        defaultPage: 'list',
        pages: [{
          name: 'list',
          component: List
        },{
          name: 'view',
          component: View
        }]
      }
    }
  }
</script>
```
List.vue
```java script
export default {
  methods: {
    gotoDetail (id) {
      this.$frame.goto('view', {entityId: id})
    }
  }
}
```
