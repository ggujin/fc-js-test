// import random from './getRandom'
// import getType from './getType'

console.log('jsStart')

/* 데이터 타입 확인

console.log(typeof 'Hello world!')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])

// function getType(data) {
//   return Object.prototype.toString.call(data).slice(8, -1)
// }

console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))

*/



/* 산술, 할당 연산자

// 산술 연산자(arithmetic operator)

console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)

// 할당 연산자(assignment operator)

const a = 2
console.log(a)

let b = 3
console.log('b = 3 ? ' + b)
// b = b + 1
b += 1
console.log('b = 3 + 1 재할당? ' + b)

*/



/* 비교, 논리 연산자

// 비교 연산자(comparison operator)

const a = 1
const b = 3

console.log(a === b) // 일치 연산자, 왼쪽, 오른쪽 데이터 비교하여 일치하는지 확인

function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))

console.log(a !== b) // 불일치 연산자
console.log(a < b)
console.log(a > b)
console.log(a >= b)
console.log(a <= b)


// 논리연산자(logical operator)
const a = 1 === 1
const b = 'AB' === 'AB'
const c = true

console.log(a)
console.log(b)
console.log(c)

console.log('&&: ', a && b && c) // && : 그리고 And 연산자
console.log('||: ', a || b || c) // || : 또는 Or 연산자
console.log('!: ', !a) // 부정 Not 연산자
*/



/* 삼항 연산자 

// 삼항 연산자(ternary operator)

const a = 1 < 2

if (a) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참':'거짓')
*/



/* 조건문 If Else, switch 
import random from './getRandom'

// 조건문 (If statement)

// console.log(random())
const a = random()

// if (a === 0) {
//   console.log('a is 0')
// } else if (a ===2) {
//   console.log('a is 2')
// } else if (a ===4) {
//   console.log('a is 4')
// } else {
//   console.log('rest...')
// }

// 조건문 (Switch statement) : 하나의 특정한 데이터가 무엇인가로 딱 떨어지는 조건문이라면 더 효율적.
switch (a) {
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break
  default: 
    console.log('rest...')
}
*/



/* 반복문 For 

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

console.log(ulEl)

for (let i = 0; i < 10; i += 1) {
  // console.log(i)
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if ((i + 1) % 2 === 0) { // i 가 짝수인 경우에만 출력, 제로베이스를 조심
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li) // html에 존재하지 않지만 ul의 자식요소로 삽입해줌.
}
*/



/* 변수 유효범위

// 변수 유효범위(Variable Scope)
// var(x), let, const

function scope() {
  // console.log(a) // undefined, a의 할당되지 않은 범위
  if (true) {
    console.log(a) // undefined, 유효하는 범위에 존재하지만 값이 할당되기 전이기 때문.
    const a = 123
    console.log(a) // 123
  }
  // console.log(a) // a의 유효하지 않은 범위
}

function scope() {
  console.log(a) // undefined, a의 할당되지 않은 범위
  if (true) {
    console.log(a) // undefined, 유효하는 범위에 존재하지만 값이 할당되기 전이기 때문.
    var a = 123
    console.log(a) // 123
  }
  console.log(a) // 123
}

scope()
*/



/* 형 변환 

//형(자료형, 데이터 타입) 변환(Type conversion)

동등 연산자, 일치 연산자
const a = 1
const b = '1'

console.log(a == b) // 동등 연산자, 형 변환이 일어나며 데이터를 비교하게 됨. 권장하지않음.
console.log(a === b) // 일치 연산자

//

// Truthy(참 같은 값) - 엄청많음..
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값) - 7가지
// false, '', null, undefined, 0, -0, NaN(Not a Number, 숫자 데이터)

if (-0) {
  console.log(123)
}
*/