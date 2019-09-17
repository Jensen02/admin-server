/*
 * @Description: 订单管理相关路由
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-10 17:49:23
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-17 20:38:41
 */
const Router = require('koa-router')
const { addOrder, getOrderDetail, getOrderList } = require('../../schema/order')
const orderRoute = new Router()

orderRoute.prefix('/order')

orderRoute.post('/add', async (ctx, next) => {
  const order = ctx.request.body;
  const res = await addOrder(order);
  ctx.responseData(200, '创建订单成功！', res);
})

orderRoute.get('/detail', async (ctx, next) => {
  const orderId = ctx.query.orderId;
  const res = await getOrderDetail(orderId);
  ctx.responseData(200, '获取订单详情成功!', res);
})

orderRoute.get('/order_list', async (ctx, next) => {
  let limit = parseInt(ctx.query.limit),
      offset = parseInt(ctx.query.offset);
  const res = await getOrderList(limit, offset);
  ctx.responseData(200, '获取订单列表成功!', res);
})

module.exports = orderRoute