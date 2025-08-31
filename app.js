// app.js
import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import exphbs from 'express-handlebars';
import methodOverride from 'method-override';

import contactoRouter from './routes/contacto.js';
import productosRouter from './routes/productos.js';
import { pool } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ------------ Middlewares ------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Brand + year para todas las vistas
app.use((req, res, next) => {
  res.locals.brand = 'PampaTech';
  res.locals.year = new Date().getFullYear();
  next();
});

// ------------ Handlebars + helpers ------------
const techImgs = {
  teclado: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80&auto=format&fit=crop',
  mouse: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&q=80&auto=format&fit=crop',
  monitor: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=1200&q=80&auto=format&fit=crop',
  notebook: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?w=1200&q=80&auto=format&fit=crop',
  laptop: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&auto=format&fit=crop',
  auricular: 'https://images.unsplash.com/photo-1518444028785-8f6f301000fa?w=1200&q=80&auto=format&fit=crop',
  impresora: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&auto=format&fit=crop',
  gabinete: 'https://images.unsplash.com/photo-1512427691650-9c11b2f2d37e?w=1200&q=80&auto=format&fit=crop',
  ssd: 'https://images.unsplash.com/photo-1587202372775-98927b795a31?w=1200&q=80&auto=format&fit=crop'
};
const defaultTech =
  'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=1200&q=80&auto=format&fit=crop';

const hbs = exphbs.create({
  extname: '.hbs',
  helpers: {
    currency: v =>
      Number(v).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }),
    imgFor: (nombre, imagen) => {
      // 1) Si en DB hay URL, usarla
      if (imagen) return imagen;

      // 2) Mapear por nombre (en español)
      const n = (nombre || '').toLowerCase();
      if (n.includes('teclado')) return techImgs.teclado;
      if (n.includes('mouse')) return techImgs.mouse;
      if (n.includes('monitor') || n.includes('pantalla')) return techImgs.monitor;
      if (n.includes('notebook') || n.includes('laptop')) return techImgs.notebook;
      if (n.includes('auricular') || n.includes('headset')) return techImgs.auricular;
      if (n.includes('impresora')) return techImgs.impresora;
      if (n.includes('gabinete')) return techImgs.gabinete;
      if (n.includes('ssd')) return techImgs.ssd;

      // 3) Fallback tech
      return defaultTech;
    }
  }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// ------------ Rutas ------------
app.get('/', async (req, res) => {
  try {
    const [destacados] = await pool.query(
      'SELECT id, nombre, precio, stock, imagen FROM productos ORDER BY id DESC LIMIT 6'
    );
    res.render('home', { titulo: 'Home', destacados });
  } catch (e) {
    console.error('HOME DB ERR:', e.message);
    res.render('home', { titulo: 'Home', destacados: [] });
  }
});

app.use('/contacto', contactoRouter);
app.use('/productos', productosRouter);

// 404
app.use((req, res) => res.status(404).render('404', { titulo: 'No encontrado' }));

// ------------ Server ------------
app.listen(PORT, () => {
  console.log(`🚀 Server listo en http://localhost:${PORT}`);
});
