require('dotenv').config()

module.exports.APP_KEY = process.env.APP_KEY

module.exports.BASE_URL = `${process.env.APP_URL}:${process.env.PORT}`
