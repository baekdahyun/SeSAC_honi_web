const express = require("express");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// ejs veiws 미들웨어 설정
app.set("view engine", "ejs"); // 템플릿 엔진 설정
app.set("views", "./views"); // 뷰파일 폴더 경로 설정

// 정적 파일 관리
// app.use('/static', express.static(__dirname));

/* body-parser 설정 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* 요청 > 응답 */
app.get("/", function (req, res) {
  console.log("nodemon 실행!");
  res.render("index");
});

// form get 요청
app.get("/getForm", function (req, res) {
  console.log(req.query);
  // res.send("form data get 요청 성공!");
  // title "GET"
  res.render("result", {
    title: "GET",
    userInfo: req.query,
  });
});

// form post 요청
app.post("/postForm", function (req, res) {
  console.log(req.body);
  res.render("result", {
    title: "POST",
    userInfo: req.body,
  });
});

app.post("/js-form-check", function (req, res) {
  console.log(req.body);
  res.send("js 유효성 검사");
});

// practice1으로 들어갔을때 practice1.ejs을 화면에 보여줘야 함
// practice2으로 들어갔을때 practice2.ejs을 화면에 보여줘야 함
// practice1, practice2.ejs에는 각각 get, post를 통한 폼 요청이 있고
// 결과페이지는 pratice_result.ejs 를 공통으로 사용

// 1. pr1에 대한 get요청
app.get("/practice1", (req, res) => {
  res.render("practice/practice1");
});
// 2. pr2에 대한 get요청
app.get("/practice2", (req, res) => {
  res.render("practice/practice2");
});
// 3. 주소지정 form GET 요청
app.get("/getPrForm", function (req, res) {
  console.log(req.query);
  res.render("practice/practice_result", {
    userInfo: req.query,
    addInfo: false, // practice1에서는 적은정보를 주고있음
  });
});
// 4. 주소지정 form POST 요청
app.post("/getPrPost", function (req, res) {
  console.log(req.body);
  res.render("practice/practice_result", {
    userInfo: req.body,
    addInfo: true,
  });
});
// API 4개

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});