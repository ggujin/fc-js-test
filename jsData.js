// JS 데이터

// String: "", '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}

/* 문자 

const result = 'Hello world!'.indexOf('world')
console.log(result) // 6
const result2 = 'Hello world!'.indexOf('Heropy')
console.log(result2) // -1 일치하는 값이 없음.
// String.prototype.indexOf() 스트링 객체애 프로토타입으로 지정된 메소드는 언제어디서나 문자 데이터에 뒤에붙여 활용 가능.

// const str = '0123'
// console.log(str.length)
// console.log('0123'.length) // 랭스는 String객체의 프로토타입으로 사용할 수 있도록 만들어져 있음. 바로붙이기 가능

const str = 'Hello world!'
console.log(str.indexOf('Heropy') !== -1) // 부정일치선택자를 통해 boolean데이터로 확인가능.
console.log(str.slice(0, 3)) // 0번 ~ 3번 직전까지 추출하여 반환 
console.log(str.slice(6, 11)) // world 추출하려면.
console.log(str.replace('world', 'HEROPY')) // 1인수 찾아서 2인수 내용으로 교체 
console.log(str.replace(' world!', '')) // ' world!' 제거

const str2 = 'thesecon@gmail.com'
console.log(str2.match(/.+(?=@)/)[0]) // 이메일에 아이디만 추출, 정규표현식(RegExp)사용

const str3 = '    Hello world  '
console.log(str3.trim()) // 앞뒤 공백 제거 
*/



/* 숫자와 수학 
//숫자와 관련된 API, 즉 자바스크립트의 명령들 살펴보기

const pi = 3.14159265358979
console.log(pi)

const str = pi.toFixed(2) // 인수로 소수점 몇번째 자리까지 유지할것인지. toFixed는 string 반환.
console.log(str) // 3.14
console.log(typeof str) // 타입 확인해봤더니 string.

// 문자데이터를 숫자데이터로. 전역함수 네가지 중 숫자관련 두가지.
const integer = parseInt(str) // 3 //인수로 숫자가 들어가있는 문자데이터 넣음 -> 정수 추출
const float = parseFloat(str) // 3.14 // 소수점 자리를 유지하며 문자데이터를 숫자데이터로 변환.
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)

// Math
console.log('abs:', Math.abs(-12)) // 12 // 숫자의 절대값 반환

console.log('min:', Math.min(2,8)) // 2 // 인수로 들어온 숫자데이터들 중 가장 작은 값 반환

console.log('max:', Math.max(2, 8)) // 8 // 인수로 들어온 숫자데이터들 중 가장 큰 값 반환

console.log('ceil:', Math.ceil(3.14)) // 4 // 올림처리, 기본단위: 정수 

console.log('floor:', Math.floor(3.14)) // 3 // 내림처리, 기본단위: 정수

console.log('round:', Math.round(3.14)) // 3 // 반올림, 기본단위 :정수 // 3.5 -> 4

console.log('random:', Math.random()) // 0.06868616174987663 // 랜덤한 숫자, 난수 반환
*/



/* 배열 

//배열 API - Zero-Based
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers[1])
console.log(fruits[2]) // Cherry // []에 숫자를 넣어 배열데이터를 조회하는 것을 indexing

// .length : 배열데이터가 가지고 있는 item의 개수를 반환. (배열의 길이가 얼마냐.)
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers.length) // 4
console.log(fruits.length) // 3
console.log([1, 2].length) // 2

console.log([].length) // 0 // 빈배열

// .concat() : 두개의 배열데이터를 병합하여 새로운 배열데이터를 반환하는 메소드.
//             원본의 데이터는 손상되지 않음. 원본 배열 영향X.중요.
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers.concat(fruits)) //  병합
console.log(numbers) // 원본 손상X
console.log(fruits) // 원본 손상X

// .forEach() : 메소드가 붙어있는 배열 데이터의 item 갯수만큼 인수로 사용된 콜백 함수가 반복적으로 실행. 0부터
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

fruits.forEach(function (element, index, array) { // array=>fruits를 지칭하기 때문에 이 매개변수는 잘 안씀. // 콜백 (익명
  console.log(element, index, array) // element=item, fruit 등 으로바꾸기가능 매개변수 이름은 자유롭게.
})
fruits.forEach(function (fruit, i) {
  console.log(fruit, i)
})

// .map() : 메소드가 붙어있는 배열 데이터의 item 갯수만큼 콜백 함수가 반복 실행하여
//          return키워드로 콜백함수 밖으로 반환된 특정한 데이터 모음을 새로운 배열을 메소드가 실행된 자리에서 반환.
//          화살표 함수 사용.
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.forEach(function (fruit, index) {
const a = fruits.forEach((fruit, index) => { // 화살표 함수 사용
  console.log(`${fruit}-${index}`)
})
console.log(a) // forEach 실행되고 반환되는 값이 없기 때문에 undefined

// const b = fruits.map(function (fruit, index) {
  // return `${fruit}-${index}` // 반환. forEach와의 차이점
//   return {
//     id: index,
//     name: fruit
//   } // {}로 객체 리터럴 방식 작성
// })
const b = fruits.map((fruit, index) => ({ // 화살표 함수 사용
  id: index,
  name: fruit
}))
console.log(b) //새로운 배열 반환
*/



/* 배열(2)

// .filter()
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.map(number => {
//   return number < 3
// })
// const b = numbers.filter(number => {
//   return number < 3
// })
const a = numbers.map(number => number < 3)
console.log(a)
const b = numbers.filter(number => number < 3)
console.log(b)

console.log(numbers)

// .find() .findIndex()
// 특정한 아이템을 찾아서 확인 => 번호를 통해 아이템을 삭제하거나, 앞뒤로 새로운 아이템 생성 가능.
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = fruits.find(fruit => { // 콜백, fruits 배열데이터에서 반복적으로 실행될 때 하나씩 들어오는 데이터를 받아줄 매개변수 fruit
  return /^B/.test(fruit)
  // 정규표현식, B로 시작하는 문자데이터, test(), Boolean 데이터 반환, 
  // 찾은 item, 첫번째 true 값의 item 값을 find()에서 a로 반환하고 종료.
})
console.log(a) // Banana

const b = fruits.findIndex(fruit => { // findIndex()는 찾은 item의 index번호를 반환.
  return /^B/.test(fruit)
})
console.log(b) // 1, zero-based
//코드 간소화
const a = fruits.find(fruit => /^B/.test(fruit))
const b = fruits.findIndex(fruit => /^B/.test(fruit))

// .includes()
// 인수: 숫자데이터, 문자데이터. 반환값 : boolean
// 배열 데이터 부분의 인수로 사용된 특정한 데이터가 포함이 되어있는지 확인해주는 메소드.
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.includes(3) 
console.log(a) // 3있으니까 true

const b = fruits.includes('HEROPY')
console.log(b) // 없으니까 false

// .push() .unshift()
// 배열데이터의 원본이 수정됨 주의@@@@@@@@@
// push(): 맨뒤에 데이터 삽입.
// unshift(): 맨앞에 데이터 삽입.
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.push(5)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)

// .reverse()
// 배열데이터의 원본이 수정됨 주의@@@@@@@@@
// 배열데이터를 거꾸로 뒤집어줌
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)

// .splice()
// 배열데이터의 원본이 수정됨 주의@@@@@@@@@
// (index, 몇개를 지울지, 그자리에 삽입할 데이터) index값부터 시작해서 받은 개수값만큼 지움
// 배열데이터에서 특정 item들을 지움.
// 특정한 index번호에 item을 끼워넣음.
// 특정 index번호에 item을 지우고 새로운 데이터 삽입가능
const numbers = [1, 2, 3, 4]
numbers.splice(2, 1) // 0,1,2부터 1개만지워라 = 3

numbers.splice(2, 0) // 2부터 0개를 지운다.. -> 아무것도 안지움.
numbers.splice(2, 0, 999) // 2부터 0개자리에 999데이터를 끼워넣어라.
numbers.splice(2, 1, 99) // 2부터 1개지우고 그자리에 99넣는다.

console.log(numbers)

const fruits = ['Apple', 'Banana', 'Cherry']
fruits.splice(2, 0, 'Orange') // 3번째에 orange만 끼워넣어주기

console.log(fruits)
*/