/*
 * @Description: 用户相关路由
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-11 14:37:42
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-11 20:50:56
 */

const Router = require('koa-router')
const { createUser, getUserInfo, getAllUsers } = require('../../schema/user')
const userRoute = new Router()

userRoute.prefix('/user')

// 根据用户id获取用户信息
userRoute.get('/get', async (ctx, next) => {
  let userId = ctx.query.userId
  const data = await getUserInfo(userId)
  ctx.responseData(200, '获取用户信息成功!', data)
})

// 创建新用户
userRoute.post('/create', async (ctx, next) => {
  const userData = ctx.request.body;
  const res = await createUser(userData);
  ctx.responseData(200, '创建新用户成功!', res);
})

userRoute.get('/user_list', async (ctx, next) => {
  let limit = ctx.query.limit,
      offset = ctx.query.offset;
  getAllUsers(parseInt(limit), parseInt(offset)).then(res => {
    console.log(res);
  })
  // ctx.responseData(200, '获取用户列表成功!', res);
})

module.exports = userRoute
