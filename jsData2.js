// JS 데이터(2)

/* 객체
// Object

// Object.assign()
const userAge = {
  // key: value
  name: 'Heropy',
  age: 85
}
const userEmail = {
  name: 'Heropy',
  email: 'thesecon@gmail.com'
}

const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge) // true

// 원본 데이터를 손상시키지 않고 속성들을 합치기
// 빈 객체 데이터가 출처 객체들을 흡수하여 새로운 변수에 반환
const target2 = Object.assign({}, userAge, userEmail)
console.log(target2) // userAge + userEmail
console.log(userAge) // userAge의 원본만 가지고 있음.
console.log(target2 === userAge) // false

// 원본 데이터를 손상시키지 않고 복사 객체 만들기
const target3 = Object.assign({}, userAge)
console.log(target3)
console.log(userAge)
console.log(target3 === userAge) // false

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b) // false // 생긴건 똑같지만, 객체(참조형) 데이터의 메모리 주소가 서로 다르기때문.

// Object.keys()
// 객체를 인자로 받아 key값을 배열데이터로 만들어서 반환
const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com'
}

const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email'] key(프로퍼티)이름만 추출하여 배열데이터로 반환

console.log(user['email']) // 객체데이터에서 사용가능한 indexing // 객체[key] -> value반환 

const values = keys.map(key => user[key]) // map.콜백에서 반환된 데이터를 모아 배열로 반환.
console.log(values)
*/



/* 구조 분해 할당
// 구조 분해 할당 (Destructuring assignment)
// = 비구조화 할당
// 객체데이터의 내용을 구조분해 해서 내가 원하는 속성들만 꺼내서 사용

const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com'
}

// 객체 데이터를 할당연산자로 할당
// user라는 객체데이터의 내용을 구조분해 해서 내가 원하는 속성들만 꺼내서 사용
const { name, age, email, address } = user // 구조분해된 내용을 변수로 만들어서 아래 사용
// const { name, age } = user // 필요한 것만 골라서 사용가능.
// E.g, user.address 같은 user['address']

console.log(`사용자의 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${age} 세입니다.`)
console.log(`${name}의 이메일 주소는 ${email}입니다.`)
console.log(address) // undefined // user라는 객체데이터 내부에 존재하지 않음

// 값이 없는 경우 기본값 지정 가능. 유저의 어드레스가 우선값.
// const { name, age, email, address = 'Korea' } = user 
// console.log(address)

// user의 이름이 마음에 들지 않는다면 : 뒤에 원하는 변수 이름을 명시 가능.
// const { name: heropy, age, email, address } = user
// console.log(`사용자의 이름은 ${heropy}입니다.`)

// 배열 데이터의 구조 분해 할당
const fruits = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits // [] 배열이라 대괄호 사용해야함@@ // 순서대로 꺼내짐.
console.log(a, b, c, d) // Apple Banana Cherry undefined
console.log(a, d, b, c) // Apple undefined Banana Cherry

//배열 데이터 구조 분해에서, Banana만 가져오고 싶을때..
// 순서대로 추출되어 순서를 지키며 , 를 꼭 적어주고 변수를 명시하지 않는다.
const [, s] = fruits 
console.log(s) //  banana
const [, , q] = fruits
console.log(q) // Cherry
*/



/* 전개 연산자
// 전개 연산자 (Spread)
// ...배열 : 배열 데이터를 ,로 구분되어져 있는 각각의 item을 전개하여 출력
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)
console.log(...fruits) // 배열 데이터를 , 로 전개하여 출력 // Apple Banana Cherry
// console.log('Apple', 'Banana', 'Cherry']

function toObject(a, b, c) {
  return {
    a: a,
    b: b,
    c: c
  }
}
console.log(toObject(...fruits))
console.log(toObject(fruits[0], fruits[1], fruits[2])) // 같은..

const fruits2 = ['Apple', 'Banana', 'Cherry', 'Orange'] // 배열데이터가 추가되었을때, 

// ...c : rest parameter : 나머지 모든 변수를 받겠다.
function toObject(a, b, ...c) { // ...c로 'Cherry', 'Orange' 받아낼 수 있음.
  return {
    // JS문법 -> 속성의 이름: 변수의 이름이 같으면 축약형으로..
    a, //a: a,
    b, //b: b,
    c, //c: c
  }
}
// 축약
function toObject(a, b, ...c) {
  return { a, b, c }
}
// 더축약 ( 화살표 함수 ) , 리턴키워드를 제외하고 다른 로직 없으니 return{} 지움.
// 객체데이터에서 중괄호는.. 함수 범위를 나타내는 단순블럭의 의미.. 
// 소괄호 안에서 객체 데이터 정의해줘야 함수 밖으로 반환될 수 있는 구조를 가짐.
const toObject = (a, b, ...c) => ({ a, b, c })
console.log(toObject(...fruits2))
*/


/* 불변성 
// 데이터 불변성(Immutability)
// 원시 데이터들은 불변한다,, c=1이 새로 생기지 않고 기존 메모리 1의 주소를 바라보는것처럼 불변.
// 원시 데이터는 생긴게 같으면 같은데이터다.
let a = 1
let b = 4
console.log(a, b, a === b) // 1 === 2  참조하는 메모리 주소기 다름.
b = a // a가 참조하는 주소를 b에 할당
console.log(a, b, a === b) // 1 === 1
a = 7 // 3번 메모리
console.log(a, b, a === b) // 3 === 1
let c = 1 // 기존 숫자데이터 1번의 주소를 바라봄.. 
console.log(b, c, b === c) // 1 === 1

// 참조형 데이터
// 데이터 가변성
// 선언할 때 항상 새로운 메모리 주소 참조
// 할당 연산할 때, 메모리의 주소만 같은 곳을 바라봄. (같은.. )
let a = { k: 1 }
let b = { k: 1 }
console.log(a, b, a === b) // false 1 === 2
a.k = 7
b = a
console.log(a, b, a === b) // true 1(7) === 1(7)
a.k = 2 // 1을 같이 참조하는 b도 값이 바뀜.
console.log(a, b, a === b) // true 1(2) === 1(2)
let c = b
console.log(a, b, c, a === c) // true 1(2) === 1(2)
a.k = 9
console.log(a, b, c, a === c) // true 1(9) === 1(9)

// 참조형 데이터를 할당 연산자로 다른 변수에 할당할 때, b를 별개로 구분하여 관리하고 싶다면 복사를 해야함.,
// b = a
// 얕은-표면만 복사
// 깊은-내부 메모리 새로운 주소로 복사
*/



/* 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
// 객체, 배열처럼 참조형 데이터를 복사할 때, 얕은 복사로 충분하다면 ok(내부에 또다른 참조 데이터가 없다면.)
// 특정한 참조형 데이터 내부에 또다른 참조형 데이터가 있다면, 깊은 복사를 통해 복사를 해주는게 안전함.
import _ from 'lodash' // _ 기호가 하나의 객체 데이터

const user = {
  name: 'Heropy',
  age: 85,
  emails: ['thesecon@gmail.com']
}
// const copyUser = user
// console.log(copyUser === user) // true같은 메모리 주소를 바라봄.

// user.age = 22
// console.log('user', user) // 22 잘바뀜.
// console.log('copyUser', copyUser) // 22 얘도바뀜....

// 복사@@@ 객체는 안바뀌게 방법 1 - 얕은 복사
// 대상객체에 출처객체를 복사 반환
// const copyUser = Object.assign({}, user)

// 복사@@@ 객체는 안바뀌게 방법 2 - 얕은 복사
// 빈 객체데이터에 user가 갖고있는 속성과 값들을 전개하여 집어넢음
// const copyUser = {...user} 

// 깊은 복사 (lodash 사용)
const copyUser = _.cloneDeep(user) // 깊은복제 메소드 // false
console.log(copyUser === user) // false

user.age = 22
console.log('user', user) // 22
console.log('copyUser', copyUser) // 85


console.log('------')
console.log('------')

user.emails.push('neo@zillinks.com') // 맨 뒤에 밀어넣음.
// true?!?!?!? // user.emails는 배열데이터.. 참조형데이터.를 복사처리 한 적이 없다. 같은 메모리 주소만 공유중.. 
console.log(user.emails === copyUser.emails) // 깊은복사시에 false
console.log('user', user) // copyUser하고 emails배열 주소가 같다. -> 얕은,, 표면만 복사
console.log('copyUser', copyUser) // 깊은 복사시에 emails 1개
*/