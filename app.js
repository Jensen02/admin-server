/*
 * @Description:
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-11 01:51:16
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-11 21:23:16
 */
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')
const router = require('./src/routes/index')
const sendHandle = require('./src/middleware/response')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))
app.use(cors())
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 数据响应中间件
app.use(sendHandle())

// routes
app.use(router.routes()).use(router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
