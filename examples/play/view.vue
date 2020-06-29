<template>
  <div>
    hello view page
    <el-button @click="$frame.goto('list', {entityId: 1})">列表</el-button>
  </div>
</template>
<script>
export default {
  activated () {
    console.log('view activated yes!!!')
  },
  mounted () {
    console.log('view mounted yes!!!')
  }
}
</script>