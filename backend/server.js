import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

import productRoutes from './routes/productsRoutes.js';
import userRoutes from './routes/usersRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import corsOptions from './config/corsOptions.js';

dotenv.config();

connectDB();
const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('API is running');
});
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
	res.send(process.env.PAYPAL_CLIENT_ID)
);
app.use(cors());
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static(path.join(__dirname, '/my-shop/build')));

// 	app.get('*', (req, res) =>
// 		res.sendFile(path.resolve(__dirname, 'my-shop', 'build', 'index.html'))
// 	);
// } else {
// }

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT} Modezp`
	)
);
