/*
 * @Description: 
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-11 01:17:31
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-17 18:26:14
 */
const Router = require('koa-router')
const userR = require('./user/router')
const orderR = require('./order/router')

const router = new Router({
  prefix: '/api/v1'
})

router.use(userR.routes(), userR.allowedMethods())
router.use(orderR.routes(), orderR.allowedMethods())

module.exports = router