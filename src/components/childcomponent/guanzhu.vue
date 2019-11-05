<template>
    <div class="main">
        <div class="guanzhuitem">
        <!-- 头部 -->
            <Header :title="title"/>
            <div class="center">
                <mt-navbar v-model="selected">
                <mt-tab-item id="1">用户</mt-tab-item>
                <mt-tab-item id="2">话题</mt-tab-item>
                </mt-navbar>

                <!-- tab-container -->
                <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                        <mt-cell title="1111" class="ab">
                            <img slot="icon" src="../../assets/chattitle.png" width="48" height="48">
                            <mt-button size="small">已关注</mt-button>
                        </mt-cell>
                        <mt-cell title="1111" class="ab">
                            <img slot="icon" src="../../assets/chattitle.png" width="48" height="48">
                            <mt-button size="small">已关注</mt-button>
                        </mt-cell>
                        <mt-cell title="1111" class="ab">
                            <img slot="icon" src="../../assets/chattitle.png" width="48" height="48">
                            <mt-button size="small">已关注</mt-button>
                        </mt-cell>
                        <mt-cell title="1111" class="ab">
                            <img slot="icon" src="../../assets/chattitle.png" width="48" height="48">
                            <mt-button size="small">已关注</mt-button>
                        </mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        <mt-cell v-for="n in 4" :title="'content ' + n" :key="n"/>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../common/header.vue'
export default {
    data(){
        return{
            selected:'1',
            title:'我的粉丝'
        }
    },
    components:{
        Header,
    }
}
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
}
.guanzhuitem{
  height: 100%;
  width: 100%;
  padding-top: 40px
}
.header {
  height: 48px;
  background-color: red;
}
/* 选择时 */
.mint-navbar .mint-tab-item.is-selected{
    color:#000;
    border-bottom:3px solid #000
}
a{
    color:#000
}
/* 列表 */
</style>
