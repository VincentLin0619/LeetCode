/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var spiralOrder = function (matrix) {
    let result = [];
    let left = 0;
    let top = 0;

    let right = matrix[0].length - 1; //最右邊的邊界
    let bottom = matrix.length - 1;  //最下面的邊界

    let moveWay = 'right'; //往右開始

    while (left <= right && top <= bottom) {
        if (moveWay === 'right') {
            // 3times do push matrix[0][0..2] to result 
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
                // 0 1, 0 2, 0 3
            }
            top += 1; //top 0變為1 從 [1][i]開始往down走
            moveWay = 'down';
        }
        else if (moveWay === 'down') {
            // top此時 = 1 最上面-1格開始往下走
            for (let i = top; i <= bottom; i++) {
                // push matrix[1..2][2] to result 
                result.push(matrix[i][right])
            }
            right -= 1; //right 2變為1
            moveWay = "left";
        }
        else if (moveWay === 'left') {
            // 此時right = 1 邊界-1格開始往左
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
                //[2][1], [2][0]
            }
            bottom -= 1;
            moveWay = 'up';
        }
        else if (moveWay === 'up') {
            // 此時bottom = 1 從最下邊界-1格開始往上
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
                //[1][0]
            }
            left += 1;
            moveWay = 'right';
        }
    }
    return result
};

spiralOrder(arr);