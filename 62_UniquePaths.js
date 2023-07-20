var uniquePaths = function (m, n) {
  //   let roadMap = new Array(m).fill(0).map(() => new Array(n).fill(0));
  //   console.log(roadMap);
  //   for (let i = 0; i < m; i++) {
  //     roadMap[i][0] = 1;
  //   }
  //   for (let j = 0; j < n; j++) {
  //     roadMap[0][j] = 1;
  //   }
  //   for (let i = 1; i < m; i++) {
  //     for (let j = 1; j < n; j++) {
  //       roadMap[i][j] = roadMap[i - 1][j] + roadMap[i][j - 1];
  //       console.log(roadMap[i][j]);
  //     }
  //   }
  let roadMap = Array.from(Array(m), () => new Array(n));
  console.log(roadMap);
  for (let i = 0; i < m; i++) roadMap[i][0] = 1;
  for (let j = 0; j < n; j++) roadMap[0][j] = 1;

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      roadMap[i][j] = roadMap[i - 1][j] + roadMap[i][j - 1];
    }
  }
  console.log(roadMap[m - 1][n - 1]);
  // return roadMap[m][n];
};

uniquePaths(3, 7);
