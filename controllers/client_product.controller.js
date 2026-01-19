import pool from '../config/connection.js';

export const getAllClientProdut = async (req, res) => {
	try {
		const clientProduct = await pool.query(`SELECT * FROM client_product`)
		res.send(clientProduct.rows)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message })
	}
}

export const createClientProduct = async (req, res) => {
	try {
		const { date, client_id, product_id } = req.body
		const newClientProduct = await pool.query(
			`INSERT INTO client_product (date, client_id, product_id)
             VALUES ($1, $2, $3)
        `,
			[date, client_id, product_id],
		)
		res.status(201).send(newClientProduct.rows[0])
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message })
	}
}

export const deleteClientProduct = async (req, res) => {
	try {
		const { id } = req.params
		const clientProduct = await pool.query(
			'DELETE FROM client_product WHERE client_product_id = $1 RETURNING *;',
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

export const updateClientProduct = async (req, res) => {
	try {
		const { id } = req.params
		const { date, client_id, product_id } = req.body

		const clientProduct = await pool.query(
			'UPDATE client_product SET $1, $2, $3, WHERE client_product_id = $4 RETURNING *;',
			[date, client_id, product_id, id],
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