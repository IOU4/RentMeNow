const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  fs.readFile('../assets/data.json', 'utf8', (err, data) => {
    try{
      console.log(data)
      res.send(data);
    }catch{
      cosole.log('err = ', err)
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


