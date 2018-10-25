import axios from 'axios'
import store from '../src/vuex/index'
const instance = axios.create({
    baseURL:'/api',
    timeout:10000

})

const xhr = {
    get(url, data , methods = 'get',config){
        return new Promise((resolve,reject)=>{
            instance[methods](url,{
                params:data
            },config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    post(url, data , methods = 'post',config={
        headers:{'token':store.state.token}
    }){
        return new Promise((resolve,reject)=>{
            instance[methods](url,data,config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    put(url,data,config){
        return this.post(url,data,'put',config)
    }
    
}
export default xhr