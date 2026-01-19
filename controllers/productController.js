import pool from "../config/connection.js";

//! get all product
export const getProduct = async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
};

//! create product
export const createProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      quantity,
      description,
      brand,
      country,
      rating,
      category_id,
    } = req.body;
    if (
      !title ||
      !price ||
      !quantity ||
      !description ||
      !brand ||
      !country ||
      !rating ||
      !category_id
    ) {
      return res.status(400).json({
        message:
          "title, price, quantity, description, brand, country, rating, category_id majburiy",
      });
    }
    const result = await pool.query(
      "INSERT INTO products (title, price, quantity, description, brand, country, rating, category_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [title, price, quantity, description, brand, country, rating, category_id]
    );
    res.status(201).json({ message: "success", client: result.rows[0] });
  } catch (error) {
    console.log("Xatolik bor: ", error);
    res.status(500).json({ message: error.message });
  }
};

//! delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: `${id} id li products topilmadi`,
      });
    }
    res.json({
      message: "product successfully deleted",
      client: result.rows[0],
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: error.message });
  }
};

// ! update product

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      price,
      quantity,
      description,
      brand,
      country,
      rating,
      category_id,
    } = req.body;

    if (
      !title ||
      !price ||
      !quantity ||
      !description ||
      !brand ||
      !country ||
      !rating ||
      !category_id
    ) {
      return res.status(400).json({
        message:
          "title, price, quantity, description, brand, country, rating, category_id majburiy",
      });
    }

    const result = await pool.query(
      "UPDATE products SET title = $1, price = $2, quantity = $3, description = $4, brand = $5, country = $6, rating = $7, category_id = $8 WHERE id = $9 RETURNING *",
      [
        title,
        price,
        quantity,
        description,
        brand,
        country,
        rating,
        category_id,
        id,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: `${id} id li product topilmadi`,
      });
    }

    res.json({
      message: "product successfully updated",
      client: result.rows[0],
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: error.message });
  }
};
