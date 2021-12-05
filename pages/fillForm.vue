<template>
  <div class="fillForm">
    <van-nav-bar title="体验表填写" left-text="返回" fixed :placeholder="true" left-arrow @click-left="onClickLeft" />

  </div>
</template>

<script>
  export default{
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      getData() {
        this.$api.reqFormDetail()
      }
    }
  }
</script>

<style scoped lang="less">
  .fillForm{

  }
</style>
