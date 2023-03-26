const Mock = require("mockjs");

Mock.mock(/login/, 'get', (options) => {
    console.log('mock到了', options)
})