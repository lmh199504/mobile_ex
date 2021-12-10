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
        <van-tag color="#1349AB" v-if="item.submitStatus==1">已提交</van-tag>
        <van-tag color="#F58D39" v-else>未提交</van-tag>
        <span class="ex_time" v-if="item.submitStatus==1">{{ item.submitTime }}</span>
      </div>
      <div class="ex_span">
        <span>事项来源：</span>
        <span>{{ item.sourcesName }}</span>
      </div>
      <div class="ex_span">
        <span>事项类别：</span>
        <span>{{ item.typeName }}</span>
      </div>
      <div class="ex_span">
        <span>体验事项：</span>
        <span>{{ item.activityItemName }}</span>
      </div>
      <div class="ex_span">
        <span>说明：</span>
        <span>{{ item.activityItemName }}</span>
      </div>
      <div class="ex_span">
        <span>办理途径：</span>
        <span>{{ item.activityItemName }}</span>
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
      queryParams: {
        type: Object,
        default: function() {
          return {
            sourcesName: '',
            activityItemName: '',
            typeName: '',
          }
        }
      }
    },
    data() {
      return {
        loading: false,
        finished: false,
        pageNum: 1,
        list: [],
        total: 0,
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
          submitStatus: this.submitStatus,
          ...this.queryParams
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
    },
    watch: {
      queryParams: {
        deep: true,
        handler: function() {
          clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            this.getData()
          }, 500)
        }
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
  .ex_span{
    color: #828282;
    font-size: 0.24rem;
    margin-top: 0.2rem;
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
