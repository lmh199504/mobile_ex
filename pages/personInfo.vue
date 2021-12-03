<template>
  <div class="person_info">
    <van-nav-bar title="我的" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="content">
      <div class="form_item border_b" style="margin-top: 10px;">
        <div class="item_label">真实姓名</div>
        <div class="item_con">
          <input v-model="getUserInfo.realname" readonly type="text" placeholder="请输入真实姓名一致的身份证号码" style="" />
        </div>
      </div>
      <div class="form_item border_b">
        <div class="item_label">手机号码</div>
        <div class="item_con">
          <input v-model="getUserInfo.mobile" readonly type="text" placeholder="请输入您的手机号" style="" />
        </div>
      </div>

      <div class="form_item border_b">
        <div class="item_label">身份证</div>
        <div class="item_con">
          <input v-model="getUserInfo.cardCode" :readonly="cardReadOnly" type="text" placeholder="请输入真实姓名一致的身份证号码"
            style="" />
        </div>
      </div>

      <div class="form_item border_b">
        <div class="item_label">我的承诺书</div>
        <div class="item_con">
          <div class="promise_check">查看</div>
        </div>
      </div>

      <div class="submitOrder" @click="save">确定保存</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        getUserInfo: {
          realname: '撒打发',
          mobile: "1234",
          cardCode: "撒打发2313232"
        },
      }
    },
    mounted() {
      this.getInfo();
    },
    methods: {
      getInfo() {},
      save() {},
      onClickLeft() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style lang="less" scoped>
  .person_info {
    font-size: 16px;
    background-color: #F5F5F5;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;

    .authStatus {
      border: 1px solid #CCCCCC;
      border-radius: 25px;
      padding: 5px 10px;
      margin-right: 100px;
    }

    .font_color {
      color: #CCCCCC;
    }

    .border_b {
      border-bottom: 1px solid #F7F7F7;
    }

    .submitOrder {
      width: 250px;
      height: 45px;
      line-height: 45px;
      // background: linear-gradient(90deg, #4285F4, #4385F5, #4285F4, #17E6B7);
      background: linear-gradient(to left, #17E6B7, #4285F4);
      border-radius: 23px;
      text-align: center;
      color: white;
      margin: 0 auto;
      margin-top: 26px;
    }

    .content {
      padding: 10px 15px;

      .avator_info {
        min-height: 174px;
        background-color: white;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .avator {
          width: 70px;
          height: 70px;
          background-color: lightgray;
          border-radius: 50%;
          margin-bottom: 13px;
          overflow: hidden;
        }
      }
    }

    .form_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      padding: 15px 15px;

      .item_label {
        width: 80px;
        font-size: 14px;
      }

      .item_con {
        flex: 1;
        text-align: right;
        display: flex;
        justify-content: flex-end;
        .promise_check{
          font-size: 14px;
          color: #1989fa;
        }
        input {
          width: 100%;
          border: none;
          font-size: 14px;
          text-align: right;
        }
      }
    }
  }
</style>
