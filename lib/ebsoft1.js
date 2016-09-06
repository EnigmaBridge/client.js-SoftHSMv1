/*!
 * EnigmaBridge SoftHSMv1 utilities.
 * @author Dusan Klinec (ph4r05)
 * @license MIT.
 */

/*jshint globalstrict: true*/
/*jshint node: true */
'use strict';

var eb = require('ebclient.js');

// CODE goes here.



if(typeof exports !== 'undefined'){
    exports = module.exports = ebsoft1;
}
if (typeof define === "function") {
    /*globals define:false */
    define([], function () {
        return ebsoft1;
    });
}
