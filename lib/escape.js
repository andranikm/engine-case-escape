/**
 * Escaped.
 *
 *      \{escaped.variable}
 *
 * @param  {String} str
 * @param  {Array} rest
 * @return {String}
 * @api private
 */

module.exports = function (str, escape) {
    if (!escape)
        return void 0;

    return str.replace('\\\\', '');
};


/**
 * Fix for initial offset.
 */

module.exports.offset = 0;
module.exports.limit  = 1;
