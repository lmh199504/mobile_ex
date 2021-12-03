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
      config.headers.Authorization = token
    }
    return config
  })

  // 响应拦截
  $axios.onResponse((res) => {
    if (res.data.code === 401) {
      Toast('未登录或登录失效，即将跳转登录页!');
      if (process.browser) {
        setTimeout(() => {
          redirect({
            path: '/login',
            // query: { redirect: encodeURIComponent(req.url) },
          })
        }, 2000);
      }
    }
    if (res.data.code === 200) {
      if (res.data.data || res.data.data === 0) {
        return Promise.resolve(res.data.data)
      } else if (res.data.rows) {
        return Promise.resolve(res.data)
      } else if (res.data.content) {
        return Promise.resolve(res.data)
      }
    } else if (res.data.code === 500) {
      return Promise.resolve(res.data)
    }
  })
  // 错误处理
  $axios.onError((error) => {
    return Promise.reject(error)
  })
}
