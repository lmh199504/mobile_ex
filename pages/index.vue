<template>
  <div class="Mine">
    <van-nav-bar title="我的" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="mine_content">
      <div class="back">
        <img src="../assets/images/userInfo/person_bg.jpg" style="width: 100%;" />
      </div>
      <!-- 个人信息 -->
      <div class="my_flex_row_b per_info" @click="jumpEdit">
        <div class="avator">
          <img src="../assets/images/head.jpg" style="width: 100%;height: 100%;">
        </div>
        <div class="info_com my_flex_col">
          <div class="my_flex_row_b" style="margin-bottom: 8px;">
            <span style="font-size: 18px;">15888888888</span>
            <span>
              <van-icon name="arrow" />
            </span>
          </div>
          <div class="my_flex_row_b">张三丰</div>
        </div>
      </div>



      <!-- 功能列表 -->
      <div class="func_list">
        <div class="func_item" v-for="(item,index) in funList" :key="index" @click="jumpUrl(item.url)">
          <div class="my_flex">
            <div class="func_icon">
              <img :src="item.icon" />
            </div>
            <div class="func_txt">{{item.text}}</div>
          </div>
          <span>
            <img src="../assets/images/right_arrow.png" style="width: 15px;" />
          </span>
        </div>

      </div>

      <!-- 退出登录 -->
      <div class="login_out" @click="logOut">
        退出登录
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        funList: [{
            text: '个人信息',
            icon: require('../assets/images/userInfo/person.jpg'),
            url: "/personInfo"
          },
          {
            text: '我的体验表',
            icon: require('../assets/images/userInfo/u5050.png'),
            url: "/experienceList"
          }
        ]
      }
    },
    methods: {

      jumpUrl(url) {
        this.$router.push(url);
      },
      getInfo() {

      },
      logOut() {
        this.$dialog.confirm({
          title: '提示',
          message: '是否确认退出？'
        }).then(res => {}).catch(error => {})
      },
      onClickLeft() {
        this.$router.go(-1)
      }
    },
  }
</script>
<style lang="less" scoped>
  .Mine {
    font-size: 15px;
    background-color: #F5F5F5;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;

    .back {
      width: 100%;
      height: 200px;
      // background-color: lightgray;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: -1;
    }

    .mine_content {
      position: relative;
      z-index: 10;
      padding: 0px 20px 30px 20px;

      // 个人信息
      .per_info {
        padding: 60px 0px 30px 15px;
        display: flex;
        align-items: center;

        .avator {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: lightgray;
          margin-right: 15px;
          overflow: hidden;
        }

        .info_com {
          flex: 1;
          color: white;
          font-size: 15px;
          justify-content: center;
        }
      }


      // 功能列表
      .func_list {
        padding: 0px 20px;
        background-color: white;
        border-radius: 8px;
        margin-top: 12px;

        .func_item {
          display: flex;
          justify-content: space-between;
          padding: 15px 0px;
          border-bottom: 1px solid #F5F5F5;

          .my_flex {
            display: flex;
          }

          .func_icon {
            width: 18px;
            // height: 18px;
            // background-color: gray;
            margin-right: 15px;

            img {
              width: 100%;
            }
          }
        }
      }

      // 退出登录
      .login_out {
        width: 250px;
        height: 45px;
        line-height: 45px;
        margin: 20px auto;
        border-radius: 20px;
        background-color: white;
        color: #498BF5;
        text-align: center;
      }

    }
  }
</style>
