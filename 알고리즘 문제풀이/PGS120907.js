//quiz 배열을 인덱스별로 접근 후
//띄어쓰기를 기준으로 나누고 배열로 리턴(split)
//리턴한 배열 = [x, operator, y, =, z]
//x op y = z 계산
//맞으면 answer=[]에 'O', 틀리면 'X' push
//return answer


quiz=["3 - 4 = -3", "5 + 6 = 11"]

function solution(quiz) {
  let answer = []
  quiz.forEach((exp) => {
    let [X, op, Y, eq, Z] = exp.split(' ')
    if(op=='-') Number(X)-Number(Y)==Number(Z) ? answer.push('O') : answer.push('X')
    else if(op=='+') Number(X)+Number(Y)==Number(Z) ? answer.push('O') : answer.push('X')
  })
  return answer
}
console.log(solution(quiz))