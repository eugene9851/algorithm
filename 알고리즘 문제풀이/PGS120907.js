//quiz 배열을 인덱스별로 접근 후
//띄어쓰기를 기준으로 나누고 배열로 리턴(split)
//리턴한 배열 = [x, operator, y, =, z]
//x op y = z 계산
//맞으면 answer=[]에 'O', 틀리면 'X' push
//return answer


// function solution(quiz) {
//   let answer = []
//   quiz.forEach((exp) => {
//     let [X, op, Y, eq, Z] = exp.split(' ')
//     if(op=='-') Number(X)-Number(Y)==Number(Z) ? answer.push('O') : answer.push('X')
//     else if(op=='+') Number(X)+Number(Y)==Number(Z) ? answer.push('O') : answer.push('X')
//   })
//   return answer
// }
//리팩토링 1. 변수 이름 설정할 때 어떤 변수를 지칭하는지 명확히 할 수 있는 이름으로 설정하기
//리팩토링 2. 되도록이면 const사용
//리팩토링 3. 되도록이면 일치 연산자 사용
//리팩토링 4. Number형으로 형변환을 해야 한다면, 한 번만 수행하도록.
//리팩토링 5. let answer = [] ... return answer => return quiz.map 메소드 사용하기(map 메소드의 결과 직접 반환)
//리팩토링 6. 삼항연산자는 최대한 단순하게

function solution(quiz) {
  return quiz.map((expression) => {
    const [operand1, operator, operand2, equal, result] = expression.split(' ')

    const numOperand1 = Number(operand1)
    const numOperand2 = Number(operand2)
    const numResult = Number(result)

    if(operator === '-') {
      return numOperand1 - numOperand2 === numResult ? 'O' : 'X'
    } else if(operator === '+'){
      return numOperand1 + numOperand2 === numResult ? 'O' : 'X'
    }
  })
}

quiz=["3 - 4 = -3", "5 + 6 = 11"]
console.log(solution(quiz))