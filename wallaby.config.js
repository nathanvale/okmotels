const path = require('path')
require('dotenv').config({
  path: path.resolve(__dirname, `./.env.test`),
})
module.exports = require('easy-scripts/config').wallaby
