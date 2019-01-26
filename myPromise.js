// 定义Promise的三种状态常量
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
const isFunction = fn => typeof (fn) == 'function';

class MyPromise {
	constructor(handle) {
		if (!isFunction(handle)) {
			throw new Error('MyPromise must accept a function as a parameter');
		}
		this._status = PENDING;
		this._value = undefined;

		this._fulfilledQueues = [];	// 添加成功回调函数队列
		this._rejectedQueues = [];	// 添加失败回调函数队列
		try {
			handle(this._resolve(), this._reject());
		} catch (e) {
			this._reject();
		}
	}

	_resolve(val) {
		if (this._status !== PENDING) return;

		this._status = FULFILLED;
		this._value = val;
		console.log(this, 'resolve', val);
	}

	_reject(err) {
		if (this._status !== PENDING) return;
		this._status = REJECTED;
		this._value = err;
		console.log(this, 'reject');
	}

	then(onFulfilled, onRejected) {
		// onFulfilled && onRejected 说明
		// 1.必须是函数
		// 2.onFulfilled 成功时被调用 第一个参数是resolve传入的值
		//   onRejected  失败时被调用 第一个参数是reject传入的值
		// 3.在promise状态改变前不能调用
		// 4.调用次数<=1

		const {_value, _status} = this;

		switch (_status) {
			case PENDING:
				this._fulfilledQueues.push(onFulfilled);
				this._rejectedQueues.push(onRejected);
				break;
			case FULFILLED:
				onFulfilled(_value);
				break;
			case REJECTED:
				onRejected(_value);
		}
		//then可被多次调用，所有onFulfilled/onRejected需按照其注册顺序依次回调


		// then 方法必须返回一个新的 promise 对象
		return new MyPromise((onFulfilledNext, onRejectedNext) => {

		});


	}

}


const p = new MyPromise((res) => {
	console.log(res, 'p-suc=======');
}, (err) => {
	console.log(err, 'p-fail=======');
});



