const Router = require('koa-router')
const adminRoute = new Router()

adminRoute.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

adminRoute.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

adminRoute.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = adminRoute