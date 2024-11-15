// 1-1. 배열의 구조분해 문법
const arr1 =["tomato", "kiwi", "orange"]
console.log(arr1[0])
const tomato = arr1[0]
// arr1에 있는 변수를 a,b,c,로 나누어 저장(구조분해)
const [a,b,c] = arr1
console.log(a)

const arr2 = ["red", "orange", "pink", "yellow"]
// pink 저장하고싶지않을때 공백으로 저장
const [red, orange, , yellow] = arr2
console.log(red, orange, yellow)

const [v1,v2,v3,v4,v5] = arr2
console.log(v1,v2,v3,v4,v5)

// const [a1, b1] = arr2 // 맨끝의 요소는 생략가능

// 변수 교환
let value1="second"
let value2="first"

let temp; // 값을 저장하기 위한 임시 변수

temp = value1 // temp = second
value1 = value2 // value1, value2 = first
value2=temp // value1 = first, value2 = second

console.log(value1, value2)

value1="second"
value2="first"
console.log(value1, value2)

// [value2, value1] = [value1, value2]
// console.log(value1, value2)

// 1.2 객체의 구조분해 할당 문법
const obj = {
    title:"제목",
    contant:"내용",
    num:10
}

// 값에 접근할때는 점, 대괄호 접근법 이용
console.log(obj.title)
console.log(obj['title'])

// console.log(title)
const {num, title, contant} = obj
console.log(title)

const {n1, t1, c1} = obj
console.log(n1)

const {contant:c2, title:t2} = obj
console.log(t2, c2)

// 2. spread와 rest ...
// 2-1. 배열
const arr3 = [1,2,3,4,5]
const arr4 = ["a","b","c"]
console.log(arr3)

for(let el of arr3){
    console.log(el)
}
console.log(...arr3) // 1 2 3 4 5
console.log(...arr4) // a b c

// arr3, arr4 합치기  >>  1차원 배열로
const arr5 = arr3.concat(arr4)
console.log(arr5)

const arr6 = [...arr3, ...arr4]
console.log(arr6)

// 2-2. string
const str = 'alliehigh'
let strToArr = [...str] // 직관적
let strToArr2 = str.split('')
// string to array >> split()
// array to string >> join()
console.log(strToArr)
console.log(strToArr2)

// 2-3. object
let obj1= {
    name:'allie',
    height:163,
    friend:null,
    married:false
}

let obj2={
    name:'진형',
    like:['sleeping','programming'],
    greeting:function(){
        console.log(`안녕하세요, 저는 ${this.name}이고요.. 
            키는 ${this.height}입니다.. `)
    }
}
obj2.greeting()

let me = { ...obj2, ...obj1}
me.greeting()
console.log(me)

me={
    ...obj1,
    ...obj2,
    gender:'Female'
}

console.log(me)

// ...rest
function test(a,b){
    console.log(a)
    console.log(b)
}

console.log("==========")
test(1,2)
test('안녕')

function test2(...val){
    console.log(val) // rest로 받아준 결과는 배열임
    const [a,b,c, ...rest] = val //[2,3,4,5,6,7,8]
    console.log(a)    
    console.log(b)
    console.log(c)
    console.log("rest",rest)
}

test2(2,3,4,5,6,7,8)

// 매개변수가 몇개가 들어오든 합해서 반환하는 함수(숫자로 가정)

function addNumber(...rest){
    let sum = 0;
    console.log(rest)
    rest.forEach(function(number){
        sum+=number;
    })
    return sum;
}

let sumResult = addNumber(1,2,3,4,5)
console.log("합한 결과값", sumResult) // 15






