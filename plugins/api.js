export default function({
  $axios,
  app
}, inject) {
  const API = {}
  API.getLoginCode = (params) => $axios({
    url: "/code/reporting/getLoginSms",
    method: "POST",
    params
  })

  API.reqLoginByCode = (data) => $axios({
    url: "/code/reporting/login",
    method: "POST",
    data
  })

  API.reqGetInfo = () => $axios({
    url: "/getInfo"
  })
  API.reqSaveInfo = (data) => $axios({
    url: "/reporting/user/profile",
    method: "PUT",
    data
  })

  API.reqGetUserActivityItemList = (data) => $axios({
    url: "/reporting/user/profile/getUserActivityItemList",
    method: "GET",
    params: data
  })

  API.reqFormDetail = (id) => $axios({
    url: `/user/project/details/${id}`,
    method: "GET"
  })

  API.reqUpFile = (data) => $axios({
    url: "/common/upload",
    method: "post",
    data
  })

  API.reqGetFormDetail = (projectNo) => $axios({
    url: `/user/project/details/${projectNo}`,
    method: 'get'
  })

  API.reqSaveForm = (data) => $axios({
    url: `/user/project/result/save`,
    method: 'post',
    data
  })

  API.reqResultAdd = (data) => $axios({
    url: `/user/project/result/add`,
    method: 'post',
    data
  })


  API.reqGetUserResult = (params) => $axios({
    url: '/reporting/user/profile/getUserResult',
    method: 'get',
    params
  })

  app.api = API;
  inject('api', API);
}
