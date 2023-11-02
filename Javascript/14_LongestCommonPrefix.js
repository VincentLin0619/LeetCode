/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let firstArr = strs[0];
    if (strs == null || strs.length == 0) { return '' }

    for (let i = 1; i < strs.length; i++) {
        let secArr = strs[i]; //從陣列第二個開始比
        let j = 0; // 宣告為區域變數
        for (; j < firstArr.length; j++) {
            // console.log(secArr.charAt(j))
            if (firstArr[j] != secArr[j]) {
                break;
            }
            // console.log(firstArr[j] , secArr[j])
        }
        firstArr = firstArr.slice(0, j)
    }
    // console.log(firstArr)
    return firstArr
};