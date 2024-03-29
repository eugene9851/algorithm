//files의 각 요소를 {index, head, number, tail}로 나누기
function parseFileName(file) {
  const matchResult = file.match(/^([a-zA-Z\\s.-]+)(\d{1,5})(.*)$/)

  return {
    HEAD: matchResult[1].toLowerCase(),
    NUMBER: parseInt(matchResult[2], 10),
    TAIL: matchResult[3]
  }
}

function solution(files) {
  const fileObjArray = files.map((file, idx) => ({ ...parseFileName(file), index: idx }))
  //head로 먼저 정렬, 같다면 number로 정렬
  fileObjArray.sort((a, b) => {
    if(a.HEAD > b.HEAD) return 1;
    if(a.HEAD < b.HEAD) return -1;
    if(a.NUMBER > b.NUMBER) return 1;
    if(a.NUMBER < b.NUMBER) return -1;
    return a.index - b.index //원래 순서 유지
  }
  )
  //정렬된 객체들의 index대로 리턴
  return fileObjArray.map((obj) => {
    return files[obj.index]
  })
}

files = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
console.log(solution(files))