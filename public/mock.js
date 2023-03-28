/*
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-26 16:20:21
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-27 11:46:40
 */
const Mock = require("mockjs");

/**
 * 将Url中的数据拆分为参数对象
 * @param {*} url 
 * @returns Array
 */
function getParamsObj(url) {
    let paramsObj = {}
    let paramStr = url.slice(url.indexOf('?') + 1)
    let paramArr = paramStr.indexOf('&') == -1 ? [paramStr] : paramStr.split('&')
    paramArr.forEach(arr => {
        let keyValueArr = arr.split('=')
        paramsObj[keyValueArr[0]] = keyValueArr[1]
    })
    return paramsObj
}

//用户登录
Mock.mock(/login/, 'get', (options) => {
    console.log('login,mock到了', options)
    let url = options.url
    let paramObj = getParamsObj(url)
    console.log(paramObj)
    if (paramObj.name == 'admin' && paramObj.password == '123456') {
        return {
            status: 200,
            token: Mock.Random.guid(),
            msg: '登录成功！'
        }
    }
    if (paramObj.name != 'admin') {
        return {
            status: 500,
            msg: '此用户暂未注册！'
        }
    }
    return {
        status: 500,
        msg: '密码输入错误'
    }
})