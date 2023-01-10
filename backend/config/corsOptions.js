import allowedOrgins from './allowOrgins.js';

const corsOptions = {
	orgin: (orgin, callback) => {
		if (allowedOrgins.indexOf(orgin) !== -1 || !orgin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	credentials: true,
	optionsSuccessStatus: 200,
};

export default corsOptions;
