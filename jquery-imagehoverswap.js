/* jQuery Image Hover Swap 1.0
 * http://www.christiantroller.ch
 *
 * Copyright 2005-2013, Christian Troller <mailto:info@christiantroller.ch>
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Usage: simply add 'data-hoverimg="path-to-image.jpg"' to an img element.
 */
(function (e) {
    e.fn.swapImage = function () {
        var orig = this.attr('src');
        this.attr('src', this.data('hoverimg'));
        this.data('hoverimg', orig);
    };
    e('[data-hoverimg]').hover(function () {
        e(this).swapImage();
    });
})(jQuery);