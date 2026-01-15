import express from "express"
import pool from "./config/connection.js"
import cors from "cors"

const app = express()
app.use(cors())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    pool
})