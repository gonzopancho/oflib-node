/*
 * Author: Zoltán Lajos Kis <zoltan.lajos.kis@ericsson.com>
 */

"use strict";

module.exports.bin = [
        0x00, 0x08,        // type = 8
        0x00, 0x08,        // length = 8
        0x02,              // nw_ecn = 2
        0x00, 0x00, 0x00   // padding
    ];

module.exports.obj = {
        header : {type : 'OFPAT_SET_NW_ECN'},
        body : {nw_ecn : 2}
    };

