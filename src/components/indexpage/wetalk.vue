<template>
    <div class="main">
        <div class="wetalkitem">
            <div class="header">
                <Header :title="title"/>
            </div>
            <Foot/>
        </div>
    </div>
</template>

<script>
import Header from '../common/header.vue'
import Foot from '../common/footer.vue'
export default {
    name:'Wetalk',
    data(){
        return {
            title:'客服中心'
        }
    },
    components:{
        Foot,
        Header
    }
}
</script>

<style scoped>
.main{
  height:100%;
  width:100%;
}
.wetalkitem{
height:100%;
  width:100%;
}
/* 导航栏 */

</style>
