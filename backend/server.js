require('dotenv').config()
const app = require('./src/App');
const port = process.env.port

app.get('/' , (req , res) => {
    res.send("server is okkk")
})


app.listen(port , () => {
    console.log(`Server is running on ${port}`)
})