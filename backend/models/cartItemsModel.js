import mongoose from 'mongoose';
const cartSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	cartItems: [
		{
			name: { type: String, required: true },
			qty: { type: Number, required: true },
			image: { type: Array, required: true },
			price: { type: Number, required: true },
			_id: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: 'Product',
			},w
		},
	],
});
const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
