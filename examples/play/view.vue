<template>
  <div>
    hello view page
    <el-button @click="$frame.goto('list', {entityId: 1})">列表</el-button>
  </div>
</template>