<template>
  <div>
    hello list page
    <el-button @click="$frame.goto('view')">查看</el-button>
  </div>
</template>
<script>
export default {
  name: 'list-page',
  activated () {
    console.log('list activated yes!!!')
  },
  mounted () {
    console.log('list mounted yes!!!')
  }
}
</script>