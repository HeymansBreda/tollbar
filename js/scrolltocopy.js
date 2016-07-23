define(['jquery'],function () {
    function Scrollto(opts) {
        this.opts = $.extend({},Scrollto.DEFAULTS,opts);
        this.$el = $('html,body');
    }

    Scrollto.prototype.move = function () {
        this.$el.animate({
            scrollTop: this.opts.dest
        },this.opts.speed)
    };
    Scrollto.prototype.go = function () {
        this.$el.scrollTop(this.opts.dest);
    };

    Scrollto.DEFAULTS = {
        dest: 0,
        speed: 800
    };

    return {
        scrollto: ScrollTo
    }

});