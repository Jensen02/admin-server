/*
 * @Description: 订单模型
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-17 17:35:34
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-17 18:59:30
 */
const { BIGINT, STRING, DATE } = require('sequelize')
const sequlize = require('../../config/db')

const Order = sequlize.define('order', {
  id: {
    type: BIGINT(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  payment: {
    type: BIGINT,
    allowNull: false
  },
  payment_type: {
    type: STRING,
    allowNull: false
  },
  status: {
    type: STRING,
    allowNull: false,
  },
  receiver_name: {
    type: STRING,
    allowNull: false
  },
  receiver_address: {
    type: STRING,
    allowNull: false
  },
  receiver_phone: {
    type: STRING,
    allowNull: false
  },
  created_time: {
    type: DATE
  }
}, {
  timestamps: false
});

Order.sync();

/**
 * @description: 创建订单
 * @param {type} 
 * @return: 
 */
async function addOrder(order) {
  return await Order.create({
    payment: order.payment,
    payment_type: order.paymentType,
    status: order.status,
    receiver_name: order.name,
    receiver_address: order.address,
    receiver_phone: order.phone,
    created_time: Date.now()
  });
}

/**
 * @description: 根据订单id获取订单详情
 * @param {type} 
 * @return: 
 */
async function getOrderDetail(orderId) {
  return await Order.findOne({
    where: {
      id: orderId
    }
  });
}

/**
 * @description: 获取订单列表
 * @param {type} 
 * @return: 
 */
async function getOrderList(limit, offset) {
  return await Order.findAndCountAll({
    limit: limit,
    offset: offset
  });
}

module.exports = {
  addOrder,
  getOrderDetail,
  getOrderList
}
