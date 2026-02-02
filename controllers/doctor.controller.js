import pool from "../config/connection.js";
export const getDoctor = async (req, res) => {
  try {
    const result = await pool.query("select * from doctors");
    res.send(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const createDoctor = async (req, res) => {
  try {
    const { name, profession } = req.body;
    const newDoctorProduct = await pool.query(
      `INSERT INTO doctors (name, profession)
             VALUES ($1, $2)`,
      [name, profession]
    );
    res
      .status(201)
      .json({
        message: "Muaffaqiyatli qo'shildi",
        newDoctorProduct: newDoctorProduct.rows[0],
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteDoctor = async (req, res) => {
    try {
        const {id} = req.params
        const result = await pool.query(`
            delete from products where id = $1 RETURNING *`, [id])
            res.json({
                message: "product sucessfull deleted", 
                result: result.rows(0)
            })
    } catch (error) {
        
    }
}