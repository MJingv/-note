const http = require('http');
const fs = require('fs');


http.createServer(
	(request, response) => {
		const data = fs.readFileSync('./index.html', 'utf8');

		// 发送 HTTP 头部
		// HTTP 状态值: 200 : OK
		// 内容类型: text/plain
		response.writeHead(302, {
			'Content-Type': 'text/html',
			'Set-Cookie': ['name=111;max-age=5', 'key=111;httpOnly'],
			'Location': '/new'

		});
		if (response.url == '/new') {
			response.writeHead(200, {
				'Content-Type': 'text/html',
				'Set-Cookie': ['name=111;max-age=5', 'key=111;httpOnly'],
				'Location': '/new'

			});
		}

		// 发送响应数据 "Hello World"
		response.end(data);
	}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
