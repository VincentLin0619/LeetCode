/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let arr = s.split(' ')
    // if(arr.length == k){
    //     return
    // }
    arr.length == k ? arr : arr.splice(k, arr.length);
    // arr.splice(k, arr.length)
    return arr.join(' ');
};