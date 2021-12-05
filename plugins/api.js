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
  
  
  app.api = API;
  inject('api', API);
}
