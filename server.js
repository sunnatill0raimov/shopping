import express from 'express'
import pool from './config/connection.js'
import cors from 'cors'
import clientProductRounter from './router/client_product.route.js'
import adminRouter from './router/admin.route.js'
import categoryRouter from './router/category.route.js'
import productRoutes from './router/product.route.js'
import clientRounter from './router/client.route.js'

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

// Client and Products
app.use('/admin', adminRouter)
// Admin
app.use('/shopping', clientProductRounter)
// Category
app.use('/category', categoryRouter)
// Product
app.use('/product', productRoutes)
// Client
app.use('/client', clientRounter)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
	pool
})
