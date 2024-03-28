//files의 각 요소를 {index, head, number, tail}로 나누기
function getFileObj(files) {
  const exp = /\d/
  return files.map((file, idx) => {
    const fileArray = file.split('')
    let fileObj = { index: idx }
    for(let i = 0; i < fileArray.length; i++) {
      if(exp.test(+fileArray[i])) {
        fileObj.HEAD = fileArray.splice(0, i).join('').toLowerCase()
        break
      }
    }
    for(let i = 0; i < fileArray.length; i++) {
      if(!exp.test(+fileArray[i])) {
        fileObj.NUMBER = Number(fileArray.splice(0, i).join(''))
        break
      }
    }
    fileObj.TAIL = fileArray.join('')
    return fileObj
  })
}
function solution(files) {
  const fileObj = getFileObj(files)
  //head로 먼저 정렬, 같다면 number로 정렬
  const sortedFileObj = fileObj.sort((a, b) => {
    if(a.HEAD > b.HEAD) return 1;
    if(a.HEAD < b.HEAD) return -1;
    if(a.HEAD = b.HEAD) {
      if(a.NUMBER > b.NUMBER) return 1;
      if(a.NUMBER < b.NUMBER) return -1;
      return 0
    }
  })
  //정렬된 객체들의 index대로 리턴
  return sortedFileObj.map((obj) => {
    return files[obj.index]
  })
}

files = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
console.log(solution(files))