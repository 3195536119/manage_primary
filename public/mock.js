/*
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-26 16:20:21
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-27 11:46:40
 */
const Mock = require("mockjs");

//订单数据
const billData = [{
    type:'pay',
    value: 320,
    text: '当天支付订单',
}, {
    type:'star',
    value: 540,
    text: '当天收藏订单',
}, {
    type:'unpaid',
    value: 79,
    text: '当天未支付订单',
}, {
    type:'pay',
    value: 5400,
    text: '当月支付订单',
}, {
    type:'star',
    value: 8900,
    text: '当月收藏订单',
}, {
    type:'unpaid',
    value: 540,
    text: '当月未支付订单',
}]

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

//获取订单数据
Mock.mock(/getBill/, 'get', options => {
    return {
        status: 200,
        data: billData
    }
})