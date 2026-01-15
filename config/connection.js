import { Pool } from "pg"
import 'dotenv/config'

const pool = new Pool({
	connectionString: process.env.DB_URL,
	ssl: {
		rejectUnauthorized: true,
	},
})

pool
	.connect()
	.then(() => console.log('Database ulandi'))
	.catch(error => console.error('Databasega ulanishda hatolik: ', error))

export default pool