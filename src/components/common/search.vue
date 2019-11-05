<template>
    <mt-search v-model="value" :cancel-text="取消" :placeholder="title" :result="filterResult"></mt-search>
</template>

<script>
export default {
    data(){
        return{
            value:'',
        }
    },
    props:{
        message:{
            type:String,
            require:true
        },
        title:{
            type:String,
            require:true
        },
        // 从父组件传过来的数组
        searchlist:{
            type:Array
        }
    },
    computed:{
        filterResult(){
            return this.searchlist.filter(value => new RegExp(this.value, 'i').test(value))
        }
    }
}
</script>

<style scoped>

</style>
