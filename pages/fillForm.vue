<template>
  <div class="fillForm">
    <van-nav-bar title="体验表填写" left-text="返回" fixed :placeholder="true" left-arrow @click-left="onClickLeft" />
    <previewPage
      ref='previewPage'
      :upLoadBaseUrl="upLoadBaseUrl"
      :key="key"
      v-if="previewVisible"
      :widgetForm="widgetForm"
      :isShowReset='false'
      :isShowBtn='false'
      :isView="true"
    >
    </previewPage>
  </div>
</template>

<script>
  export default{
    data() {
      return{
        upLoadBaseUrl: 'https://cxo.xmcredit.cn/project',
        key: 1,
        widgetForm: {},
        valueObj: {},
        projectNo: "",
        formSubmitId: "",
        previewVisible: false,
      }
    },
    created() {
      // const {  } = this.$route.query
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      getData() {
        this.$api.reqFormDetail()
      },
      initData() {}
    },
  }
</script>

<style scoped lang="less">
  .fillForm{

  }
</style>
