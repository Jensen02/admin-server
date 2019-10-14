/*
 * @Description: 
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-10-11 13:24:52
 * @LastEditors: Jensen
 * @LastEditTime: 2019-10-11 13:35:09
 */
const Router = require('koa-router');
const trainRoute = new Router();
const cities = require('../../../data/cities.json');

trainRoute.prefix('/train');

trainRoute.get('/cities', (ctx, next) => {
  ctx.responseData(200, '获取城市列表成功!', cities);
})

module.exports = trainRoute;