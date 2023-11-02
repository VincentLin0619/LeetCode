/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  // 邊界
  const MAX_INT = Math.pow(2, 31) - 1;
  const MIN_INT = -Math.pow(2, 31);
  if (divisor === 0) {
    return MAX_INT;
  }
  if (dividend === 0) {
    return 0;
  }
  if (dividend === MIN_INT && divisor === -1) {
    return MAX_INT;
  }

  // 正負數
  const isNegative = dividend < 0 !== divisor < 0;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let result = 0;

  while (dividend >= divisor) {
    let temp = divisor; //臨時除數
    let multiple = 1;

    //當臨時除數左移後(temp * (2**1))小於被除數
    while (dividend >= temp << 1 && temp << 1 > 0) {
      //臨時除數*2,被除的次數也*2
      temp <<= 1;
      multiple <<= 1;
    }

    dividend -= temp; //被除數減去臨時除數即完成一次除法運算
    result += multiple;
  }
  // console.log(result, dividend);
  return isNegative ? -result : result;
};

divide(8, 2);
