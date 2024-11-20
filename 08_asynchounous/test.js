// 기존 콜백 코드
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

// 콜백함수 실행
/* call("kim", function (name) {
  console.log(name + "반가워");
  back(function (txt) {
    console.log(txt + "을 실행했구나");
    hell(function (msg) {
      console.log("여기는 " + msg);
    });
  });
}); */

function callPr(name, cb) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // cb 대신 resolve로 넘기기
    }, 1000);
  });
}

function backPr(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hellPr(cb) {
  // reject 생략 가능
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// then과 catch를 이용
/* callPr("kim")
  .then((result) => {
    console.log(result + "반가워");
    return backPr();
  })
  .then((txt) => {
    // txt = 이전 then의 리턴값 = "back"
    console.log(txt + "을 실행했구나");
    return hellPr();
  })
  .then((msg) => {
    console.log("여기는 " + msg);
  }); */

// async await
async function exec() {
  const name = await callPr("honi");
  console.log(name + "반가워");
  const back = await backPr();
  console.log(back + "을 실행했구나");
  const hell = await hellPr();
  console.log("여기는 " + hell);
}

exec();

// function pickName(name) {
//   return new Promise(function (resolve, reject) {
//     resolve(name);
//   });
// }

// // 실행함수
// function exec() {
//   pickName("kim")
//     .then((name) => {
//       // call 끝나고 나서 실행되는 작업
//       console.log(name + "반가워");
//     })
//     .then(() => {
//       back(cb);
//       console.log(back + "을 실행했구나");
//       // reject로 전달된 값이 err로 찍힘
//     })
//     .then((cb) => {
//       console.log(`"여기는" + ${hell}`);
//       // reject로 전달된 값이 err로 찍힘
//     });
// }
// let name, cb;

// exec();
