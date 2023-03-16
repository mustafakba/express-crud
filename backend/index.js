import express from "express"
import bodyParser from "body-parser";
import usersRouter from './routes/users.js'

const app = express();
app.use(bodyParser.json())

app.use("/users",usersRouter)
app.use("*",(req,res) => {
    res.status(404).send("Page not found")
})

const port = 5000;


app.listen(port,()=>{
    console.log(`Server running on port :${port}`)
})