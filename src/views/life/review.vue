<template>
    <div class="review_wraper">
            <div class="review_inner">
                  <Header></Header>
            </div>
            <div class="review_body">
                  <div class="reviewcontent">
                       <h2 class="title_review">评议须知</h2>
                        <div v-html="conten" class="review_content">

                        </div>
                  </div>
            </div>
           <div class="review_choose">
               <mu-select  v-model="selecval" placeholder='选择'>
                    <mu-option 
                    v-for="(option,index) in options" 
                    :key="index" 
                  ></mu-option>
               </mu-select>
           </div>

    </div>
</template>
<script>
import axios from 'axios'
export default 
{
    name:'reviews',
    data(){
        return{
            conten:'',
            title:'',
            options:[],
            selecval:''

        }
    },
    components:{
        Header:()=>import ('../../components/comonheader/Header.vue')
    },
    methods:{
        //获取民主评议的内容
       getcontent(){
           axios.get('http://211.67.177.56:8080/hhdj/nationComment/getComment.do').then(res=>{
               console.log(res)
               this.conten = res.data.content
               this.title = res.data.titleDesc
           })
       },
       //branchselect
       getselectbranch(){
           axios.get('ttp://211.67.177.56:8080/hhdj/branch/findAll.do').then(res=>{
               this.options = res.data.data.rows
               console.log(this.options)
           })
       }
    },
    created(){
        this.getcontent()
    }
}
    
</script>

<style scoped lang ='scss'>
.review_body{
    margin-top: 44px;
}
.reviewcontent{
    padding: 10px;
}
.title_review{
    font-size: 18px;
    color: #333;
    text-align: center;;
}
.review_content{
    font-size: 15px;
    line-height: 30px;
    color: #888;
}
</style>


















