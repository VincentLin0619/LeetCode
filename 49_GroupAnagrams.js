/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

var groupAnagrams = function (strs) {
  let map = new Map();
  for (let s of strs) {
    let code = encode(s);
    if (!map.has(code)) {
      map.set(code, []);
    }
    map.get(code).push(s);
    console.log(map.values());
  }
  let result = [];
  for (let group of map.values()) {
    result.push(group);
  }

  console.log(result);
};

function encode(s) {
  let count = new Array(26).fill(0);
  for (let c of s) {
    let matchC = c.charCodeAt() - 'a'.charCodeAt();
    count[matchC]++;
  }
  //   console.log(count.toString());
  return count.toString();
}

groupAnagrams(strs);
