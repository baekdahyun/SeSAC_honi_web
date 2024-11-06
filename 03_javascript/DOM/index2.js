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





