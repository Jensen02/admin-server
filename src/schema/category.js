/*
 * @Description: 品类模型
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-19 17:24:39
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-20 17:19:54
 */
const { BIGINT, STRING, DATE, Op } = require('sequelize');
const sequelize = require('../../config/db');

const Category = sequelize.define('category', {
  id: {
    type: BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    // defaultValue: 100000
  },
  name: {
    type: STRING,
    allowNull: false
  },
  category_first: {
    type: BIGINT,
    allowNull: false
  },
  category_second: {
    type: BIGINT,
    allowNull: false
  },
  category_third: {
    type: BIGINT,
    allowNull: false
  },
  created_time: {
    type: DATE,
    allowNull: false
  },
  updated_time: {
    type: DATE,
    allowNull: false
  }
}, {
  timestamps: false
});

Category.sync();

/**
 * @description: 添加品类
 * @param {type} 
 * @return: 
 */
async function addCategory(first, second, name) {
  return await Category.create({
    category_first: first,
    category_second: second,
    category_third: 0,
    name: name,
    created_time: Date.now(),
    updated_time: Date.now()
  });
}

/**
 * @description: 获取一级品类列表
 * @param {type} 
 * @return: 
 */
async function getCategoryFirstList() {
  return await Category.findAndCountAll({
    where: {
      category_first: 0
    }
  })
}

/**
 * @description: 获取二级品类列表
 * @param {type} 
 * @return: 
 */
async function getCategorySecondList(first) {
  return await Category.findAndCountAll({
    where: {
      category_second: 0,
      category_first: first
    }
  })
}

/**
 * @description: 获取三级品类列表
 * @param {type} 
 * @return: 
 */
async function getCategoryThirdList(first, second) {
  return await Category.findAndCountAll({
    where: {
      category_third: 0,
      category_first: first,
      category_second: second
    }
  })
}

/**
 * @description: 修改品类名称
 * @param {type} 
 * @return: 
 */
async function updateCategoryName(id, name) {
  return await Category.update({
    name: name,
    updated_time: Date.now()
  }, {
    where: {
      id: id
    }
  })
}

module.exports = {
  addCategory,
  getCategoryFirstList,
  getCategorySecondList,
  getCategoryThirdList,
  updateCategoryName
}