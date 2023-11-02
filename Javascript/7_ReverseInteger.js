/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const maxBit = 2 ** 31 - 1;
    const minBit = -(2 ** 31);
    let arr = x.toString().split('').reverse().join('');
    if (parseInt(arr) <= minBit || parseInt(arr) >= maxBit) { return 0 };
    if (x < 0) {
        arr = parseInt(arr) * -1;
    } else if (x = 0 || x.length < 1) {
        return '';
    } else {
        arr
    }

    return arr
};