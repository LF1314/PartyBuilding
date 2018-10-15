<template>
 <div class="life_header">
     <Header :mess='mess'></Header>
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
    }
</script>

<style scoped lang = 'scss'>
.life_header{
   height: 44px;
   width: 100%; 
}


</style>
