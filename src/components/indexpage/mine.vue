<template>
    <div class="main">
        <div class="mineitem">
            <!-- header -->
            <div class="header">
                <Header :title="title"/>
            </div>
            <!-- 中间 -->
            <div class="center">
                <div class="touxiang">
                <div class="touxiangimg">
                    <img src="@/assets/minetitle.png" alt="" @click="actionSheet">
                </div>
                <p>我的昵称</p>
                <div class="persongrades">
                    <router-link to="/mine/dongtai" tag="span">12 动态</router-link>
                    <span class="line">|</span>
                    <router-link to="/mine/guanzhu" tag="span">10 关注</router-link>
                    <span class="line">|</span>
                    <router-link to="/mine/fensi" tag="span">8 粉丝</router-link>
                    <span class="line">|</span>
                    <router-link to="/mine/pinglun" tag="span">8 评论</router-link>
                </div>
            </div>
            <div class="mainmessage">
                <div class="messagetitle">
                    <span>数据中心</span>
                    <span>>></span>
                </div>
                <div class="messagetitle">
                    <span>身体档案</span>
                    <span>>></span>
                </div>
                <div class="messagetitle">
                    <span>每周目标</span>
                    <span>>></span>
                </div>
                <router-link to="/mine/publish" tag="div" class="messagetitle">
                    <span>我要发布</span>
                    <span>>></span>
                </router-link>
                <div class="messagetitle">
                    <span>运动能力</span>
                    <span>>></span>
                </div>
            </div>
        </div>
        <div>
                <mt-actionsheet  
                    :actions= "data"  
                    v-model="sheetVisible">  
                </mt-actionsheet>
        </div>
            <!-- footer -->
            <Foot/>
        </div>
    </div>
</template>

<script scoped>
import Header from '../common/header.vue'
import Foot from '../common/footer.vue'
export default {
    name:'Mine',
    data(){
        return{
            //action sheet 选项内容
            title:'个人中心',
            data:[{
                name:'拍照',
                method:this.getCamera
            },{
                name:'相册中选择',
                method:this.getLibrary
            }],
            sheetVisible:false
        }
    },
    methods:{
        actionSheet(){
            this.sheetVisible = true;
        },
        getCamera(){
            console.log("打开照相机")
        },
        getLibrary(){
            console.log("打开相册")
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
.mineitem{
height:100%;
  width:100%;
}
/* 导航栏 */
/* 头像 */
.center{
    padding-top: 2.5rem;
    padding-bottom: 50px;
    overflow: scroll
}
.touxiang{
    height:20%;
    width:100%;
    padding-top: 20px
}
.touxiangimg{
    height:100px;
    width:100px;
    margin:0 auto;
    border-radius: 50%
}
.touxiang p {
    text-align: center;
    font-size: 10px;
    margin-top: 20px;
    margin-bottom: 20px
}
.touxiangimg img{
    width:100px;
    height: 100px
}
.persongrades{
    display: flex;
    justify-content: space-around;
    font-size: 10px;
}
.persongrades .line{
    color:#07bdb2
}
.mainmessage{
    width:100%;
    margin-top: 30px
}
.messagetitle{
    height:3rem;
    padding: 0 6%;
    line-height: 3rem;
    background-color: #cfcfcf;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 5px
}
.messagetitle:hover{
    background-color: #b72c2c
}
.messagetitle:active{
    background-color: #b72c2c
}
</style>
