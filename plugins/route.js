
export default function({ app }) {
  app.router.beforeEach((from , to , next) => {
    const token = app.$cookies.get('ex_token')
    console.log(token)
    if(!token) {
      next('/login')
    } else {
      next()
    }
  })
}
