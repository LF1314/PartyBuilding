<template>
    <div class="review_wraper">
            <div class="review_inner">
                  <Header></Header>
            </div>
            <div class="review_body">
                  <div class="reviewcontent">
                       <h2 class="title_review">评议须知</h2>
                       <div v-html="conten" class="review_content"></div>
                  </div>
            </div>
           <div class="review_choose">
               <mu-select class="select_branch"  
               v-model="branchid" 
               placeholder='选择参评对象'>
                    <mu-option 
                    v-for="(branch,index) in branchs" 
                    :key="index" 
                    :label="branch.branch"
                    :value="branch._id"
                     ></mu-option>
               </mu-select>
               <mu-button @click="jumptocompaty">下一步</mu-button>
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
            branchs:[],
            branchid:'',
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
           this.$axios.get('/comlist/find').then(res=>{
               if(res.code == 200){
                   this.branchs = res.data

               }
           })
       },
       //跳转到参评党员列表
       jumptocompaty(){
           if( this.branchid !=''){
               console.log("...")
              this.$router.push(`/compaty/${this.branchid}`)
           }else{
               this.$alert('您还没有选择参评项')
           }
       }
    },
    created(){
        this.getcontent()
        this.  getselectbranch()
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
.select_branch{
    width: 4.2rem;
    border: none;
}
.review_choose{
    padding: 20px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;

}
</style>


















