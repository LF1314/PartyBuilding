
const funcs = {
    changedate(unix)
{
       
   function change(ds){
        return ds>=10 ? `${ds}` : `0${ds}`
    }

    let data = new Date(unix)
    let yaer = data.getFullYear()
    let mon = change(data.getMonth()+1)
    let dat = change(data.getDate())
    let hou = change(data.getHours())
    let min =change(data.getMinutes())
    let miao = change(data.getSeconds())

    return `${yaer}-${mon}-${dat} ${hou}:${min}:${miao}`
}

}

export default funcs














