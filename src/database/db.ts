// import mongoose from 'mongoose'
import Sequelize from 'sequelize'
import config from './config'

module.exports = (() => {
  return new Sequelize(
    process.env.SQL_DATABASENAME || 'boilerplate_db',
    process.env.SQL_USER || 'root',
    process.env.SQL_PASSWORD || 'toor',
    config
  )
  // return new Sequelize('mysql://root:toor@localhost:3306/gotraining')
})()
