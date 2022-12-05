const express = require('express')
const bodtParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodtParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081, ()=> {
    console.log(`Server is running...`);
})