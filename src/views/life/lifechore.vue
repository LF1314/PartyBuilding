//个人总结，民主评议

<template>
    <div class="">
          <div class="life_chore_header">
               <Header></Header>
          </div>
          <div class="jumpbtns">
                  <mu-button class="jumbtn" @click="jumtoperson" color="error">个人总结</mu-button>
                  <mu-button  class="jumbtn" @click="jumptoreview"  color="error">民主评议</mu-button>
          </div>
    </div>
</template>

<script>
export default
{
    name:'lifechore',
     components:{
         Header:()=>import ('../../components/comonheader/Header.vue')
     },
     methods:{
         //跳转到个人总结页面

         jumtoperson(){
             this.$router.push('/personsum')
         },
         //跳转到民主评议页面
         jumptoreview(){
             this.$router.push('/review')
         }
     }
}
</script>

<style scoped lang='scss'>
.jumpbtns{
  
    position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%,-50%);
    .jumbtn{
       display: block;
       width: 4rem;
       height: 50px;
       font-size: 16px;
       margin-top: 20px;
    }
}
</style>
