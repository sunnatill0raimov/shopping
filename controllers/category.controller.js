import pool from '../config/connection.js';

export const getAllCategory = async (req, res) => {
	try {
		const clientProduct = await pool.query(`SELECT * FROM category`)
		res.send(clientProduct.rows)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message })
	}
}

export const getSingleCategory = async (req, res) => {
	try {
		const id = Number(req.params.id)
		const product = await pool.query(
			'SELECT * FROM category WHERE id = $1',
			[id],
		)
		if (product.rows.length === 0) {
			return res.status(404).json({ message: 'Category not found' })
		}
		res.status(200).json(product.rows[0])
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message })
	}
}

export const createCategory = async (req, res) => {
	try {
		const { category_type } = req.body
		const newCategory = await pool.query(
			`INSERT INTO category (category_type)
             VALUES ($1)
        `,
			[category_type],
		)
		res.status(201).json({message: "Muvaffaqiyatli yaratildi" , newCategory: newCategory.rows[0]})
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message })
	}
}

export const deleteCategory = async (req, res) => {
	try {
		const { id } = req.params
		const clientProduct = await pool.query(
			'DELETE FROM category WHERE id = $1 RETURNING *;',
			[id],
		)
		res.status(200).json({
			message: "Muvaffaqiyatli o'chirildi",
			removedClientProduct: clientProduct.rows[0],
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message })
	}
}

export const updateCategory = async (req, res) => {
	try {
		const { id } = req.params
		const { category_type } = req.body

		const clientProduct = await pool.query(
			'UPDATE category SET category_type = $1 WHERE id = $2 RETURNING *;',
			[category_type, id],
		)

		res.status(201).json({
			message: 'Muvaffaqiyatli yangilandi',
			clientProduct: clientProduct.rows[0],
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message })
	}
} 						