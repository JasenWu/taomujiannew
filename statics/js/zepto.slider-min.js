/*!
 zepto.slider v1.0.0 http://yanhaijing.com/zepto.slider LICENSE
 */
(function (a) {
    a.fn.slider = function (b) {
        var c = a.extend({
            startIndex: 0,
            time: 3000,
            animationTime: 500,
            direction: "up",
            autoAnimation: true,
            imgWrap: ".js-slider-img-wrap",
            img: "li",
            numWrap: ".js-slider-num-wrap",
            num: "li",
            preventTouch: false,
            circle: false
        }, b);
        return a(this).each(function () {
            var n = a(this), l = a(c.imgWrap, n), j = a(c.img, l), f = a(c.numWrap, n), o = a(c.num, f), m = j.length, e = 320, r = 180, d = c.startIndex, q;

            function p(u) {
                return (u + m) % m;
            }

            function i() {
                var u = c.direction;
                e = n.width();
                j.width(e);
                r = j.height();
                n.height(r);
                if (u === "up" || u === "down") {
                    l.width(e).height(r * m);
                } else {
                    if (u === "left" || u === "right") {
                        l.width(e * m).height(r);
                    }
                }
            }

            function h() {
                window.clearTimeout(q);
            }

            function g(u, w) {
                var v = c.direction, x;
                u = p(u || 0);
                d = u;
                w = w || c.animationTime;
                o.removeClass("js-slider-num-cur").eq(u).addClass("js-slider-num-cur");
                if (v === "up" || v === "down") {
                    x = -(r * u) + "px";
                    l.css({"-webkit-transform": "translateY(" + x + ")", "-webkit-transition": w + "ms linear"});
                } else {
                    if (v === "left" || v === "right") {
                        x = -(e * u) + "px";
                        l.css({"-webkit-transform": "translateX(" + x + ")", "-webkit-transition": w + "ms linear"});
                    }
                }
            }

            function t() {
                var u = c.direction;
                n.swipeLeft(function (v) {
                    if (!c.circle && (d + 1) >= m) {
                        return 0;
                    }
                    g(d + 1);
                    h();
                    return 1;
                });
                n.swipeRight(function (v) {
                    if (!c.circle && (d - 1) < 0) {
                        return 0;
                    }
                    g(d - 1);
                    h();
                    return 1;
                });
                if (c.preventTouch) {
                    n.on("touchstart", function (v) {
                        v.preventDefault();
                    });
                    n.on("touchmove", function (v) {
                        v.preventDefault();
                    });
                }
                a(window).on("load", function (v) {
                    i();
                });
                a(window).on("resize", function (v) {
                    i();
                });
            }

            function k() {
                function u() {
                    var v = c.direction;
                    if (v === "up") {
                        g(d + 1);
                    } else {
                        if (v === "down") {
                            g(d - 1);
                        } else {
                            if (v === "left") {
                                g(d + 1);
                            } else {
                                g(d - 1);
                            }
                        }
                    }
                    q = window.setTimeout(u, c.time + c.animationTime);
                }

                if (c.autoAnimation) {
                    u();
                }
            }

            function s() {
                var u = c.direction;
                if (u === "up" || u === "down") {
                    n.addClass("js-slider js-slider-v");
                } else {
                    if (u === "left" || u === "right") {
                        n.addClass("js-slider js-slider-h");
                        j.addClass("js-slider-img");
                    }
                }
                l.addClass("js-slider-img-wrap");
                f.addClass("js-slider-num-wrap");
                o.addClass("js-slider-num");
                i();
                g(d);
                t();
                k();
            }

            s();
        });
    };
}(Zepto));