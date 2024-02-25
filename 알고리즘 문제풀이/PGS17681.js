// function mapArray(n, array) {
//   return array.map((x) => {
//     if (x.toString(2).length < n) {
//       return "0".repeat(n - x.toString(2).length) + x.toString(2);
//     } else {
//       return x.toString(2);
//     }
//   });
// }

//리팩토링1: padStart함수를 사용하여 함수 간결하게 표현하기
//         padStart(자릿수, 채울 string)
//리팩토링2: 정규식과 replace메서드 사용

function solution(n, arr1, arr2) {
  return arr1.map((val, idx) => {
    //두 배열 중 하나라도 1인 경우 판별
    const mapRow = (val | arr2[idx]).toString(2).padStart(n, "0");
    return mapRow.replace(/1|0/g, (m) => (m === "1" ? "#" : " "));
  });
  // let answerMap = new Array(n).fill(null).map(() => new Array(n).fill(0));

  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (mapArr1[i][j] === "0" && mapArr2[i][j] === "0") {
  //       answerMap[i][j] = " ";
  //     } else {
  //       answerMap[i][j] = "#";
  //     }
  //   }
  // }

  // for (let i = 0; i < n; i++) {
  //   return answerMap.map((row) => row.join(""));
  // }
}

n = 5;
arr1 = [9, 20, 28, 18, 11];
arr2 = [30, 1, 21, 17, 28];

console.log(solution(n, arr1, arr2));
