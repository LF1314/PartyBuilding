//测试页面
<template>
    <div>
        这里是测试页面
    </div>
</template>
<script>
  import axios from  'axios'
    export default{
        name:'test',
        methods:{
 
        },
    // 获取轮播图信息
        created(){
            axios.get('http://211.67.177.56:8080/hhdj/carousel/carouselList.do?type=0').then(res=>{
              
                let arr = res.data.rows
         
                // arr.forEach(element => {
                //      axios.get(`http://211.67.177.56:8080/hhdj/news/newsContent.do?newsId=${element.url}`).then(resnn=>{
                //          this.$axios.post('/news',{new:resnn.data.data,newid:element.url}).then(res=>{
                //              console.log(res)
                //          })
                //      })
                // });
               
            })
        }
    }
</script>

<style scoped lang='scss'>

</style>
