import express from "express"
import pool from "./config/connection.js"
import cors from "cors"
import productRoutes from "./router/productRoutes.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use('/product', productRoutes)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    pool
})