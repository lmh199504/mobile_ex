export default function({
  $axios,
  app
}, inject) {
  const API = {}
  API.getLoginCode = (params) => $axios({
    url: "/code/reporting/getLoginCodeSmsCode",
    method: "POST",
    params
  })

  API.reqLoginByCode = (data) => $axios({
    url: "/code/reporting/login",
    method: "POST",
    data
  })


  app.api = API;
  inject('api', API);
}
