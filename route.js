class Router {
	constructor() {
		this.routes = {};
		this.currentUrl = '';
	}

	route(path, callback) {
		this.routes[path] = callback || function () {
		};
	}

	updateView() {
		this.currentUrl = location.hash.slice(1) || '/';
		this.routes[this.currentUrl] && this.routes[this.currentUrl]();
	}

	init() {
		window.addEventListener('load', this.updateView.bind(this), false);
		window.addEventListener('hashchange', this.updateView.bind(this), false);
	}
}


const router = new Router();
router.init();
router.route('/', function () {
	document.getElementById('content').innerHTML = 'Home';
});
router.route('/about', function () {
	document.getElementById('content').innerHTML = 'About';
});
router.route('/topics', function () {
	document.getElementById('content').innerHTML = 'Topics';
});
