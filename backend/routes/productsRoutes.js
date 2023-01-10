import express from 'express';

const router = express.Router();
import {
	getProductById,
	getProducts,
	deleteProduct,
	createProduct,
	updateProduct,
	createProductReview,
	checktReview,
	topProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/review').post(protect, createProductReview);
router.route('/:id/check').post(protect, checktReview);
router.route('/top').get(topProducts);

router
	.route('/:id')
	.get(getProductById)
	.delete(protect, admin, deleteProduct)
	.put(protect, admin, updateProduct);
export default router;
