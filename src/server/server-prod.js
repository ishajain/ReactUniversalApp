import express from 'express'
import path from 'path'


const app = express()
app.use(express.static(__dirname))
const PORT = process.env.PORT || 8000
const html_file = path.join(__dirname,"index.html")
app.get("/",(req,res) => {
    res.sendFile(html_file)
})
app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
})


