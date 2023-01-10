import mongoose from 'mongoose';
import bycrypt from 'bcryptjs';
const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
		addressName: {
			type: String,
			required: false,
		},
		surname: {
			type: String,
			required: false,
		},
		street: {
			type: String,
			required: false,
		},
		postalCode: {
			type: String,
			required: false,
		},
		city: {
			type: String,
			required: false,
		},
		phone: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bycrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	const salt = await bycrypt.genSalt(10);
	this.password = await bycrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
