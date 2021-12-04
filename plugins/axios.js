import {
  Toast
} from 'vant';
export default function({
  $axios,
  redirect,
  store,
  app
}) {
  // 基本配置
  $axios.defaults.timeout = 2000000
  // 请求拦截
  $axios.onRequest((config) => {
    // config.headers
    const token = app.$cookies.get('ex_token')
    console.log(token)
    if(token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  })

  // 响应拦截
  $axios.onResponse((res) => {

    const code = res.data.code

    switch (code){
      case 200:
        return Promise.resolve(res.data)
        break;
      case 401:
        Toast('未登录或登录失效，即将跳转登录页!');
        if (process.browser) {
          setTimeout(() => {
            redirect({
              path: '/login',
              // query: { redirect: encodeURIComponent(req.url) },
            })
          }, 2000);
        }
        break;
      default:
        return Promise.resolve(res)
    }
  })
  // 错误处理
  $axios.onError((error) => {
    return Promise.reject(error)
  })
}
