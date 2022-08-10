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