const data = {
	name: 'jehol',
	age: 23,
	sex: 'f'
};

Object.keys(data).forEach((key, value) => {

	Object.defineProperty(data, key, {
		enumerable: true,
		configurable: true,
		get: function () {
			console.log('get');
		},
		set: (val) => {
			data.key = val;
			console.log(val, '-------set');
		}
	});
});


// data.name = 'mm';

console.log(data.name);
