const http = require('http')
const fs = require('fs')

const server = http.createServer(function(requset, response){
    // console.log(requset) // 요청 객체 정보

    console.log('url: ', requset.url)

    // response
    // response.write('<p>응답1</p>')
    // response.write('<p>응답2</p>')
    // response.write('<p>응답3</p>')
    // response.end('<h3>응답 종료</h3>')

    try{
        // try문
        // 실행코드
        const data = fs.readFileSync('./inde.html')
        response.writeHead(200, {"content-type":"text/html; charset=utf-8"})
        response.end(data)
    } catch(err){
        // try 문에서 어떤 에러가 발생되었는지 error 객체를 넘겨줌(생략가능)
        // try 문에서 에러가 났을떄 실행할 코드       
        console.log(err)
        response.writeHead(404, {"content-type":"text/html; charset=utf-8"})
                
        // 404.html을 만들고 에러날경우 해당파일 연결
        // response.end("<h1>page not found</h1>")
        const data = fs.readFileSync('./404.html')
        response.end(data)

    }
})

const PORT = 8080

// 서버 이벤트 - connection, request
// 새로운 클라이언트가  연결햇을떄
server.on('connection', function(request, response){
    console.log('connection event 발생')
})

// 기존 창에서 새로고침햇을때
server.on('request', function(request, response){
    console.log('request event 발생')
})

// 포트 열기
server.listen(PORT,function(){
    console.log(`server listening on ${PORT}`)
})