// 1. Date 객체
let now = new Date()
console.log(now)
console.log(new Date("September 30, 1990 13:00:00"))

// 1970.01.01 00:00:00 초 이후로 몇초나 지났는지
console.log(new Date(6000000))
console.log(new Date(0))
console.log(new Date(2010, 2, 2))
console.log(new Date(2010, 2, 2, 18, 35, 50))

console.log(now.getFullYear(), "년")
console.log(now.getMonth(), "월") // (0 ~ 11) 얘는 0부터인데
console.log(now.getDate(), "일") // 얘는 왜 1부터 세냐
console.log(now.getHours(), "시") //0 ~ 23
console.log(now.getMinutes(), "분") //0 ~ 59
console.log(now.getSeconds(), "초") //0 ~ 59
console.log(now.getMilliseconds(), "밀리초") //0 ~ 999
console.log(now.getDay(), "요일") //0 ~ 6 (일-토)

// 퀴이ㅣㅇ즈
// 조건문을 사용해서 오늘이 주말인지 평일인지 출력 어뚜케,,
if(Date.getDay === [0,6]){
    console.log("주말입니다")
} else {
    console.log("평일입니다")
}

const checkDay = now.getDay()===0||now.getDay()===6?"주말":"평일" // 삼항연산자
console.log(checkDay)

// 2. Math 객체
console.log(Math.E)  // 자연로그값
console.log(Math.PI)  // 파이값
console.log(Math.SQRT2)  // 루트2 값 

console.log(Math.min(50,10,1,2,3,4,-5))  // 최소값 찾아주는 함수
console.log(Math.max(50,10,1,2,3,4,-5))  // 최대값 찾아주는 함수
console.log(Math.random()) // 0보다 크거나 같고 1보다 작은 소수점수를 랜덤으로 뽑음  0 <= x < 1
console.log(Math.round(5.3)) // 소수 > 정수로 반올림
console.log(Math.floor(5.3)) // 소수 > 정수로 버림
console.log(Math.ceil(5.3)) // 소수 > 정수로 올림

// Math.rendom 응용!
// 0 ~ 9까지의 소수가 아닌 난수
console.log("난수1:", Math.floor(Math.random()*10))

// 1 ~ 10까지의 자연수 난수
console.log("난수2:", Math.ceil(Math.random()*10))

// 20 ~ 22 까지의 난수
// 20 <= X < 23
console.log("난수3:", Math.floor(Math.random()*3)+20)  // 간격(*3) / 시작숫자(+20)

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

// key값만 뽑아서 배열로 반환
let key = Object.keys(areaNum)야
console.log(key)

// value값만 뽑아서 배열로 반환
let value = Object.values(areaNum)
console.log(value)



