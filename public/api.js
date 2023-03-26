import axios from "axios";


export default {
    login(name,password){
        return axios.get('/login',{
            params:{
                name,
                password
            }
        })
    }
}