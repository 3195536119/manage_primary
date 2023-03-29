import axios from "axios";


export default {
    /**
     * 用户登录
     * @param {*} name 用户名
     * @param {*} password 密码
     * @returns 请求的promise对象
     */
    login(name, password) {
        return axios.get('/login', {
            params: {
                name,
                password
            }
        })
    },
    /**
     * 获取订单数据
     * @returns 请求订单数据的promise对象
     */
    getBillData(){
        return axios.get('/getBill');
    }

}