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
    getBillData() {
        return axios.get('/getBill');
    },
    /**
     * 获取dash页的tableData数据
     * @returns 请求表格数据的promise对象
     */
    getTableData() {
        return axios.get('/getTableData')
    },
    /**
     * 获取饼图的数据
     * @returns 请求饼图数据的promise对象
     */
    getPieData() {
        return axios.get('/getPieData')
    },
    /**
     * 获取所有的用户数据
     * @returns 请求user数据的promise对象
     */
    getAllUsers() {
        return axios.get('/getAllUsers')
    },
    /**
     * 添加一个用户的数据
     * @param {*} user 
     * @returns 
     */
    addNewUser(user) {
        return axios.get('/addUser', {
            params: user
        })
    },
    /**
     * 修改用户的数据
     * @param {*} user 
     * @returns 
     */
    editUserInfo(user) {
        return axios.get('/editUserInfo', {
            params: user
        })
    },
    /**
     * 删除一个用户
     * @param {*} id 
     * @returns 
     */
    deleteUser(id){
        return axios.get('/deleteUser',{
            params:{
                id
            }
        })
    }
}