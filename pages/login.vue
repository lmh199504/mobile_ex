<!-- 体验官登录 -->
<template>
  <div class="expertLogin">
    <div class="banner">
      <img src="~/assets/images/login/bg_experience.png">
    </div>

    <div class="login_form">
      <van-form label-width="0.5rem">
        <van-field v-model="phone" clearable name="phone" type="tel" placeholder="请输入手机号">
          <template #label>
            <img class="label_img_phone" src="~/assets/images/login/phone.png">
          </template>
        </van-field>
        <van-field v-model="code" type="digit" name="code" placeholder="请输入验证码">
          <template #label>
            <img class="label_img_code" src="~/assets/images/login/msg.png">
          </template>
          <template #button>
            <van-button v-if="!isSend" class="send" type="info" @click="getVerificationCode">发送验证码</van-button>
            <van-button v-else class="send" type="info" @click="getVerificationCode" disabled> {{ seconds }} 秒后重新获取
            </van-button>
          </template>
        </van-field>
        <div class="submit_btn">
          <van-button round block type="info" @click="onSubmit">登录</van-button>
        </div>
      </van-form>
    </div>

    <van-dialog v-model="show" title="厦门市营商环境体验官承诺书" show-cancel-button confirmButtonText="同意并进入">
      <div class="promise_container">
        <p>本人自愿成为厦门市营商环境体验活动体验官，参与体验期为 <span>2021年12月06日至2021年12月13日</span>。
          本人郑重承诺遵守本承诺书所有条款，如违反本承诺书有关条款，由本人承担由此带来的一切民事、行政和刑事责任。</p>
        <p>一、遵守国家有关法律、法规和行政规章制度和主管部门各项工作规定。</p>
        <p>二、保证不利用体验活动侵犯国家的、社会的、集体的利益和第三方的合法权益。</p>
        <p>三、服从主管部门的工作要求和时间安排，诚实守信，勤勉尽责，高质量完成体验工作。</p>
        <p>四、服从主管部门各项工作调度和管理，有事不能参加体验，将提前书面向主管部门相关负责同志请假或申请退出。</p>
        <p>五、不以体验官身份从事任何与体验活动宗旨、目的不符及违背社会公德的行为，自觉接受社会公众和新闻舆论的监督。</p>
        <p>
          六、体验活动所掌握的资料仅用于厦门市营商环境体验活动，不擅自变更体验资料使用目的；严格履行保密义务，不以任何理由向资料使用单位以外的任何个人和单位泄露该项资料，不以任何方式擅自对外发布和公开使用该项资料，保守在体验活动中可能知悉的国家秘密、商业秘密和个人隐私。
        </p>
        <div class="cur_time">{{ cur_date }}</div>
      </div>
    </van-dialog>

  </div>
</template>

<script>
  import {
    dateFormat,
    rsaData
  } from '@/utils/util.js'
  export default {
    data() {
      return {
        code: "",
        phone: "",
        isSend: false,
        seconds: 60,
        pattern: /^\d{6}$/,
        show: false,
        cur_date: ""
      }
    },
    created() {
      this.cur_date = dateFormat('YYYY年mm月dd日', new Date())
    },
    methods: {
      onSubmit() {
        if (!this.validator(this.phone)) {
          this.$toast('请输入正确手机号');
          return;
        }
        if (!this.pattern.test(this.code)) {
          this.$toast('请输入6位短信数字');
          return;
        }

        const toast = this.$toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '登录中...',
        });
        // const data = {
        //   phone: rsaData(this.phone),
        //   code: rsaData(this.code)
        // }
        const data = {
          phone: this.phone,
          code: this.code
        }

        this.$api.reqLoginByCode(data)
          .then(res => {
            console.log(res)
            toast.clear();
            if (res.code == 200) {
              this.$store.commit('setToken', res.token)
              this.$router.replace('/')
            } else {
              this.$toast(res.msg)
            }
          })
          .catch(() => {
            toast.clear();
            this.$toast('网络异常~')
          })
      },
      getVerificationCode() {
        const value = this.validator(this.phone)
        if (!value) {
          return this.$toast({
            message: '请输入正确手机号码',
          })
        }
        const loading = this.$toast.loading({
          duration: 0,
          message: "加载中...",
          overlay: true
        })
        this.$api.getLoginCode({
            phone: this.phone
          })
          .then(res => {
            console.log(res)
            loading.clear()
            if (res.code == 200) {
              this.$toast('验证码已发送至您手机，请注意查收');
              this.isSend = true
              this.timer = setInterval(() => {
                this.seconds--
                if (this.seconds <= 0) {
                  this.isSend = false
                  this.seconds = 60
                  clearInterval(this.timer)
                }
              }, 1000)
            } else {
              this.$toast(res.msg);
            }
          })
          .catch(err => {
            loading.clear()
            this.$toast('网络异常');
          })
      },
      // 验证手机号码格式
      validator(val) {
        return /^1[3456789]\d{9}$/.test(val)
      },

    },
  }
</script>

<style scoped lang="less">
  .expertLogin {
    background: #FFFFFF;

    .banner {
      img {
        width: 100%;
      }
    }

    .login_form {
      padding: 0 0.3rem;

      /deep/ .van-form {
        .van-field__label {
          text-align: center;
        }

        .send {
          height: 15px;
          padding-left: 10px;
          background: none;
          line-height: 15px;
          color: #4286f5;
          border: none;
          border-left: solid 1px #e8e8e8;
          font-size: 12px;
          outline: none;
        }

        .label_img_phone {
          width: 0.27rem;
        }

        .label_img_code {
          width: 0.35rem;
        }

        .submit_btn {
          margin-top: 2rem;
        }

        .van-field {
          margin-top: 0.3rem;
          border-bottom: 0.01rem solid #9F9F9F;
        }
      }
    }
  }

  // 承诺书
  .promise_container {
    padding: 15px;
    max-height: 8rem;
    overflow: auto;

    h1 {
      font-size: 16px;
      text-align: center;
    }

    p {
      font-size: 14px;
      line-height: 28px;
      text-indent: 2em;
    }

    .cur_time {
      text-align: right;
    }
  }
</style>
