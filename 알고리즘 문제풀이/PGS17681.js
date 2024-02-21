function mapArray(n, array) {
  return array.map((x) => {
    if (x.toString(2).length < n) {
      return "0".repeat(n - x.toString(2).length) + x.toString(2);
    } else {
      return x.toString(2);
    }
  });
}

function solution(n, arr1, arr2) {
  const mapArr1 = mapArray(n, arr1);
  const mapArr2 = mapArray(n, arr2);

  let answerMap = new Array(n).fill(null).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mapArr1[i][j] === "0" && mapArr2[i][j] === "0") {
        answerMap[i][j] = " ";
      } else {
        answerMap[i][j] = "#";
      }
    }
  }

  for (let i = 0; i < n; i++) {
    return answerMap.map((row) => row.join(""));
  }
}

n = 5;
arr1 = [9, 20, 28, 18, 11];
arr2 = [30, 1, 21, 17, 28];

console.log(solution(n, arr1, arr2));
