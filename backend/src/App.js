const express = require('express')
const aiRoutes = require('./routes/ai.route')

const app = express();

app.use(express.json());


app.use('/ai',aiRoutes)

module.exports = app ;