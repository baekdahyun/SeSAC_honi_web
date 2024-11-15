// module1.js 의 모든 데이터를 객체 형태로 가져오는 중

const module1 = require('./03_module01.js')
console.log(module1)

// 가져오고 싶은거만
const { colors } = require('./03_module01.js')
console.log(colors)


const module2 = require('./03_module02.js')
console.log(module2)

const {name, sayHi} = require('./03_module02.js')
console.log(name)
sayHi()

