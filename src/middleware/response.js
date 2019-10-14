/*
 * @Description: 响应中间件，统一返回给前端的api格式
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-11 14:04:51
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-11 20:48:25
 */

const response = (ctx) => {
  return (code = 200, msg = '请求成功!', data = null) => {
    ctx.body = {
      code,
      msg,
      data
    }
  }
}

const sendHandle = () => {
  return async (ctx, next) => {
      ctx.responseData = response(ctx);
      await next();
  }
}

module.exports = sendHandle;