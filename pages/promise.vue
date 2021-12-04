<template>
  <div class="promise_page">
    <van-nav-bar title="我的承诺书" left-text="返回" fixed :placeholder="true" left-arrow @click-left="onClickLeft" />
    <div class="promise">
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
    </div>

  </div>
</template>

<script>
  export default{
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped lang="less">
  .promise_page{
    padding: 20px;
  }
  .promise{
    padding-top: 10px;
    font-size: 16px;
    p{
      font-size: 16px;
      text-indent: 2em;
      line-height: 32px;
    }
  }
</style>
