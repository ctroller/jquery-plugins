/* jQuery Image Hover Swap 1.0
 * http://www.christiantroller.ch
 *
 * Copyright 2005-2013, Christian Troller <mailto:info@christiantroller.ch>
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 *  Usage:
 *      $.preload(['image.jpg', 'image2.jpg']);
 */
jQuery.preload = function (list) {
    jQuery(list).each(function () {
        jQuery('<img />')[0].src = this;
    });
};