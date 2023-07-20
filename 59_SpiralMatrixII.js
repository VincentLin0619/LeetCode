/**
 * @param {number} n
 * @return {number[][]}
 */

const n = 3;

var generateMatrix = function (n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    let left = 0, top = 0, right = n - 1, bottom = n - 1;

    let val = 1;

    while (left <= right && top <= bottom) {

        for (let i = left; i <= right; i++) {
            result[top][i] = val++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result[i][right] = val++;
        }
        right--;

        for (let i = right; i >= left; i--) {
            result[bottom][i] = val++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            result[i][left] = val++;
        }
        left++;
    }
    return result
};

console.log(generateMatrix(n))