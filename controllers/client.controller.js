import pool from '../config/connection.js';


// get clientlar
export const getclient= async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM client`)
    res.send(result.rows)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export const getSingleclient= async (req, res) => {
  try {
    const {id} = req.params
    const result = await pool.query(`SELECT * FROM client WHERE client_id=$1`, [id])
    res.send(result.rows[0])
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export const postsclient = async (req, res) => {
  try {
    const newclient = req.body;

    const result = await pool.query(
      `INSERT INTO client (fullname, age, address, phone_number, gender,email)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        newclient.fullname,
        newclient.age,
        newclient.address,
        newclient.phone_number,
        newclient.gender,
        newclient.email
      ]
    );

    res.status(201).json({
      message: "Muvaffaqiyatli qo'shildi",
      newClient: result.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export const deleteclient = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const result = await pool.query(
      "DELETE FROM client WHERE client_id = $1 RETURNING *;",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Client topilmadi" });
    }

    res.status(200).json({
      message: "Muvaffaqiyatli ochirildi",
      removedClient: result.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const putclient = async (req, res) => {
  try {
    const id = (req.params.id);
    const s = req.body;

    const result = await pool.query(
      `UPDATE client
       SET (fullname, age, address, phone_number, gender, email)
         = ($1, $2, $3, $4, $5, $6)
       WHERE client_id = $7
       RETURNING *;`,
      [
        s.fullname,
        s.age,
        s.address,
        s.phone_number,
        s.gender,
        s.email,
        id
      ]
    );
    if (!result.rows[0]) {
      return res.status(404).json({ message: "Client topilmadi" });
    }

    res.status(200).json({
      message: "Muvaffaqiyatli yangilandi",
      updatedclient: result.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}