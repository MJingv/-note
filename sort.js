// const bubbleSort = (arr) => {
//
// 	for (let i = 0; i < arr.length; i++) {
//
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				let t = arr[j];
// 				arr[j] = arr[j + 1];
// 				arr[j + 1] = t;
// 			}
// 		}
// 	}
// 	return arr;
//
// };


const doubleBubbleSort = (arr) => {
	let low = 0, high = arr.length - 1;
	while (low < high) {

		for (let i = low; i < high; i++) {
			if (arr[i] > arr[i + 1]) {
				let t = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = t;
			}
			high--;
		}

		for (let i = high; i > low; i--) {
			if (arr[i] < arr[i - 1]) {
				let t = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = t;
			}
			low++;
		}
	}


	return arr;
};


const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(doubleBubbleSort(arr));
