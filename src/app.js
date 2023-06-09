import express from 'express'
import { join } from 'path'

require('dotenv').config()

const app = express()

app.set('view engine', 'ejs')
app.set('views', join(`${__dirname}../../src`, 'views'))

app.get('/hello', function (req,             res) {
  res.send('Hello World')
})




app.use('/', (req, res) => {
  res.render('login.ejs');
})

app.use((_error, req, res, next) => {
  return res.status(500).json({
    message: 'Internal Server Error',
  })
})

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Route not found' })
})

app.listen(process.env.PORT, () => {
  console.log(`listening at ${process.env.APP_URL}:${process.env.PORT}`)
})
