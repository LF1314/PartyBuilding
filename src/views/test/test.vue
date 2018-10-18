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
        data(){
            return{
                piclist:[
                    {
                        picName:'第一个人总结',
                        picDesc:'图片描述',
                        picUrl:'http://oowantxlb.bkt.clouddn.com/upload/rear/d1e186914db728e7be136aa4f20e6f21.jpg'
                    },
                        {
                        picName:'第一个人总结',
                        picDesc:'图片描述yyyy',
                        picUrl:'http://oowantxlb.bkt.clouddn.com/upload/rear/75af48c8b9d0feed322085fe85b1ff82.png'
                    }
                ],
                summary:"第一次写的个人总结",
                useId:'888',
                commentId:'5bc7088deb05c9611c28e845'

            }
        },
        methods:{
 
        },
        //测试添加个人总结接口
        // created(){
        //     this.$axios.post('/summary/addsum',{
        //     piclist:this.piclist,
        //     summary:this.summary,
        //     useId:this.useId,
        //     commentId:this.commentId
        //     }).then(res=>{
        //         console.log(res)
        //     })
        // }

    // 获取轮播图信息
        // created(){
        //     // axios.get('http://211.67.177.56:8080/hhdj/news/newsList.do?page=1&rows=100&type=8').then(res=>{
        
        //     //     let arr = res.data.rows
        //     //     arr.forEach(element => {
        //     //          axios.get(`http://211.67.177.56:8080/hhdj/news/newsContent.do?newsId=${element.newsId}`).then(resnn=>{
        //     //              this.$axios.post('/news',{new:resnn.data.data,newid:element.newsId}).then(res=>{
        //     //                  console.log(res)
        //     //              })
        //     //          })
        //     //     });
        //         //      arr.forEach(element =>{
        //         //          this.$axios.post('/newrows',{newl:element,newid:element.newsId,type:8}).then(res=>{
        //         //              console.log(res)
        //         //          })
                   
        //         // });
               
        //     })
        // }
        //获取党员云互动的信息
        // created(){
        //     axios.get('http://211.67.177.56:8080/hhdj/forum/forumList.do?page=1&rows=198&type=0&cates=0').then(res=>{
        //         console.log(res.data.rows)
        //         let arr = res.data.rows
        //         arr.forEach(element => {
        //             this.$axios.post('/dynamic',element).then(res=>{
        //                 console.log(res)
        //             })
                    
        //         });
        //     })
        // }
    }
</script>

<style scoped lang='scss'>

</style>
