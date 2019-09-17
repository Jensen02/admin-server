/*
 * @Description: 用户信息模型
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-11 01:23:19
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-17 18:20:43
 */

const { BIGINT, STRING, DATE } = require('sequelize')
const sequelize = require('../../config/db')

const User = sequelize.define('user', {
  id: {
    type: BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING
  },
  phone: {
    type: STRING
  },
  created_time: {
    type: DATE
  },
  updated_time: {
    type: DATE
  }
}, {
  timestamps: false
})

User.sync();

/**
 * @description: 创建新用户
 * @param {type} 
 * @return: 
 */
async function createUser(userData) {
  return await User.create({
    username: userData.username,
    email: userData.email,
    phone: userData.phone,
    created_time: Date.now(),
    updated_time: Date.now()
  });
}

/**
 * @description: 根据id获取用户信息
 * @param {type} 
 * @return: 
 */
async function getUserInfo(userId) {
  return await User.findOne({
    where: {
      id: userId
    }
  });
}

/**
 * @description: 获取所有用户信息(分页查询)
 * @param {type} 
 * @return: 
 */
async function getAllUsers(limit, offset) {
  return await User.findAndCountAll({
    where: {},
    offset: offset,
    limit: limit
  });
}

module.exports = {
  createUser,
  getUserInfo,
  getAllUsers
}