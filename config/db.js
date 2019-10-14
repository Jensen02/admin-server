/*
 * @Description: 
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-11 01:17:04
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-11 18:14:41
 */
const Sequelize = require('sequelize')

const sequelize = new Sequelize('admin', 'root', 'zss123456', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: true,
  operatorsAliases: false,
  dialectOptions: {
    // 字符集
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  define: {
    underscored: false,
    freezeTableName: false,
    charset: 'utf8mb4',
    dialectOptions: {
      collate: 'utf8mb4_unicode_ci'
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00'    // 东八时区
});

module.exports = sequelize;