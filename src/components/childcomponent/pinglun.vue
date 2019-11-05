<template>
    <div class="main">
        <div class="cmt-list">
            <Header :title="title"/>
            <div class="cmt-item">
                <!-- 头像 昵称 时间 -->
                <div class="touxiang">
                    <div class="touxiangimg"><img src="../../assets/minetitle.png" alt=""></div>
                    <div class="usermsg">
                        <div class="username">我的有等等我的有等等我的有等等</div>
                        <div class="time">2017-04-16</div>
                    </div>
                </div>
                <!-- 言论 -->
                <div class="text">
                    <span>我举得这个健身不错</span>
                </div>
                <div class="othercontent">
                    <div class="left">
                        <span class="othername">@我的人嘞:</span>
                        <p class="cmtcontent">达瓦啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊达瓦达顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶瓦达瓦达达娃大碗大碗大碗大碗大顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶碗大碗大碗的阿瓦达 瓦大屋顶</p>
                    </div>
                    <div class="right">
                        <img src="@/assets/footer1.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../common/header.vue'
export default {
    data(){
        return {
            title:'我的评论'
        }
    },
    components:{
        Header
    }
}
</script>

<style scoped>
.main{
    height:100%;
    width:100%
}
.cmt-list{
    /* height:100%; */
    width:100%;
    padding-top: 40px
}
.touxiang{
    height:3rem;
    display: flex
}
.touxiangimg{
    height:3rem;
    width:3rem;
}
.touxiangimg img{
    width:3rem;
    height:3rem;
    border-radius: 50%
}
.usermsg{
    font-size: 0.5rem;
    position: relative;
    padding-left: 1rem
}
.usermsg .username{
position: absolute;
top:0;
width:6rem;
font-size: 0.8rem;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden
}
.usermsg .time{
    position: absolute;
    bottom: 0;
    color:#999;
    width: 4rem;
}
/* 言论 */
.text{
    margin-top: 0.5rem;
    font-weight: 200;
    font-size: 0.8rem
}
/* 别人的内容 */
p{
    margin-top: 0;
    margin-bottom: 0;
    height:4.8rem;
    overflow: scroll;
    text-overflow: ellipsis;
}
.othercontent{
    border:1px solid #cfcfcf;
    display:flex
}
.othercontent .left{
    width:60%;
}
.othercontent .right{
    width:40%;
}
.othercontent img{
    width:100%;
    max-height:100%
}
.othername{
    font-size: 0.5rem;
    color:#cfcfcf
}
.cmtcontent{
    font-size: 0.5rem;
    color:#cfcfcf
}
.cmt-item{
    margin-top: 10px
}
</style>
