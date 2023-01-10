import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@desc Fetch all products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
	const pageSize = 12;
	const page = Number(req.query.pageNumber) || 1;

	const category = req.query.category ? { category: req.query.category } : '';

	const keyword = req.query.keyword
		? {
				name: {
					$regex: req.query.keyword,
					$options: 'i',
				},
		  }
		: {};

	const count = await Product.countDocuments({ ...keyword, ...category });
	const products = await Product.find({ ...keyword, ...category })
		.limit(pageSize)
		.skip(pageSize * (page - 1));
	res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

//@desc Fetch single product
//@route GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error('product not found');
	}
});

//@desc Delete product
//@route DELETE /api/products/:id
//@access Admin/Private
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		await product.remove();
		res.json({ message: 'Produkt został usunęty' });
	} else {
		res.status(404);
		throw new Error('Nie znaleziono produktu o podanym id');
	}
});

//@desc Create product
//@route POST /api/products
//@access Admin/Private
const createProduct = asyncHandler(async (req, res) => {
	const product = new Product({
		name: 'Sample name',
		price: 0,
		user: req.user._id,
		image: [],
		category: 'Sample category',
		countInStock: 0,
		numReviews: 0,
		description: 'Sample description',
	});
	const createdProduct = await product.save();
	res.status(201).json(createdProduct);
});

//@desc Update product
//@route PUT /api/products/:id
//@access Admin/Private
const updateProduct = asyncHandler(async (req, res) => {
	const { name, price, description, image, category, countInStock } = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		product.name = name;
		product.price = price;
		product.image = image;
		product.category = category;
		product.countInStock = countInStock;
		product.description = description;

		const updatedProduct = await product.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error('Nie znaleziono produktu o podanym id');
	}
});

//@desc Create new review
//@route POST /api/products/:id/review
//@access Private
const createProductReview = asyncHandler(async (req, res) => {
	const { rating, comment } = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		const alreadyReviewed = product.reviews.find(
			(r) => r.user.toString() === req.user._id.toString()
		);

		if (alreadyReviewed) {
			res.status(400);
			throw new Error('Produkt można ocenić tylko jeden raz.');
		}
		const review = {
			name: req.user.name,
			rating: Number(rating),
			comment,
			user: req.user._id,
		};
		product.reviews.push(review);
		product.numReviews = product.reviews.length;
		product.rating =
			product.reviews.reduce((acc, rev) => rev.rating + acc, 0) /
			product.reviews.length;

		await product.save();
		res.status(201).json({ message: 'Ocena została pomyślnie dodana' });
	} else {
		res.status(404);
		throw new Error('Nie znaleziono produktu o podanym id');
	}
});

//@desc Check review
//@route POST /api/products/:id/checkreview
//@access Private
const checktReview = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		const alreadyReviewed = product.reviews.find(
			(r) => r.user.toString() === req.user._id.toString()
		);

		if (alreadyReviewed) {
			res.json(true);
		} else {
			res.json(false);
		}
	} else {
		res.status(404);
		throw new Error('Nie znaleziono produktu o podanym id');
	}
});

//@desc Fetch top products
//@route GET /api/products/top
//@access Public
const topProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({}).sort({ rating: -1 }).limit(6);
	res.json({ products });
});

export {
	getProductById,
	getProducts,
	deleteProduct,
	createProduct,
	updateProduct,
	createProductReview,
	checktReview,
	topProducts,
};
