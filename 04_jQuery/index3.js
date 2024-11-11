console.log(window)
console.log(document)

console.log($(window))
console.log($(document))

// click(): 클릭했을때
// jQuery 에서는 이벤트 이름으로 메서드가 존재함
// 요소.click(function(){}), 요소.hover(function(){마우스가 올라갔을때}, function(){마우스가 나갔을때})
$('.p-msg').click(function(){
    $(this).css("color","red")
});

// $(".num").click(function(){
//     $(".num").css("color","blue")
//     $(this).css("color","green")
// })

// $(".num").on("click", function(){
//     $(this).css("color","pink")
// })

// in js // 19~21라인의 동작과 동일
let nums = document.querySelectorAll(".num")
for(let i =0; i<nums.length; i++){
    // console.log(nums[i])
    
    nums[i].addEventListener("click", function(){
        this.style.color = "pink"
    })
}

// hover(): 마우스를 올렸을때, 마우스를 떼었을때 각각 정의 필요
$("div-hover").hover(
    function(){
        $(this).addClass("hover")
    },
    function(){
        $(this).removeClass("hover")
    }
)

$(window).scroll(function(){
    console.log('scrolling....')
})

// ========================================
/* 2. [키보드 이벤트] */
// input.addEventListener('keydown', function(event){
//     // console.log(event)
    
//     // 방향키 아래, 위, 왼쪽, 오른쪽
//     console.log(event.code)
//     console.log(event.key)
//     console.log(event.keyCode)
//     if(event.code==="ArrowLeft"){
//          console.log("왼쪽")
//     } else if (event.code==="ArrowRight"){
//          console.log("오른쪽")
//     } else if (event.code==="ArrowUp"){
//          console.log("위쪽")
//      } else if (event.code==="ArrowDown"){
//          console.log("아래쪽")
//      } else {
//          console.log("방향키 아님")
//      }    
//  }) 

$(".input-key").keydown(function(e){
    if(e.code==="ArrowLeft"){
        console.log("왼쪽")
    } else if (e.code==="ArrowRight"){
        console.log("오른쪽")
    } else if (e.code==="ArrowUp"){
        console.log("위쪽")
    } else if (e.code==="ArrowDown"){
        console.log("아래쪽")
    } else {
        console.log("방향키 아님")
    }    
})


$("#todo-form").submit(function(e){
    // 기본동작 막기(새로고침 방지)
    e.preventDefault();
    // input값 저장
    let inputVal = $("input[name='todo']").val() 
    // li 태그 만들고 input 값 전달
    $(".todos").append(`<li>${inputVal}</li>`)
    // input 초기화
    $("input[name='todo']").val("")  
})



