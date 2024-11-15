const colors = ["#fff", "#ddd", "red"]

const sayHi = function(){
    console.log('hi module1')
}
function sayName(name){
    console.log("내 이름은" + name)
}

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getBornYear(){
        return new Date().getFullYear() - this.age
    }
}

// commonJS 방식 데이터 한번에 내보내기
module.exports={
    color,
    sayHi,
    sayName
}


// commonJS 방식 데이터 따로따로 내보내기
exports.sayHi = function(){
    console.log('hi')
}

exports.name = "Honi"

