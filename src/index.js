require('dotenv').config()
const express = require('express')
const fs = require('fs')

const app = express()
const port = process.env.PORT

if (!process.env.PORT){
    throw new Error('port missing from .env file')
}

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.get('/video', (req, res) => {

    const path = 'videos/sample1.mp4'
    fs.stat(path, (err, stats) => {
        
        if (err){
            console.error('an error occured')
            res.sendStatus(500)
            return
        }
        res.writeHead(200, {
            'content-length': stats.size,
            'content-type': 'video/mp4'
        })
        //open stream, pipe it to res
        fs.createReadStream(path).pipe(res)
    })
})