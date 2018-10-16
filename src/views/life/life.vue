<template>
 <div class="life_header">
     <Header :mess='mess'></Header>
     <div class="banner_life_img">
          <img src="./img/timg.jpg" height="100%" alt="">
     </div>
     <div class="life_nar clearfix">
            <div class="nar_life_item fl ">
                 <router-link to="/stupolit">
                       <img src="./img/icon1.png" alt="">   
                       <div>
                           政治学习
                       </div>
                 </router-link>       
            </div>
              <div class="nar_life_item fl">
                     <router-link to="">
                       <img src="./img/icon2.png" alt=""> 
                       <div>
                           思想汇报
                       </div>  
                    </router-link>       
            </div>
             <div class="nar_life_item fl">
                     <router-link to="">
                       <img src="./img/icon3.png" alt=""> 
                       <div>
                           心得总结
                        </div>  
                    </router-link>       
            </div>
             <div class="nar_life_item fl">
                     <router-link to="">
                       <img src="./img/icon4.png" alt="">   
                       <div>
                           民主评议
                       </div>
                    </router-link>       
            </div>
             <div class="nar_life_item fl">
                     <router-link to="/lookgro">
                       <img src="./img/icon5.png" alt="">   
                       <div>
                           流动组员找组织
                       </div>
                    </router-link>       
            </div>
     </div>
 </div>
    
</template>
<script>
    export default
    {
    name:'life',
    data(){
        return{
           mess:'掌上组织生活'
        }
    },
    components:{
        Header:()=>import ('../../components/comonheader/Header')
    }
    ,
    created(){
            this.$store.commit('CHANGEHEADERMES','掌上组织生活')
    }
    }
</script>

<style scoped lang = 'scss'>
.life_header{
   height: 44px;
   width: 100%; 
}
.banner_life_img{
    height: 3.7rem;
    margin-top: 44px;
    
}
.nar_life_item{
    width: 31%;
     margin:1%;
     padding: 4%;
    text-align: center;
    font-size: 14px;
    color:#333;
    .router-link-exact-active{
        display: block;
    }
}


</style>
