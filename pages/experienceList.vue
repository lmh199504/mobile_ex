<!-- 体验官列表 -->
<template>
  <div class="experienceList">
    <van-nav-bar left-arrow title="我的体验表" @click-left="onClickLeft">
      <!-- <template #title>
        <van-search v-model="keyword" placeholder="搜索" background="#1349AB" @search="onSearch" />
      </template> -->
    </van-nav-bar>
    <van-field v-model="queryParams.sourcesName" name="sourcesName" label="事项来源" placeholder="请输入事项来源" />
    <van-field v-model="queryParams.typeName" name="typeName" label="事项类别" placeholder="请输入事项类别" />
    <van-field v-model="queryParams.activityItemName" name="activityItemName" label="体验事项" placeholder="请输入体验事项名称" />
    <div class="btn_wrapper">
      <van-button type="default" size="small" @click="reset">重置</van-button>
      <van-button type="info" size="small" @click="onSearch">搜索</van-button>
    </div>

    <!-- background="#1349AB"  title-inactive-color="#ffffff"  color="#FFF000" title-active-color="#FFF000"-->
    <van-tabs v-model="active" color="#1989fa" title-active-color="#1989fa" :lazy-render="false" :sticky="true">
      <van-tab title="全部">
        <div class="list">
          <ExList :queryParams="queryParams" ref="all" />
        </div>
      </van-tab>
      <van-tab title="已提交">
        <div class="list">
          <ExList :queryParams="queryParams" submitStatus="1" ref="submit" />
        </div>
      </van-tab>
      <van-tab title="未提交">
        <div class="list">
          <ExList :queryParams="queryParams" submitStatus="0" ref="unsubmit" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import ExList from '@/components/exList.vue'
  export default {
    data() {
      return {
        queryParams: {
          sourcesName: '',
          activityItemName: '',
          typeName: '',
        },
        active: 0
      }
    },
    components: {
      ExList
    },
    methods: {
      reset() {
        this.queryParams = {
          sourcesName: '',
          activityItemName: '',
          typeName: ''
        }
        // this.onSearch()
      },
      onSearch() {
        this.$refs.all.getData()
        this.$refs.submit.getData()
        this.$refs.unsubmit.getData()
      },
      onClickLeft() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped lang="less">
  .experienceList {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #ececec;
    // overflow: hidden;
  }

  // /deep/ .van-nav-bar {
  //   background-color: #1349AB;
  //   height: 1.22rem;
  //   .van-nav-bar__content{
  //     height: 100%;
  //   }
  //   .van-search__content {
  //     background-color: #3674e4;
  //   }

  //   .van-nav-bar__title {
  //     width: 85%;
  //     max-width: 85%;
  //   }

  //   .van-icon {
  //     color: #FFFFFF;
  //   }
  //   .van-field__control{
  //     color: #FFFFFF;
  //   }
  //   input::-webkit-input-placeholder {
  //     color: rgba(255, 255, 255, 0.78);
  //   }

  //   input::-moz-input-placeholder {
  //     color: rgba(255, 255, 255, 0.78);
  //   }

  //   input::-ms-input-placeholder {
  //     color: rgba(255, 255, 255, 0.78);
  //   }

  // }
  // /deep/ .van-tabs{
  //   flex: 1;
  //   display: flex;
  //   flex-direction: column;
  //   overflow: hidden;
  //   .van-tabs__content{
  //     flex: 1;
  //     overflow: auto;
  //   }
  //   .van-tabs__wrap{
  //     flex-shrink: 0;
  //   }
  // }
  // /deep/ .van-tabs__nav {
  //   background: #1349AB;

  //   .van-tab {
  //     font-weight: bold;
  //   }
  // }
  .btn_wrapper{
    display: flex;
    background: #FFFFFF;
    padding: 10px 16px;
    box-sizing: border-box;
    .van-button--small{
      margin-right: 10px;
    }
  }
  .list {
    padding: 0.3rem 0.4rem;

    .ex_item {
      padding: 0.26rem;
      box-shadow: 0px 0px 9px 0px rgba(2, 0, 0, 0.13);
      font-size: 0.24rem;
      background-color: #FFFFFF;
      border-radius: 0.1rem;
      margin-bottom: 0.25rem;
    }

    .ex_title {
      font-size: 0.28rem;
      margin-bottom: 0.2rem;
      font-weight: bold;
    }

    .ex_time {
      color: #828282;
      font-size: 0.24rem;
      margin-left: 0.1rem;
    }

    .ex_footer {
      display: flex;
      justify-content: space-between;
      margin-top: 0.2rem;

      .ex_end_time {
        color: #272727;
        font-size: 0.24rem;
        font-weight: 400;
      }

      .ex_num {
        font-size: 0.36rem;
        font-weight: bold;
        color: #FF6917;

        span {
          font-size: 0.28rem;
        }
      }
    }
  }
</style>
