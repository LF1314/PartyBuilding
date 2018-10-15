//通知早知道页面

<template>
    <div class="noticeheader">
       <div class="noticeinner">
               <div class="notice_header">
                   <span>通知早知道</span>
                </div>
                <div class="footer">
                   <tabar></tabar>
                </div>
       </div>
    </div>
</template>
<script>
export default
{
   name:'notice',
      components:{
       tabar:()=>import('../../components/tabar/tablebar')
    }
}  
</script>

<style scoped lang = 'scss'>
.notice_header{
height: 44px;
line-height: 44px;
background-color: #c50206;
font-size: 17px;
color: #fff;
position: fixed;
text-align: center;;
right: 0;
top:0;
left:0;
}
</style>
