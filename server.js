import express from "express";
import pool from "./config/connection.js";
import cors from "cors";
import productRoutes from "./router/productRoutes.js";
import clientProductRounter from "./router/client_product.route.js";
import adminRouter from "./router/admin.router.js";
import categoryRouter from "./router/category.route.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/product", productRoutes);
const PORT = process.env.PORT || 3000;

// Client and Products
app.use("/admin", adminRouter);
// Admin
app.use("/shopping", clientProductRounter);
// Category
app.use("/category", categoryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  pool;
});
