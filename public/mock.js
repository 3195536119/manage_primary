/*
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-26 16:20:21
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-30 20:27:43
 */
const Mock = require("mockjs");

const datas = require('./datas.js')

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
        data: datas.billData
    }
})

//获取表格数据
Mock.mock(/getTableData/, 'get', options => {
    return {
        status: 200,
        data: datas.tableData
    }
})

//获取饼图数据
Mock.mock(/getPieData/, 'get', options => {
    return {
        status: 200,
        data: datas.pieData
    }
})

//获取所有的用户信息
Mock.mock(/getAllUsers/, 'get', options => {
    return {
        status: 200,
        data: datas.userInfo
    }
})

//添加一个用户
Mock.mock(/addUser/, 'get', options => {
    let params = getParamsObj(options.url)
    let name = decodeURI(params.name)
    let address = decodeURI(params.address)
    datas.userInfo.unshift({
        id: Mock.Random.guid(),
        name: name,
        address: address,
        age: params['age'],
        birth: params['birth'],
        sex: params['sex']
    })
    console.log(datas.userInfo)
    return {
        status: 200,
        msg: '添加成功'
    }
})

//修改用户信息
Mock.mock(/editUserInfo/, 'get', options => {
    let params = getParamsObj(options.url)
    let name = decodeURI(params.name)
    let address = decodeURI(params.address.replaceAll("+", " "))
    console.log(address)
    datas.userInfo.some(user => {
        if (user.id == params.id) {
            user.address = address
            user.age = params.age
            user.birth = params.birth
            user.name = name
            user.sex = params.sex
        }
    })
    return {
        status: 200,
        msg: '修改成功'
    }
})

//删除用户信息
Mock.mock(/deleteUser/, 'get', options => {
    let paramsObj = getParamsObj(options.url)
    datas.userInfo = datas.userInfo.filter(user => {
        return user.id != paramsObj.id
    })
    return {
        status: 200,
        msg: '删除成功'
    }
})