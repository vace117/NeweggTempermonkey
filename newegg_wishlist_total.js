// ==UserScript==
// @name         NewEgg Wishlist Total
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://secure.newegg.ca/WishList/MySavedWishDetail.aspx*
// @grant        none
// @require      http://code.jquery.com/jquery-2.2.4.min.js
// ==/UserScript==

(function() {
    'use strict';

    var total = 0;
    var itemList = $("td.totalPrice");
    for( var i=0; i < itemList.length; i++ ) {
        var price = itemList[i].innerText;
        if ( price ) {
            total += parseFloat( price.replace("$","") );
        }
    }

    var listTotal = itemList.length + " items for a total of: $" + total.toFixed(2);
    var newCode = "<p/><div><b>Wish List Total: </b> " + listTotal + "</div>";

    $(newCode).insertAfter("#wishContent");

})();