const products = [
	{
		name: 'JEDNOCZĘŚCIOWA PIŻAMA LILO STICH',
		image: [
		
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy',
		size: ['S', 'M', 'L', 'XL'],
		category: 'piżamy',
		price: 139.99,
		countInStock: 100,
		rating: 5,
		numReviews: 12,
	},
	{
		name: 'JEDNOCZĘŚCIOWA PIŻAMA KOALA',
		image: [
		
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy',
		size: ['S', 'M', 'L', 'XL'],
		category: 'piżamy',
		price: 139.99,
		countInStock: 100,
		rating: 4.5,
		numReviews: 12,
	},
	{
		name: 'JEDNOCZĘŚCIOWA PIŻAMA ŻABA',
		image: [
			
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy',
		size: ['S', 'M', 'L', 'XL'],
		category: 'piżamy',
		price: 139.99,
		countInStock: 100,
		rating: 5,
		numReviews: 12,
	},
	{
		name: 'PIŻAMA DZIECIĘCA LILO STICH',
		image: [
			
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['105', '115', '125', '135', '145'],
		category: 'piżamy',
		price: 129.99,
		countInStock: 100,
		rating: 5,
		numReviews: 54,
	},
	{
		name: 'PIŻAMA DZIECIĘCA PIKACHU',
		image: [
			
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['105', '115', '125', '135', '145'],
		category: 'piżamy',
		price: 129.99,
		countInStock: 100,
		rating: 5,
		numReviews: 25,
	},
	{
		name: 'PIŻAMA DZIECIĘCA KOTEK',
		image: [
			
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['105', '115', '125', '135', '145'],
		category: 'piżamy',
		price: 129.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'PIŻAMA DINOZAUR SMOK DZIECIĘCA',
		image: [
			
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['105', '115', '125', '135', '145'],
		category: 'piżamy',
		price: 169.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'JEDNOCZĘŚCIOWA PIŻAMA NIETOPERZ',
		image: [
		
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['S', 'M', 'L', 'XL'],
		category: 'piżamy',
		price: 139.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'PIŻAMA ZWIERZĘTA LEMUR KRÓL JULIAN',
		image: [
			
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['S', 'M', 'L', 'XL'],
		category: 'piżamy',
		price: 139.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'PIŻAMA KROWA KRÓWKA ZWIERZĘTA',
		image: [
		
		],
		description:
			'Pidżamy wykonane są delikatnego i bardzo przyjemnego w dotyku materiału. Kapcie widoczne na niektórych zdjęciach nie są częścią piżamy. Pidżamy wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału. Piżamy bardzo cieplutkie ',
		size: ['105', '115', '125', '135', '145'],
		category: 'piżamy',
		price: 129.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'BLUZA MĘSKA 3D RICK AND MORTY ',
		image: [
			
		],
		description:
			'Wysokiej jakości bluza Z MOTYWEM RICK AND MORTY. Bluza bardzo wygodna i ciepła. Wysoka jakość wykonania w atrakcyjnej cenie',
		size: ['S', 'M', 'L', 'XL', '2XL'],
		category: 'bluzy męskie',
		price: 125.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'BLUZA MĘSKA 3D RICK AND MORTY ',
		image: [
			
		],
		description:
			'Wysokiej jakości bluza Z MOTYWEM RICK AND MORTY. Bluza bardzo wygodna i ciepła. Wysoka jakość wykonania w atrakcyjnej cenie',
		size: ['S', 'M', 'L', 'XL', '2XL'],
		category: 'bluzy męskie',
		price: 125.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'BLUZA MĘSKA 3D RICK AND MORTY ',
		image: [
			
		],
		description:
			'Wysokiej jakości bluza Z MOTYWEM RICK AND MORTY. Bluza bardzo wygodna i ciepła. Wysoka jakość wykonania w atrakcyjnej cenie',
		size: ['S', 'M', 'L', 'XL', '2XL'],
		category: 'bluzy męskie',
		price: 125.99,
		countInStock: 100,
		rating: 5,
		numReviews: 6,
	},
	{
		name: 'DAMSKI SWETER GOLF OCIEPLANY ',
		image: [
			
		],
		description:
			'ELEGANSKI OCIEPLANY SWETER DAMSKI NIESAMOWITY STYL WYSOKA JAKOŚĆ WYKONANIA SWETER NIE POGRUBIA A JEDNOCZESNIE JEST BARDZO CIEPŁY',
		size: ['S', 'M', 'L', 'XL'],
		category: 'swetry damskie',
		price: 145.99,
		countInStock: 100,
		rating: 4.5,
		numReviews: 12,
	},
	{
		name: 'DAMSKI SWETER GOLF OCIEPLANY',
		image: [
			
		],
		description:
			'ELEGANSKI OCIEPLANY SWETER DAMSKI NIESAMOWITY STYL WYSOKA JAKOŚĆ WYKONANIA SWETER NIE POGRUBIA A JEDNOCZESNIE JEST BARDZO CIEPŁY',
		size: ['S', 'M', 'L', 'XL'],
		category: 'swetry damskie',
		price: 145.99,
		countInStock: 100,
		rating: 5,
		numReviews: 12,
	},
	{
		name: 'DAMSKI SWETER GOLF OCIEPLANY',
		image: [
			
		],
		description:
			'ELEGANSKI OCIEPLANY SWETER DAMSKI NIESAMOWITY STYL WYSOKA JAKOŚĆ WYKONANIA SWETER NIE POGRUBIA A JEDNOCZESNIE JEST BARDZO CIEPŁY',
		size: ['S', 'M', 'L', 'XL'],
		category: 'swetry damskie',
		price: 145.99,
		countInStock: 100,
		rating: 4.5,
		numReviews: 3,
	},
	{
		name: 'Koszulka Termoaktywna VENOM',
		image: [
			
		],
		description:
			'Termoaktywne koszulki w oryginalnych wzorach. Wysoka jakość nadruku HD, Koszulki produkowane ze specjalnie projektowanych dzianin syntetycznych, które posiadają zdolność sprawnego odprowadzania potu i pary wodnej ze skóry pozostawiając ją suchą, nawet przy intensywnym wysiłku fizycznym',
		size: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
		category: 'koszulki męskie',
		price: 89.99,
		countInStock: 100,
		rating: 5,
		numReviews: 4,
	},
	{
		name: 'STRÓJ KĄPIELOWY DŁUGI RĘKAW KWIATY',
		image: [
			
		],
		description:
			'SPORTOWY Strój kąpielowy. Przysłania ramiona i plecy dzięki temu idealnie się sprawdza do osłonięcia mocno opalonych miejsc. Wysoka jakość materiału wykonanie z dbałością o szczegóły',
		size: ['S', 'M', 'L'],
		category: 'stroje kąpielowe',
		price: 99.99,
		countInStock: 100,
		rating: 4.5,
		numReviews: 3,
	},
	{
		name: 'BLUZA DAMSKA KANGUREK PIESEŁ SHIBA',
		image: [
			
		],
		description:
			'Wyjątkowo BLUZA kangurek wykonana pod wzór pieska Shiba. Bluza wykonane są z delikatnego i bardzo przyjemnego w dotyku materiału',
		size: ['S', 'M', 'L', 'XL', '2XL'],
		category: 'bluzy damskie',
		price: 159.99,
		countInStock: 100,
		rating: 5,
		numReviews: 30,
	},
	{
		name: 'KOSZULKA T-shirt DAMSKA BABY YODA',
		image: [],
		description:
			'Koszulka Baby Yoda. Produkt w 100% nowy nie używany. Azjatyckie rozmiary',
		size: ['S', 'M', 'L', 'XL', '2XL'],
		category: 'koszulki damskie',
		price: 75.99,
		countInStock: 100,
		rating: 5,
		numReviews: 23,
	},
	{
		name: 'Medalion Naszyjnik Wiedźmin 3 Dziki Gon Szkoła Kot',
		image: [
			
		],
		description:
			'Długość łańcuszka: 50 cm. Wymiary medalionu podane na zdjęciach w galerii. W skład zestawu wchodzi:	Medalion, Łańcuszek, Woreczek na medalion.',
		size: [],
		category: 'pozostałe',
		price: 85.99,
		countInStock: 100,
		rating: 5,
		numReviews: 21,
	},
	{
		name: 'Medalion Naszyjnik Wiedźmin 3 Dziki Gon Szkoła Węża',
		image: [
			
		],
		description:
			'Długość łańcuszka: 50 cm. Wymiary medalionu podane na zdjęciach w galerii. W skład zestawu wchodzi:	Medalion, Łańcuszek, Woreczek na medalion.',
		size: [],
		category: 'pozostałe',
		price: 85.99,
		countInStock: 100,
		rating: 5,
		numReviews: 17,
	},
	{
		name: 'Medalion Naszyjnik Wiedźmin 3 Dziki Gon Szkoła Gryfa',
		image: [
			
		],
		description:
			'Długość łańcuszka: 50 cm. Wymiary medalionu podane na zdjęciach w galerii. W skład zestawu wchodzi:	Medalion, Łańcuszek, Woreczek na medalion.',
		size: [],
		category: 'pozostałe',
		price: 85.99,
		countInStock: 100,
		rating: 5,
		numReviews: 35,
	},
	{
		name: 'Medalion Naszyjnik Wiedźmin 3 Dziki Gon Szkoła Niedźwiedzia',
		image: [
			
		],
		description:
			'Długość łańcuszka: 50 cm. Wymiary medalionu podane na zdjęciach w galerii. W skład zestawu wchodzi:	Medalion, Łańcuszek, Woreczek na medalion.',
		size: [],
		category: 'pozostałe',
		price: 85.99,
		countInStock: 100,
		rating: 5,
		numReviews: 20,
	},
];

export default products;
