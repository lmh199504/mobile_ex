export default function({
  app
}) {
  app.router.beforeEach(async(to, from, next) => {
    const whitePath = ['/login']
    const token = app.$cookies.get('ex_token')
    if (!token) {
      if (whitePath.includes(to.path)) {
        next()
      } else {
        next('/login')
      }
    } else {
      next()
    }
  })
}
