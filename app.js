const express = require('express')
const path = require("path")


const app = express()
const port = 3000
var public = path.join(__dirname, '.')

app.get("/", function(req, res){
    res.sendFile(path.join(public, 'index.html'))
})

app.use('/', express.static(public))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})