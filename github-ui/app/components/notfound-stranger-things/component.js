import Component from '@ember/component';
import $ from "jquery";

export default Component.extend({
    init(){
        this._super(...arguments);
        let fadeInText = function () {
            $(".top-text").fadeIn();
            $(".top-text").css("opacity", 1);
            $(".bottom-text h1").css("opacity", 1);
            $(".bottom-text h1").fadeIn();
        }

        let fadeInParagraph = function () {
            $("p").css("opacity", 1);
        }

        let fillInLines = function () {
            $(".top").css("width", "100%");
            $(".top").css("opacity", 1);
            $(".inline").css("width", "25%");
            $(".inline").css("opacity", 1);
        }

        let shrinkText = function () {
            $('.centered-text-area').css({
                '-webkit-transform': 'scale(1.0,1.0)',
                '-moz-transform': 'scale(1.0,1.0)',
                '-ms-transform': 'scale(1.0,1.0)',
                '-o-transform': 'scale(1.0,1.0)',
                'transform': 'scale(1.0,1.0)'
            });
        }

        window.setTimeout(shrinkText, 100);
        window.setTimeout(fadeInText, 500);
        window.setTimeout(fillInLines, 3000);
        window.setTimeout(fadeInParagraph, 5000);
// fadeInText();
    }
});
