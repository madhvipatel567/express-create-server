# express-create-server
Express JS - Create server and run app on specific port

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).

```js
import express from 'express'
const app = express()

app.get('/hello', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log(`Server is started`)
})
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

## Quick Start

  Install dependencies:

```console
$ npm install
```

Start the server using babel:

```console
$ nodemon --exec babel-node src/app.js
```

Login Page:
  View the website at: http://localhost:3000


## Examples

  To view the examples, clone the Express repo and install the dependencies:

```console
$ https://github.com/madhvipatel567/express-create-server.git
$ cd express-create-server
$ npm install
$ nodemon --exec babel-node src/app.js
```
