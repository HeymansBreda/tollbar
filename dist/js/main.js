requirejs.config({
	paths: {
		jquery: 'jquery'
	}
});

requirejs(['jquery','vaildate'], function(jquery, vaildate){
	// var $ = window.jquery;
	console.log(vaildate.isEqual(1,2));
})