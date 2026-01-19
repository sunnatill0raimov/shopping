import pool from '../config/connection.js';

export const getAdmin = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM admin");
    res.status(200).json({ admin: result.rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export const postAdmin = async (req, res) => {
  try {
    const newAdmin = req.body;

    const result = await pool.query(
      `INSERT INTO admin (fullname, phone_number, admin_role)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [
        newAdmin.fullname,
        newAdmin.phone_number,
        newAdmin.admin_role,
       
      ]
    );

    res.status(201).json({
      message: "Muvaffaqiyatli qo'shildi",
      newStudent: result.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export const deleteAdmin=async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM admin WHERE admin_id = $1 RETURNING *;",
      [id]
    );

    if (!result.rows[0]) {
      return res.status(404).json({ message: "admin topilmadi" });
    }

    res.status(200).json({
      message: "Muvaffaqiyatli o'chirildi",
      removedStudent: result.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export const putAdmin =  async (req, res) => {
  try {
    const {id} = req.params
    const s = req.body;

    const result = await pool.query(
      `UPDATE admin
       SET (fullname, phone_number, admin_role)
         = ($1, $2, $3)
       WHERE admin_id = $4
       RETURNING *;`,
      [
        s.fullname,
        s.phone_number,
        s.admin_role,
        id
      ]
    );

    if (!result.rows[0]) {
      return res.status(404).json({ message: "admin topilmadi" });
    }

    res.status(200).json({
      message: "Muvaffaqiyatli yangilandi",
      updatedStudent: result.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}