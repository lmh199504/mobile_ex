
const Timestamp = new Date().getTime();


// 本地
// const baseApi = 'http://10.0.251.212:8888/'
// 测试
// const baseApi = 'http://10.0.9.184:48090/project/'
// uat
const baseApi = 'https://cxo.xmcredit.cn/project/'


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '全国中小企业融资综合信用服务平台厦门站（厦门市信易贷平台）',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.less',
    'vant/lib/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vant',
    '@/plugins/axios',
    '@/plugins/api',
    '@/plugins/route'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/dotenv",
    '@nuxtjs/axios',
    "@nuxtjs/proxy",
    'cookie-universal-nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true, // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/api': {
      target: baseApi, // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.output.filename = `js/[name].${Timestamp}.js` // 每次构建打包时给文件名加上时间戳，保证版本更新时与上版本文件名不一样
      config.output.chunkFilename = `js/[name].${Timestamp}.js`
    }
  }
}
