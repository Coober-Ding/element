<template>
  <div style="margin: 20px;">
    <el-dialog ref="dialog" :destroy-on-close="true" :visible.sync="visible">
      <template slot-scope="{params, dialog}">
        <span>{{params.text}}</span>
        <el-form :model="form">
          <el-form-item prop="input" :listeners=listener>
            <el-input v-model="form.input" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="dialog.close()">提交</el-button>
      </template>
    </el-dialog>

    <el-button @click="$refs.dialog.open({text: 'text!!'})">弹出</el-button>
    <el-button @click="visible=true">弹出2</el-button>
    <el-popconfirm title="这是一段内容确定删除吗？">
      <el-button slot="reference">删除</el-button>
    </el-popconfirm>
    <el-popconfirm title="这是一段内容确定删除吗？">
      <el-button slot="reference">删除</el-button>
    </el-popconfirm>
    <el-popconfirm title="这是一段内容确定删除吗？">
      <el-button slot="reference">删除</el-button>
    </el-popconfirm>
    <el-button @click="testConfirm">测试confirm</el-button>
    
    <el-page-frame :config="mainFrame" ref="mainFrame">
    </el-page-frame>
  </div>
</template>

<script>
import List from './list.vue'
import View from './view.vue'
export default {
  data() {
    return {
      visible: false,
      form: {
        input: 'Hello Element UI!',
      },
      listener: [{
        trigger: ['blur'],
        handler: function (val, model) {
          console.log('blur ' + val);
        }
      }],
      mainFrame: {
        defaultPage: 'list',
        pages: [{
          name: 'list',
          component: List
        },{
          name: 'view',
          component: View
        }]
      }
    };
  },
  methods: {
    testConfirm () {
      this.$confirm(`确定删除选中的条记录吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      });
    }
  }
};
</script>
