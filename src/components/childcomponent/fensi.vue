<template>
    <div class="main">
        <div class="fensilist">
            <Header :title="title"/>
            <div class="fensiitem" v-for="(item,i) in user" :key="i">
                <mt-cell :title="item.title" :label="item.label" is-link >
                    <img slot="icon" src="../../assets/123.png">
                </mt-cell>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../common/header.vue'
export default {
    data(){
        return{
            title:'我的粉丝',
            user:[
                { title:'甜腻',label:'2017-04-16'},
                { title:'美丽人生',label:'2016-8-16'},
                { title:'可以得到我',label:'2016-9-6'}
            ]
        }
    },
    components:{
        Header,
    }
}
</script>

<style scoped>
.main{
    height:100%;
    width:100%;
    overflow: scroll
}
.fensilist{
    /* height:100%; */
    width:100%;
    padding-top: 40px;
}
.fensiitem{
    width:100%
}
.fensiitem img{
    height: 24px;
    width:24px
}
</style>
