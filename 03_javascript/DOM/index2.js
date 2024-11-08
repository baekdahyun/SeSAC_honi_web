/*1. 태그 내부 내용 변경 */
/*
- innerText
- textContent
- innerHTML
*/

let div1 = document.getElementById("div1");
div1.innerText='     여기는 <b>첫번째</b> 태그입니다.&hearts;     /' // 문자열로 읽힘 (앞뒤 공백 안읽음)
console.log(div1.innerText)
div1.innerHTML='여기는 <b>첫번째</b> 태그입니다.&hearts;' // html로 읽힘
div1.textContent='     여기는 <b>첫번째</b> 태그입니다.&hearts;     /' // 문자열로 읽힘 (콘솔 - 공백읽음)
console.log(div1.textContent)

/* 2. 속성에 접근 */
/*
- 요소.속성명
- getAttribute(): 속성값을 가져옴
- setAttribute(): 속성값을 설정함
*/

// 아이디명 pooh, naver
let naver = document.getElementById('naver')
console.log(naver)
// naver.setAttribute("속성이름", "바꿔줄 속성 값")
naver.setAttribute("href", "http://www.google.com")

console.log(naver.href)
console.log(naver.getAttribute("href"))
naver.innerText="구글로 이동"

console.log(document.querySelector('#pooh').src)
document.querySelector('#pooh').alt = "푸사진"

/* 3. CSS 변경  */
let h1 = document.querySelector("h1")
let list =  document.querySelectorAll("li")
// console.log(h1)
// console.log(list)

// 배경색을 분홍색, 글자색 흰색, 글씨크기 1.3rem
for(let el of list){
    // el.style.color = "#fff"
    // el.style.backgroundColor = "pink"
    // el.style.fontSize = "1.3rem"
    el.classList.add("friends") //addClass
}

h1.classList.add('add-h1')
h1.classList.remove('add-h1')
h1.classList.toggle('add-h1')

console.log(h1.classList.contains('add-h1')) // 클래스가 있는지 확인
console.log(h1.classList)

/* 4. 부모, 자식, 형제 노드찾기 */
let friends = document.getElementById('friends')
let tigger = document.getElementById('tigger')

console.log("-----자식노드 접근-----")
// 배열형태로 가지고 옴
console.log(friends.children)
console.log(friends.children[0])


console.log("-----부모노드 접근-----")
// 배열 형태가 아니고 요소 자체를 가져옴
console.log(tigger.parentNode)

console.log("-----형제노드 접근-----")
// tigger의 이전 형제
console.log('이전 형제', tigger.previousElementSibling)
// tigger의 다음 형제
console.log('다음 형제',tigger.nextElementSibling)

/* 5. 노드 생성, 추가, 삭제 */
let container = document.querySelector('.container')

// 요소 생성
let p = document.createElement('p')
p.innerText = "새로 추가된 p"
p.style.fontWeight = "700"
p.style.background = "red"
p.id = "append-p"

// 요소 추가
console.log(p)

// 선택된 요소(container)의 맨 뒤 자식요소로 추가됨
container.append(p) 

let p2 = document.createElement("p") 
p2.innerText = "p2"
p2.classList.add("p-2")
console.log(p2)

let p3 = document.createElement("p")
p3.innerText = "p3"
p3.classList.add("p-3")
console.log(p3)

// container.append(p2)
// container.appendChild(p3) // 얘는 하나씩만 추가 할수잇슘

container.append(p2, p3 , "안녕") // 한번에 추가 가능

// prepend() : 선택된 요소의 맨 앞 자식(첫째)
// let friends = document.getElementById('friends')
// li 태그를 만들고 "캉가", freinds 클래스 추가
let li = document.createElement("li")
li.innerText = "캉가"
li.classList.add("friends")

friends.prepend(li)

console.log(h1)
// before()
let h3 = document.createElement("h3")
h3.innerText = 'h3'
h1.before(h3)

// after()
let h2 = document.createElement("h2")
h2.innerText = 'h2'
h1.after(h2)

// 요소 삭제 > remove(), removeChild()
let firstLi = document.querySelector('li')
// console.log(firstLi) // 캉가
let ul = firstLi.parentElement // ul

// firstLi.remove() // 선택된 요소가 삭제
// 삭제할요소.remove()

ul.removeChild(firstLi)
// 부모요소.removeChild(삭제할 자식 요소)

//<div class="container"></div>
let con = document.querySelector(".container")
let div = document.createElement("div")
let img = document.createElement("img")
let span = document.createElement("span")

img.setAttribute("src", "./img/beach1.jpg")
img.alt = "이요르 사진"
span.innerText = "이요르"
con.append(div)
div.append(img, span)
