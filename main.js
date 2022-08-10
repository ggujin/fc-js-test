/* 함수 복습 */

/* 기명함수 - 선언 방법 function키워드와 함수의 이름.
function sum(x, y) { // 매개변수
  console.log(x)
  // if (x < 2) { // 활용 가능
  //   return // 키워드 없이 작성시 그냥 종료.  
  // }
  return x + y
  console.log(x) // return으로 함수가 종료되면 키워드 뒤의 내용은 실행되지 않음.
}
*/
/* 익명함수 - 함수 표현
const sum = function (x, y) {
  return x + y
}*/
/*
// arguments 객체 사용
// 매개변수를 지정하지 않아도 arguments 객체를 사용할 수 있게 되어있음.
// 인수가 너무 많아 매개변수를 일일히 지정하기 힘들때 활용.
// 자주 사용되는 함수는 아님.
function sum() {
  console.log(arguments)
  return arguments[0] + arguments[1]
}

console.log(sum(7, 3))
*/

/*
const a = sum(1, 3) // 인수
const b = sum(4, 12)

// 변수에 함수 실행의 내용을 담아서 사용하면 함수는 한번만 사용되며, 그 결과의 값만 가져와서 재활용 할 수 있는 구조
// 함수의 결과가 반복적으로 사용될 때 좋은 방법.
// console.log(a)
// console.log(b)
console.log(a + b)

// 값은 같지만 함수가 한번 더 동작하기 때문에 여러번 실행하는 것이 효율적이지 않음.
// 단일로만 사용되어 변수에 담지 않아도 될 때 사용하는 방법.
// 함수의 결과가 단일로 사용될 때 결과가 사용되는 곳에서 호출한다.
console.log(sum(1,3))
console.log(sum(4,12))
// console.log(sum(1, 3) + sum(4, 12))
*/



/* 화살표 함수

// 화살표 함수
// () => {} vs function () {}

const double = function (x) { // 익명의 함수를 할당해서 '함수 표현' 작성
  return x * 2
}
console.log('double: ', double(7))

// const doubleArrow = (x) => {
//   // console.log(123) // 이 문장이 있다면 축약형을 사용할 수 없음.
//   return x * 2 // 리턴 키워드와 단순 실행문이 있기 때문에 축약형 사용 가능.
// }
// const doubleArrow = (x) => x * 2 // 1. return 제거 축약형 사용
// const doubleArrow = x => x * 2 // 2. 인자가 1개라면 ()제거 축약형 사용하여 실행문 반환, 문자숫자불린등 데이터들 출력가능
// 3. 객체 데이터 축약형으로 반환하는 방법 ()로 감싸주어야함.
const doubleArrow = x => ({name: 'Hi'})
console.log('doubleArrow', doubleArrow(7))
*/



/* IIFE

// 즉시실행함수
// IIFE, Immediately-Invoked Function Expreesion

const a = 7
function double() {
  console.log(a * 2)
}
double(); // 즉시 실행 함수가 실행되는 부분과 더블이 실행되는 부분을 명확하게 구분하지 못함. ; 붙여야함.
// 한번 실행되고 더이상 쓰지 않는다면..
(function () { // 익명 함수 
  console.log(a * 2)
})(); // ()(): 즉시 실행 함수 

(function () { // 익명 함수 
  console.log(a * 2)
}()); // (()) : ()를 ( )에 넣어서 사용 가능.
*/



/* 호이스팅

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

// double() // TypeError: double is not a function
// const double = function () { // 익명함수 표현(선언이 아니기 때문에 호이스팅 불가능.)
//   console.log(a * 2)
// }
// double()

// 함수 이름만 보고도 추측할 수 있기 때문에, 
// 호출은 위에서, 로직은 아래서 확인.
double() // 에러없음. 호이스팅 발생.

function double() {
  console.log(a * 2)
}
*/



/* 타이머 함수 

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행 (ms)
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// setTimeout(function () { 축약
const timer = setTimeout(() => {
  console.log('Hi')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})

const timerIn = setInterval(() => {
  console.log('HiInterval')
}, 3000)

const h1ElI = document.querySelector('h1')
h1ElI.addEventListener('click', () => {
  clearInterval(timerIn)
})
*/



/* 콜백

// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

// Hi보다 Done!이 먼저 출력됨..
// function timeout() {
//   setTimeout(() => {
//     console.log('Hi')
//   }, 3000)
// }
// timeout()
// console.log('Done!')

function timeout(callback) {
  setTimeout(() => {
    console.log('Hi')
    callback() // 특정한 실행 위치를 보장하기 위해 활용
  }, 3000)
}
timeout(() => { // 콜백함수, 인수로사용
  console.log('Done!')
})
*/