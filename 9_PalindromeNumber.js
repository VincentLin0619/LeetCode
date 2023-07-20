/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    let arr = x.toString().split('');
    let len = arr.length;
    if (len == 1) return true;

    for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - i - 1]) {
            return false
        }
    };
    return true
};