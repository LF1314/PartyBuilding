import axios from 'axios'
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
    post(url, data , methods = 'post',config){
        return new Promise((resolve,reject)=>{
            instance[methods](url,data,config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
}
export default xhr