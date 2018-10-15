<template>
    <div class="new_detail_wraper">
       <div class="newinner">
             <div class="detail_header">
                <Header :mess='mess'></Header>
                    </div>
                    <div class="newcontent" v-if="newmew">
                        <div class="newtitle">
                                {{newmew.title}}
                        </div>
                        <div class="newtime">
                            <span>{{newmew.currentTime}}</span>
                            <span>作者：{{newmew.author}}</span>
                        </div>
                        <div class="newimg">
                            <img :src="newmew.pic" alt="" width="100%">
                        </div>
                        <div v-html="newmew.content" class="newcontentss">
                        </div>
                    </div>  

       </div>
    </div>
</template>

<script>
    export default
    {
        name:'newdetail',
        data(){
            return{
                  mess:'信工新闻眼',
                  newmew:{}
            }
        },
        components:{
           Header:()=>import ('../../components/comonheader/Header.vue')
        },
        created(){
            let newid = this.$route.params.id
            this.$axios.get('/news',{newid}).then(res=>{
                console.log(res)
                this.newmew = res.data.new
            })
        }
    }
</script>
<style scoped lang = 'scss'>
.new_detail_wraper{
.newinner{
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
     overflow-y: scroll;
}
}
.newcontent{
    margin-top: 44px;
    width: 100%;
    h4{
        font-size: 15px;
    }
}
.newimg{
    padding: 20px;
 
}
.newtitle{
    font-size: 16px;
    color: #666;
    padding: 20px;
}
.newtime{
    padding: 0 20px 0 20px;
}
.newcontentss{
     padding: 20px;
 
}
</style>

