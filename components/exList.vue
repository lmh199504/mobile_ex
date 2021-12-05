<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="ex_item" v-for="(item, index) in list" :key="index">
      <div class="ex_title">{{ item.activityName }}</div>
      <div>
        <van-tag color="#F58D39" v-if="item.expireStatus==0">未提交</van-tag>
        <van-tag color="#1349AB" v-else>已提交</van-tag>

        <span class="ex_time" v-if="item.expireStatus!=0">{{ item.submitTime }}</span>
      </div>
      <div class="ex_footer">
        <div class="ex_end_time">截止时间：{{ item.activityItemEndTime }}</div>
        <div class="ex_num">
          <!-- 5
          <span>个问题</span> -->
        </div>
      </div>
    </div>
  </van-list>
</template>

<script>
  export default{
    props: {
      submitStatus: {
        type: String | Number,
        default: undefined
      },
      activityItemName: {
        type: String,
        default: undefined
      }
    },
    data() {
      return {
        loading: false,
        finished: false,
        pageNum: 1,
        list: [],
        total: 0
      }
    },
    created() {
       this.getData()
    },
    methods:{
      onLoad() {
        this.getData('more')
      },
      getData(type = 'init') {
        if(type == 'init' ) {
          this.list = []
          this.pageNum = 1
          this.finished = false
        } else {
          this.pageNum++
        }
        const data = {
          pageNum: this.pageNum,
          pageSize: 10,
          activityItemName: this.activityItemName,
          submitStatus: this.submitStatus
        }
        this.loading = true
        this.$api.reqGetUserActivityItemList(data)
        .then(res => {
          console.log(res)
          this.total = res.total
          if(type == 'init') {
            this.list = res.rows
          } else {
            res.rows.forEach(item => {
              this.list.push(item)
            })
          }
          if(this.list.length >= this.total) {
            this.finished = true
          }
          this.loading = false
        })
        .catch(() => {
          this.loading = false
          this.finished = true
        })
      }
    }
  }
</script>

<style scoped lang="less">
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
</style>
