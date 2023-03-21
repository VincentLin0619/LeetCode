/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num >= 10) {
        var sum = 0;

        String(num).split('').map((v) => {
            console.log(v)
            sum += parseInt(v);
        });
        num = sum;
    }
    // console.log(num)
    return num;
};