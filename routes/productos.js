import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

// Listado público
router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM productos ORDER BY id DESC');
  res.render('productos', { titulo: 'Productos', productos: rows });
});

// Panel admin (tabla + alta)
router.get('/admin', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM productos ORDER BY id DESC');
  res.render('admin', { titulo: 'Administración', productos: rows });
});

// Crear
router.post('/', async (req, res) => {
  const { nombre, precio, stock } = req.body;
  await pool.query('INSERT INTO productos (nombre, precio, stock) VALUES (?,?,?)', [nombre, Number(precio), Number(stock)]);
  res.redirect('/productos/admin');
});

// Ver formulario de edición
router.get('/editar/:id', async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query('SELECT * FROM productos WHERE id=?', [id]);
  if (!rows.length) return res.redirect('/productos/admin');
  res.render('editar', { titulo: 'Editar', producto: rows[0] });
});

// Actualizar
router.put('/editar/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock } = req.body;
  await pool.query('UPDATE productos SET nombre=?, precio=?, stock=? WHERE id=?', [nombre, Number(precio), Number(stock), id]);
  res.redirect('/productos/admin');
});

// Eliminar
router.delete('/eliminar/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM productos WHERE id=?', [id]);
  res.redirect('/productos/admin');
});

export default router;
