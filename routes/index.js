import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM productos ORDER BY id DESC LIMIT 3');
  res.render('home', { titulo: 'Home', destacados: rows });
});

export default router;
