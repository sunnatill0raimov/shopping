import pool from "../config/connection.js";

export const getClients = async (req, res) => {
  const result = await pool.query("SELECT * FROM client");
  res.json(result.rows);
};

export const createClient = async (req, res) => {
  try {
    const { fullname, age, address, phone_number, gender, email } = req.body;
    if (!fullname || !age || !phone_number || !gender || !email || !address) {
      return res.status(400).json({
        message: "fullname, age, phone_number, gender, email, address majburiy",
      });
    }
    const result = await pool.query(
      "INSERT INTO client (fullname, age, address, phone_number, gender, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        fullname,
        age,
        address,
        phone_number,
        gender,
        email,
      ]
    );
    res.status(201).json({ message: "success", client: result.rows[0] });
  } catch (error) {
    console.log("Xatolik bor: ", error);
    res.status(500).json({ message: error.message });
  }
};
