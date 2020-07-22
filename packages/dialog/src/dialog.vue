<template>
  <DialogComponent v-bind="omit($attrs, 'visible')" v-bind:visible="dialogVisible" v-on="omit($listeners, 'update:visible')" @update:visible="handleVisibleSync">
    <template slot=title>
      <slot name="title"></slot>
    </template>
    <template>
      <slot v-bind:params="params" v-bind:dialog="this"/>
    </template>
    <template slot=footer>
      <slot name="footer"></slot>
    </template>
  </DialogComponent>
</template>
<script>
  import DialogComponent from './component.vue';
  import {omit} from 'element-ui/src/utils/util';

  export default {
    name: 'ElDialog',
    inheritAttrs: false,
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      visible(val) {
        if (this.dialogVisible !== val) {
          this.dialogVisible = val;
        }
      }
    },
    data() {
      return {
        params: {},
        dialogVisible: this.visible
      };
    },
    methods: {
      omit: omit,
      open(params) {
        if (params) {
          this.params = params;
        }
        this.dialogVisible = true;
      },
      close() {
        this.dialogVisible = false;
      },
      handleVisibleSync(val) {
        this.dialogVisible = val;
        this.$emit('update:visible', val);
      }
    },
    components: {
      DialogComponent
    }
  };
</script>