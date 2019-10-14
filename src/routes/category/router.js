/*
 * @Description: 品类管理相关路由
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-19 17:37:08
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-20 17:21:05
 */
const Router = require('koa-router');
const {
  addCategory,
  getCategoryFirstList,
  getCategorySecondList,
  getCategoryThirdList,
  updateCategoryName
} = require('../../schema/category');
const categoryRoute = new Router();

categoryRoute.prefix('/category');

/**
 * @description: 添加品类
 * @param {type} 
 * @return: 
 */
categoryRoute.post('/add', async (ctx, next) => {
  const { first, second, name } = ctx.request.body;
  const res = await addCategory(parseInt(first),parseInt(second) ,name);
  ctx.responseData(200, '添加品类成功!', res);
})

/**
 * @description: 获取一级品类列表
 * @param {type} 
 * @return: 
 */
categoryRoute.get('/first', async (ctx, next) => {
  const res = await getCategoryFirstList();
  ctx.responseData(200, '获取一级品类列表成功!', res);
})

/**
 * @description: 获取二级品类列表
 * @param {type} 
 * @return: 
 */
categoryRoute.get('/second', async (ctx, next) => {
  const { first } = ctx.query;
  const res = await getCategorySecondList(parseInt(first));
  ctx.responseData(200, '获取二级品类列表成功!', res);
})

/**
 * @description: 获取三级品类列表
 * @param {type} 
 * @return: 
 */
categoryRoute.get('/third', async (ctx, next) => {
  const { first, second } = ctx.query;
  const res = await getCategoryThirdList(parseInt(first), parseInt(second));
  ctx.responseData(200, '获取三级品类列表成功!', res);
})

/**
 * @description: 修改品类名称
 * @param {type} 
 * @return: 
 */
categoryRoute.post('/update', async (ctx, next) => {
  const { id, name } = ctx.request.body;
  const res = await updateCategoryName(id, name);
  ctx.responseData(200, '修改品类名称成功!', res);
})

module.exports = categoryRoute;