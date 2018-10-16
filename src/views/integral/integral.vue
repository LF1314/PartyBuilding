<template>
    <div class="userinfo_wraper">
        <div class="uerinfo_innner">
                 <div class="info_header">
                     <Header :mess ='mess'></Header>
                 </div>
        </div>

    </div>
</template>
<script>
    export default
    {
        name:'interg',
        data(){
            return{
              mess:'量化积分'  
            }
        },
         components:{
              Header:()=>import ('../../components/comonheader/Header.vue')
        }
    }
</script>

<style scoped lang = 'scss'>



</style>
