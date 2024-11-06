// 문자열에서 사용하는 속성과 메소드
// length
// toUpperCase, toLowerCase, trim, indexOf, slice
// replace, replaceAll

let str1 = "Strawbarry Moon"
let str2 = "  Strawbarry Moon   "

// 문자열 인덱싱
console.log(str1[0])
console.log(str1[0] + str1[11])

//Sonny 단어 만들기
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9])

//length 속성
console.log(str1.length)
console.log(str2.length)

/* 메서드 사용해보기 */
// trim, toUpperCase, toLowerCase
// 문자열.method()의 형태로 사용
console.log(str1)
console.log(str2)
console.log(str2.trim()) // 앞뒤 공백삭제
console.log(str2.trim().length) // 공백삭제한 글자수

console.log(str1.toLowerCase()) // 소문자변경
console.log(str1.toUpperCase()) // 대문자 변경

// indexOf, charAt, slice
let fruit = 'applemango'
// indexOf: 내가 찾고싶은 문자열의 인덱스번호 반환
console.log(fruit.indexOf("e")) // 4
console.log(fruit.indexOf("a")) // 0
console.log(fruit.indexOf("apple")) // 0
console.log(fruit.indexOf("mango")) // 5
console.log(fruit.indexOf("z")) // 없는걸 찾으라그러면 -1을 반환

console.log(fruit.charAt(0))
console.log(fruit.charAt(8))
console.log(fruit.charAt(10)) // '' 

console.log(fruit.slice(5)) // 5번째부터 끝까지 뽑아옴 => mango
console.log(fruit.slice(3,6)) // lem => 3번부터 6번 직전까지
console.log(fruit.slice(-1)) // o => 맨 뒤에서부터 셈
console.log(fruit.slice(-4)) // ango

// replace, replaceAll => 문자열 대체
let msg1 = "Wow~ It is so amazing!!! Wow"
console.log(msg1.replace("Wow", "Hey~~~")) // 제일 먼저 찾는 하나만 변경
console.log(msg1.replaceAll("o", "OO")) 
console.log(msg1)

let date = "2024. 11. 06"
// YYYY-MM-DD
date = date.replaceAll(". ", "-") // 다시 저장
console.log(date)

let hello = "hello"
console.log(typeof hello) // hello 타입 확인

let hello2= hello.split()
console.log(hello2)

hello2 = hello.split("")
console.log(hello2)

hello2= hello.split('e')
console.log(hello2)
console.log(typeof hello2)
// ['2024', '11', '06']
// date = "2024-11-06"
date=date.split("-") // -를 기준으로 배열 나눠서 저장
console.log(date) // 출력

// ---------------------- 배열 ------------- 실제로 변경됨
console.log("--------------")
let arr1 =[1,2,3,4,5]
let arr2 =["quakka", "rabbit", "puppy","hamster"]

arr1[5]=6
arr1[8]=8
console.log(arr1)
arr1=[1,2,3,4,5]
arr1.push(6)
arr1.push(7)
arr1.push(8)
console.log(arr1)

console.log(arr1.pop()) // 제거하는 값을 반환
arr1.pop()
arr1.pop()
console.log(arr1)

arr2.unshift("cat")
console.log(arr2)
console.log(arr2.shift()) // 재ㅔ거하는 값 반환
console.log(arr2)

//배열.includes(요소) => 배열에 요소가 있는지 없는지 확인
console.log(arr2.includes("cat"))
console.log(arr2.includes("quakka"))

arr1=[1,2,3,4,5]
console.log(arr1.length)
console.log(arr1.indexOf(4)) // 4가 몇번 인덱스인지 => 3

// revers(), 순서 뒤집기
arr1.reverse() // 기존배열 변경됨
console.log(arr1)

// join(''), 배열에서 문자열로 합쳐줌(병합)
str1 = arr1.join()
//join에 아무것도 안쓰면 배열 안의 컴마까지 같이 문자열로 전환됨
console.log(str1)
str1 = arr1.join("")
console.log(str1)

// for of, forEach
let arr3 = [1,5,3,4,5]
let alphabets = ["a", "b","c","d","e","f"]

// 기본 for문
for(let i=0; i<arr3.length; i++){
    console.log(arr3[i])
}

// for of 문
for(let el of arr3){  //한바퀴 돔
    console.log(el)
}

// forEach(익명함수)
// forEach(function(a,b,c))  => a는 필수
// forEach(function(a[,b,c]))
arr3.forEach(function(num,i,arr){
    console.log("요소", num)
    console.log("배열의 인덱스", i)
    console.log("arr3", arr)
    console.log("---------------")
})

// 130번줄과 같음
arr3.forEach((el)=>{
    console.log(el)
})

//filter, map, find
// 매개변수로 들어가는 익명함수에 리턴값이 필수
console.log('----filter---')
arr2 =["quakka", "rabbit", "puppy","hamster"]
// return 이후의 조건에 만족하는 요소를 찾아서 새로운 배열로 반환
let six = arr2.filter(function(el){
    return el.length === 6 //글자수가 6자인것만 배열로 반환
})

console.log(six)

console.log('---find---') // 제일 먼저 찾은 6글자만 반환
let six2 = arr2.find(function(word){
    return word.length === 6 //글자수가 6자인것만 배열로 반환
})
console.log(six2)

console.log('---map---') // 
let arr4 = [1,2,3,4,5]

let multArr = arr4.map(function(number){
    return number *3
})

multArr = arr4.map((number)=> number *3) // 화살표 함수 사용시 중괄호와 리턴, 펑션 제거(위와 같은 기능)

console.log(multArr)

// 오브젝트 반복
const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
};

for(let area in areaNum){
    console.log(area) // key가 문자열로 반환중
    // 값에 접근?
    console.log(areaNum[area])
}


