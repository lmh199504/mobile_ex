<template>
  <div>
    <previewPage
      ref='previewPage'
      v-if="previewVisible"
      :key="key"
      :widgetForm="widgetForm"
      :selectList="selectList"
      :upLoadBaseUrl="upLoadBaseUrl"
      @saveCallback="handleSave"
      @addCallback="handleSubmit"
      @uploadChange='handleUpload'
      @closeCallback='handleClose'
      :isView="false"
      :isShowBtn='true'
      :isShowReset='false'
      :isShowSave='true'
      :isShowClose='true'
      :isShowLine='true'
      :btnposition='"left"'
      :size='"mini"'
    >
    </previewPage>
  </div>
</template>
<script>
  export default {
    name:'SubmitForm',
    data() {
      return {
        selectList:[
          {value:1,label:'13'},
          {value:2,label:'22'},
          {value:3,label:'31'}
        ],
        upLoadBaseUrl: process.env.VUE_APP_UPLOAD_BASE_URL,
        key: 1,
        widgetForm: {},
        valueObj: {},
        projectNo: "",
        formSubmitId: "",
        previewVisible: false,
      };
    },
    methods: {
      /** 关闭 */
      handleClose() {
        this.$router.go(-1)
      },
      /** 上传附件 */
      handleUpload(file,id){
        let formData = new FormData();
        formData.append("file", file); //传文件
        this.$api.reqUpFile(formData).then(response => {
          if (response.code === 200) {
            const imageUrl = response.url;
            const fileName = response.fileName;
            this.widgetForm.list.map(v=>{
              if(v.model == id){
                v.options.defaultValue.push({
                  name: fileName,
                  url: imageUrl
                })
              }
            })
          } else {
            this.msgError(response.msg);
          }
        });
      },
      /** 保存 */
      handleSave(formData) {
        formData.projectNo = this.projectNo;
        formData.userId = this.$store.state.userInfo.reporterId;
        formData.code = this.$store.state.userInfo.reporterIdNumber;
        formData.contacts = this.$store.state.userInfo.reporterUsername;
        formData.contactsPhone = this.$store.state.userInfo.reporterPhone;
        formData.formSubmitId = this.formSubmitId;
        this.$api.reqSaveForm(formData)
          .then(res => {
            if (res.code == 200) {
              this.handleClose();
              this.msgSuccess("保存成功！");
            } else {
              this.msgError("保存失败！");
              this.$refs.previewPage.loading = false;
            }
          })
          .catch(error => {
            this.$refs.previewPage.loading = false;
          });
      },
      /** 提交 */
      handleSubmit(formData) {
        console.log(formData['code'])
        if (formData && formData['code'] == 500) {
          this.$message.error('您还有未作答的题目，请继续作答。')
        } else {
          formData.projectNo = this.projectNo;
          formData.userId = this.$store.state.userInfo.reporterId;
          formData.code = this.$store.state.userInfo.reporterIdNumber;
          formData.contacts = this.$store.state.userInfo.reporterUsername;
          formData.contactsPhone = this.$store.state.userInfo.reporterPhone;
          this.$api.reqResultAdd(formData)
            .then(res => {
              if (res.code == 200) {
                this.handleClose();
                this.msgSuccess("提交成功！");
              } else {
                this.msgError("提交失败！");
                this.$refs.previewPage.loading = false;
              }
            })
            .catch(error => {
              this.$refs.previewPage.loading = false;
            });
        }
      },
      init() {
        let this_ = this;
        if (this_.$route.query.projectNo) {
          let projectNo = this_.$route.query.projectNo;
          let formSubmitId = this_.$route.query.formSubmitId;
          this_.projectNo = projectNo;
          this_.formSubmitId = formSubmitId;
          this.$api.reqGetFormDetail(this_.projectNo).then(res => {
            if (res.code == 200) {
              let data =
                res.data.userProject.formJsonData != null
                  ? JSON.parse(res.data.userProject.formJsonData)
                  : {
                    list: [],
                    config: {
                      labelWidth: 100,
                      labelPosition: "right",
                      size: "small",
                      customClass: ""
                    }
                  };
              this_.widgetForm = {
                list: [...data.list],
                config: {
                  ...data.config
                }
              };

              if (this_.formSubmitId && this_.formSubmitId != null && this_.formSubmitId != '') {
                this.$api.reqGetUserResult({formSubmitId: this.formSubmitId}).then(res => {
                  if (res.code == 200) {
                    this_.valueObj = JSON.parse(res.msg);
                    let data = this_.widgetForm;
                    // 处理表单回显
                    for (let i in data.list) {
                      if (data.list[i].type == 'grid') {
                        //栅格布局
                        for (let j in data.list[i].columns) {
                          this_.listInit(data.list[i].columns[j].list)
                        }
                      } else {
                        //普通布局
                        this_.listInit([data.list[i]])
                      }
                    }
                    this_.widgetForm = {
                      list: [...data.list],
                      config: {
                        ...data.config
                      }
                    }
                  }

                  this_.previewVisible = true;
                  this_.key ++;
                  this_.$refs.previewPage.referKey++

                });
              } else {
                this_.previewVisible = true;
                this_.key ++;
                this_.$refs.previewPage.referKey++
              }

            }
          });
        }
      },
      // 回显数据处理
      listInit(_list) {
        for (let i in this.valueObj) {
          let _index = _list.findIndex(function(params) {
            return params.model == i
          })

          if (_index > -1) {
            if (_list[_index].type == 'checkBoxInput') {
              const boxList = []
              const inputList = []
              this.valueObj[i].map(v => {
                boxList.push(v.option)
                inputList.push(v.input)
              })
              _list[_index].options.previewValue.boxlist = boxList
              _list[_index].options.previewValue.inputList = inputList
            } else if (_list[_index].type == 'radioInput') {
              if(this.valueObj[i][0]){
                const boxList = this.valueObj[i][0].option
                const inputList = []
                this.valueObj[i].map(v => {
                  inputList.push(v.input)
                })
                _list[_index].options.previewValue.boxlist = boxList
                _list[_index].options.previewValue.inputList = inputList
              }
            } else {
              _list[_index].options.defaultValue = this.valueObj[i]
            }
          }
        }
      },
    },
    mounted() {
      this.init();
    },
  };
</script>
