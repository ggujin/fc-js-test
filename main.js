/* 생성자 함수(prototype) 

const heropy = {
  // 속성과 메소드를 통틀어서 멤버(Member)라고 부름.
  firstName: 'Heropy', // 속성
  lastName: 'Park', // 속성
  getFullName: function () { // 메소드 - 속성에 함수데이터가 할당되어있음.
    return `${this.firstName} ${this.lastName}`
    // return `${heropy.firstName}` 변수의 이름이 바뀔 수 있기 때문에 this(객체데이터가 다른 변수에 할당될 가능성)
  }
}
console.log(heropy)
console.log(heropy.getFullName())

const amy = {
  firstName: 'Amy',
  lastName: 'Clarke',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(amy)
console.log(amy.getFullName())

const neo = {
  firstName: 'Neo',
  lastName: 'Smith',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(neo)
console.log(neo.getFullName())

// 객체 데이터와 함수는 메모리에 저장됨. 불필요한 중복 => Class 개념 필요.

function User(first, last) { // 생성자 함수(new와 함께 사용되는)는 파스칼케이스.
  this.firstName = first
  this.lastName = last
}
// 똑같은 로직 부분을 통일해서 메모리를 효율적으로 관리
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

// (생성자 함수의)인스턴스 : new 키워드를 통해 생성자 함수로 실행한 결과를 반환해서 할당된 변수
const heropy = new User('Heropy', 'Park') // new ... => 생성자 함수(객체데이터 생성)
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy)
console.log(amy)
console.log(neo)
// 각 user.prototype.getFullName 참조
console.log(heropy.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())
*/



/* this 

// this
// 일반(Normal) 함수는 호출 위치!에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위!에서 this 정의!

// 1.
const heropy = {
  name: 'Heropy',
  normal: function () { // normal이 호출되는 위치에서 this 정의,
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
// 호출, 앞에 객체가 붙어있기 때문에 메소드.
heropy.normal() // .으로 heropy에서 호출하므로, this는 heropy에서 this 정의.
heropy.arrow() // this정의는 호출 위치랑 상관 없음.

const amy = {
  name: 'Amy',
  // heropy에 normal,arrow를 할당중. ()실행X 각 데이터를 할당.
  normal: heropy.normal,
  arrow: heropy.arrow
}
amy.normal() // amy객체를 연결하여 호출되었으므로 this 정의.
amy.arrow()

// 2. prototype
function User(name) {
  this.name = name
}
User.prototype.normal = function () {
  console.log(this.name)
}
User.prototype.arrow = () => {
  console.log(this.name)
}

const heropy = new User('Heropy')

heropy.normal() // heropy에서 this 정의
heropy.arrow() // arrow의 위치는 window 이므로 undefined

// 3.
const timer = {
  name: '니가 이름이다 니가떠라',
  timeout: function () {
    // setTimeout(함수, 시간) 콜백함수가 더활용도 높음.
    setTimeout(function () { // 일반함수, setTimeout의 내부로직으로 콜백이 들어감
      console.log(this.name + ' ?????????') // ???????????
      console.log('너왜뜨니???')
    }, 2000)
    setTimeout(() => { // 화살표함수, 자신이 선언된 함수 범위에서 정의, timeout는 timer을 가리킴. User안에서 찾자
      console.log(this.name) // 이름잘뜸
    }, 3000)
  }
}
timer.timeout()
*/



/* ES6 Classes 

// ES6 Classes

// 일반함수 생략 가능
const heropy = {
  name: 'Heropy',
  // normal: function () {
  normal() { // 일반함수만 생략가능
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

heropy.normal()
heropy.arrow()

// class 문법

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

class User {
  constructor(first, last) { // ': function' 생략된 것
    this.firstName = first
    this.lastName = last
  }

  getFullName() { // prototype속성 사용하지 않아도 prototype로 만들어지는 메소드 정의.
    return `${this.firstName} ${this.lastName}`
  }
}

const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy)
console.log(amy.getFullName())
console.log(neo.getFullName())
*/



/* 상속(확장) */

class Vehicle { // 생성자함수 혹은 class
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle { // Vehicle을 확장(상속)
  constructor(name, wheel) {
    super(name, wheel) // super => 확장된 클래스
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughtersBicycle)

//진정한 의미의 확장, 추가적인 this도.. 활용
class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)

console.log(myCar)
console.log(daughtersCar)