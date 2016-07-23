requirejs.config({
	paths: {
		jquery: 'jquery-1.8.0'
	}
});

requirejs(['jquery','backtop'], function($, BackTop){
    new BackTop.BackTop($('#backTop'),{
        mode: 'move',
    })
});