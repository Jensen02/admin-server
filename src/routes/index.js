const Router = require('koa-router')
const userR = require('./user/router')
const adminR = require('./admin/router')

const router = new Router({
  prefix: '/api/v1'
})

router.use(userR.routes(), userR.allowedMethods())
router.use(adminR.routes(), adminR.allowedMethods())

module.exports = router