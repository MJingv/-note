var nodes = {
	node: 6,
	left: {
		node: 5,
		left: {
			node: 4
		},
		right: {
			node: 3
		}
	},
	right: {
		node: 2,
		right: {
			node: 1
		}
	}
};
//
// let result = [];
// //先序dfs
// const dfs = (nodes) => {
// 	if (nodes.node) {
// 		result.push(nodes.node);
// 		nodes.left && dfs(nodes.left);
// 		nodes.right && dfs(nodes.right);
// 	}
// };

// dfs(nodes);
// console.log(result);
//
//
// const dfs = (nodes) => {
// 	//非递归
//
// // 1.初始化一个栈，将根节点压入栈中；
// // 2.当栈为非空时，循环执行步骤3到4，否则执行结束；
// // 3.出队列取得一个结点，访问该结点；
// // 4.若该结点的右子树为非空，则将该结点的右子树入栈，若该结点的左子树为非空，则将该结点的左子树入栈；
//
// 	let result = [];
// 	let stack = [];
//
// 	stack.push(nodes);
// 	while (stack.length) {
// 		let item = stack.pop();
// 		result.push(item.node);
// 		item.right && stack.push(item.right);
// 		item.left && stack.push(item.left);
// 	}
// 	return result;
// };
// console.log(dfs(nodes));

// let result = [];
// let queue = [nodes];
//
// const bfs = (count) => {
// 	count = count || 0;
//
// 	if (queue[count]) {
// 		result.push(queue[count].node);
// 		let left = queue[count].left;
// 		let right = queue[count].right;
//
// 		left && queue.push(left);
// 		right && queue.push(right);
//
// 		bfs(++count);
// 	}
//
// };
// bfs();
// console.log(result);

// let result = [];
// let queue = [nodes];
// const bfs = (count = 0) => {
// 	if (queue[count]) {
// 		result.push(queue[count].node);
// 		let left = queue[count].left;
// 		let right = queue[count].right;
//
// 		left && queue.push(left);
// 		right && queue.push(right);
//
// 		bfs(++count);
// 	}
//
// };
// bfs();
// console.log(result);


// const bfs = () => {
// 	let result = [];
//
// 	let queue = [nodes];
// 	while (queue.length) {
// 		let item = queue.shift();
// 		result.push(item.node);
// 		item.left && queue.push(item.left);
// 		item.right && queue.push(item.right);
// 	}
// 	return result;
//
//
// };


// console.log(bfs());


//搜索树
class BinarySearchTree {
	constructor() {
		this.root = null;
		// this.length = 0;
		// this.arr = [];
	}

	Node(key) {
		let left = null;
		let right = null;
		return {
			key, left, right
		};

	}


	insert(key) {
		let newNode = this.Node(key);
		if (this.root == null) {

			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}

	}

	insertNode(node, newNode) {
		if (node.key > newNode.key) {
			//左边
			if (node.left) {
				this.insertNode(node.left, newNode);
			} else {
				node.left = newNode;
			}
		} else {
			if (node.right) {
				this.insertNode(node.right, newNode);
			} else {
				node.right = newNode;
			}
		}

	}

	findMin(node = this.root) {
		if (node && node.left) {
			this.findMin(node.left);
		} else if (node.left == null) {
			console.log('min---', node.key);
		}
	}

	search(key, node = this.root) {
		let newNode = this.Node(key);
		this.searchNode(newNode, node);
	}

	searchNode(newNode, node) {
		if (node == null) {
			console.log('没 有-----');
			return false;
		}
		if (newNode.key < node.key) {
			this.searchNode(newNode, node.left);

		} else if (newNode.key > node.key) {
			this.searchNode(newNode, node.right);

		} else {
			console.log('有-----');
			return true;
		}
	}


	reverseNode(node = this.root) {
		if (node == null) {
			return;
		}

		this.reverseNode(node.left);
		this.reverseNode(node.right);
		this.exchange(node);
		console.log();

	}

	exchange(node) {
		let t = node.left;
		node.left = node.right;
		node.right = t;
	}


}


let m = new BinarySearchTree();
m.insert(5);
m.insert(4);
m.insert(3);
m.insert(6);

m.insert(7);
m.insert(8);
m.insert(2);
// console.log(m);
// console.log(m.reverseNode());


const add = a => {
	let sum = a;

	function f(b) {
		sum += b;
		return f;

	}

	f.toString = function () {
		return sum;
	};

	return f;
};


console.log(add(2)(3)(4));






