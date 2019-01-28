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


const dfs = (nodes) => {
	//非递归

// 1.初始化一个栈，将根节点压入栈中；
// 2.当栈为非空时，循环执行步骤3到4，否则执行结束；
// 3.出队列取得一个结点，访问该结点；
// 4.若该结点的右子树为非空，则将该结点的右子树入栈，若该结点的左子树为非空，则将该结点的左子树入栈；

	let result = [];
	let stack = [];

	stack.push(nodes);
	while (stack.length) {
		let item = stack.pop();
		result.push(item.node);
		item.right && stack.push(item.right);
		item.left && stack.push(item.left);
	}
	return result;
};
console.log(dfs(nodes));



