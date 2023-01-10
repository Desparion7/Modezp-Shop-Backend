import bcrypt from 'bcryptjs';
const users = [
	{
		name: 'Desparion',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Engar',
		email: 'engar@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Paweł',
		email: 'paweł@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
