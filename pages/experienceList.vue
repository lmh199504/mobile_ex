<!-- 体验官列表 -->
<template>
  <div class="experienceList">
    <van-nav-bar left-arrow :border="false"   @click-left="onClickLeft">
      <template #title>
        <van-search v-model="keyword" placeholder="搜索" background="#1349AB" @search="onSearch" />
      </template>
    </van-nav-bar>
    <van-tabs v-model="active" background="#1349AB" color="#FFF000" title-active-color="#FFF000"
      title-inactive-color="#ffffff">
      <van-tab title="全部">
        <div class="list">
          <div class="ex_item">
            <div class="ex_title">厦门市营商环线上体验表（发票网上申领）</div>
            <div>
              <van-tag color="#1349AB">已提交</van-tag>
              <van-tag color="#F58D39">未提交</van-tag>
              <span class="ex_time">2021-12-11 12:00</span>
            </div>
            <div class="ex_footer">
              <div class="ex_end_time">截止时间：2021-12-11</div>
              <div class="ex_num">
                5
                <span>个问题</span>
              </div>
            </div>
          </div>
          <div class="ex_item">
            <div class="ex_title">厦门市营商环线上体验表（发票网上申领）</div>
            <div>
              <van-tag color="#1349AB">已提交</van-tag>
              <van-tag color="#F58D39">未提交</van-tag>
              <span class="ex_time">2021-12-11 12:00</span>
            </div>
            <div class="ex_footer">
              <div class="ex_end_time">截止时间：2021-12-11</div>
              <div class="ex_num">
                5
                <span>个问题</span>
              </div>
            </div>
          </div>
          <div class="ex_item">
            <div class="ex_title">厦门市营商环线上体验表（发票网上申领）</div>
            <div>
              <van-tag color="#1349AB">已提交</van-tag>
              <van-tag color="#F58D39">未提交</van-tag>
              <span class="ex_time">2021-12-11 12:00</span>
            </div>
            <div class="ex_footer">
              <div class="ex_end_time">截止时间：2021-12-11</div>
              <div class="ex_num">
                5
                <span>个问题</span>
              </div>
            </div>
          </div>
          <div class="ex_item">
            <div class="ex_title">厦门市营商环线上体验表（发票网上申领）</div>
            <div>
              <van-tag color="#1349AB">已提交</van-tag>
              <van-tag color="#F58D39">未提交</van-tag>
              <span class="ex_time">2021-12-11 12:00</span>
            </div>
            <div class="ex_footer">
              <div class="ex_end_time">截止时间：2021-12-11</div>
              <div class="ex_num">
                5
                <span>个问题</span>
              </div>
            </div>
          </div>
          <div class="ex_item">
            <div class="ex_title">厦门市营商环线上体验表（发票网上申领）</div>
            <div>
              <van-tag color="#1349AB">已提交</van-tag>
              <van-tag color="#F58D39">未提交</van-tag>
              <span class="ex_time">2021-12-11 12:00</span>
            </div>
            <div class="ex_footer">
              <div class="ex_end_time">截止时间：2021-12-11</div>
              <div class="ex_num">
                5
                <span>个问题</span>
              </div>
            </div>
          </div>
          <div class="ex_item">
            <div class="ex_title">厦门市营商环线上体验表（发票网上申领）</div>
            <div>
              <van-tag color="#1349AB">已提交</van-tag>
              <van-tag color="#F58D39">未提交</van-tag>
              <span class="ex_time">2021-12-11 12:00</span>
            </div>
            <div class="ex_footer">
              <div class="ex_end_time">截止时间：2021-12-11</div>
              <div class="ex_num">
                5
                <span>个问题</span>
              </div>
            </div>
          </div>
          <div class="ex_item">
            <div class="ex_title">厦门市营商环线上体验表（发票网上申领）</div>
            <div>
              <van-tag color="#1349AB">已提交</van-tag>
              <van-tag color="#F58D39">未提交</van-tag>
              <span class="ex_time">2021-12-11 12:00</span>
            </div>
            <div class="ex_footer">
              <div class="ex_end_time">截止时间：2021-12-11</div>
              <div class="ex_num">
                5
                <span>个问题</span>
              </div>
            </div>
          </div>
          <div class="ex_item">
            <div class="ex_title">厦门市营商环线上体验表（发票网上申领）</div>
            <div>
              <van-tag color="#1349AB">已提交</van-tag>
              <van-tag color="#F58D39">未提交</van-tag>
              <span class="ex_time">2021-12-11 12:00</span>
            </div>
            <div class="ex_footer">
              <div class="ex_end_time">截止时间：2021-12-11</div>
              <div class="ex_num">
                5
                <span>个问题</span>
              </div>
            </div>
          </div>
          <div class="ex_item">
            <div class="ex_title">厦门市营商环线上体验表（发票网上申领）</div>
            <div>
              <van-tag color="#1349AB">已提交</van-tag>
              <van-tag color="#F58D39">未提交</van-tag>
              <span class="ex_time">2021-12-11 12:00</span>
            </div>
            <div class="ex_footer">
              <div class="ex_end_time">截止时间：2021-12-11</div>
              <div class="ex_num">
                5
                <span>个问题</span>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已提交">
        <div class="list">
          <div class="ex_item">
            <div class="ex_title">厦门市营商环线上体验表（发票网上申领）</div>
            <div>
              <van-tag color="#1349AB">已提交</van-tag>
              <van-tag color="#F58D39">未提交</van-tag>
              <span class="ex_time">2021-12-11 12:00</span>
            </div>
            <div class="ex_footer">
              <div class="ex_end_time">截止时间：2021-12-11</div>
              <div class="ex_num">
                5
                <span>个问题</span>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="未提交">
        <div class="list">
          <div class="ex_item">
            <div class="ex_title">厦门市营商环线上体验表（发票网上申领）</div>
            <div>
              <van-tag color="#1349AB">已提交</van-tag>
              <van-tag color="#F58D39">未提交</van-tag>
              <span class="ex_time">2021-12-11 12:00</span>
            </div>
            <div class="ex_footer">
              <div class="ex_end_time">截止时间：2021-12-11</div>
              <div class="ex_num">
                5
                <span>个问题</span>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword: "",
        active: 0
      }
    },
    methods: {
      onSearch() {
        console.log(this.keyword)
      },
      onClickLeft() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped lang="less">
  .experienceList {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #ececec;
    overflow: hidden;
  }

  /deep/ .van-nav-bar {
    background-color: #1349AB;
    height: 1.22rem;
    .van-nav-bar__content{
      height: 100%;
    }
    .van-search__content {
      background-color: #3674e4;
      
    }

    .van-nav-bar__title {
      width: 85%;
      max-width: 85%;
    }

    .van-icon {
      color: #FFFFFF;
    }
    .van-field__control{
      color: #FFFFFF;
    }
    input::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.78);
    }

    input::-moz-input-placeholder {
      color: rgba(255, 255, 255, 0.78);
    }

    input::-ms-input-placeholder {
      color: rgba(255, 255, 255, 0.78);
    }

  }
  /deep/ .van-tabs{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .van-tabs__content{
      flex: 1;
      overflow: auto;
    }
    .van-tabs__wrap{
      flex-shrink: 0;
    }
  }
  /deep/ .van-tabs__nav {
    background: #1349AB;

    .van-tab {
      font-weight: bold;
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
