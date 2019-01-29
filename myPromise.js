// // 定义Promise的三种状态常量
// const PENDING = 'PENDING';
// const FULFILLED = 'FULFILLED';
// const REJECTED = 'REJECTED';
// const isFunction = fn => typeof (fn) == 'function';
//
// class MyPromise {
// 	constructor(handle) {
// 		if (!isFunction(handle)) {
// 			throw new Error('MyPromise must accept a function as a parameter');
// 		}
// 		this._status = PENDING;
// 		this._value = undefined;
//
// 		this._fulfilledQueues = [];	// 添加成功回调函数队列
// 		this._rejectedQueues = [];	// 添加失败回调函数队列
// 		try {
// 			handle(this._resolve(), this._reject());
// 		} catch (e) {
// 			this._reject();
// 		}
// 	}
//
// 	_resolve(val) {
// 		if (this._status !== PENDING) return;
//
// 		this._status = FULFILLED;
// 		this._value = val;
// 		let cb;
// 		while (cb = this._fulfilledQueues.shift()) {
// 			cb();
// 		}
//
//
// 		// console.log(this, 'resolve', val);
// 	}
//
// 	_reject(err) {
// 		if (this._status !== PENDING) return;
// 		this._status = REJECTED;
// 		this._value = err;
// 		let cb;
// 		while (cb = this._rejectedQueues.shift()) {
// 			cb();
// 		}
// 		// console.log(this, 'reject');
// 	}
//
// 	then(onFulfilled, onRejected) {
// 		//then可被多次调用，所有onFulfilled/onRejected需按照其注册顺序依次回调
//
// 		/**
// 		 * onFulfilled && onRejected 说明
// 		 *1.必须是函数
// 		 *2.onFulfilled 成功时被调用 第一个参数是resolve传入的值
// 		 onRejected  失败时被调用 第一个参数是reject传入的值
// 		 *3.在promise状态改变前不能调用
// 		 *4.调用次数<=1
// 		 */
//
// 		const {_value, _status} = this;
//
// 		// then 方法必须返回一个新的 promise 对象
// 		return new MyPromise((onFulfilledNext, onRejectedNext) => {
// 			let fulfilled = value => {
// 				if (!isFunction(onFulfilledNext)) onFulfilledNext(value);
// 				else {
// 					let res = onFulfilled(value);
//
// 				}
//
//
// 			};
//
//
// 		});
//
//
// 		switch (_status) {
// 			// 当状态为pending时，将then方法回调函数加入执行队列等待执行
// 			case PENDING:
// 				this._fulfilledQueues.push(fulfilled);
// 				this._rejectedQueues.push(rejected);
// 				break;
// 			case FULFILLED:
// 				fulfilled(_value);
// 				break;
// 			case REJECTED:
// 				rejected(_value);
// 		}
//
// 	}
//
// )
// 	;
//
//
// }
//
// }
//
//
// const p = new MyPromise((res) => {
// 	console.log('p-suc=======');
// }, (err) => {
// 	console.log('p-fail=======');
// });
//
// p.then((val) => {
// 	console.log(val, 'then-----11111');
// }).then((val) => {
// 	console.log(val, 'then-----2222');
// });
//
//
//
//
//
//
//
//
//





































