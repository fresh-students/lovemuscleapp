<template>
    <div class="main">
        <div class="dongtaiitem">
            <!-- 头部 -->
            <Header :title="title"/>
            <!-- 内容 -->
            <div class="contentitem">
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
                    <span>我和我我祖国我和我我祖国我和我我祖国我和我我祖国我和我我祖国我和我我祖国我和我我祖国我和我我祖国我和我我祖国</span>
                </div>
                <!-- 图片 -->
                <div class="pic">
                    <img src="../../assets/footer1.png" alt="">
                    <img src="../../assets/footer1.png" alt="">
                    <img src="../../assets/footer1.png" alt="">
                    <img src="../../assets/footer1.png" alt="">
                    <img src="../../assets/footer1.png" alt="">
                </div>
                <!-- 点赞 评论 收藏 等等 -->
                <div class="directions">
                    <div>
                        <span><i class="icon iconazanpress"></i> 2</span>
                        <span><i class="icon iconaxiaoxi"></i> 2</span>
                        <span><i class="icon iconashoucang"></i> 3</span>
                    </div>
                    <div><span><i class="icon iconawebtubiaozhengli20"></i></span></div>
                </div>
            </div>
            <div class="contentitem">
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
                    <span>我和我我祖国我和我我祖国我和我我祖国我和我我祖国我和我我祖国我和我我祖国我和我我祖国我和我我祖国我和我我祖国</span>
                </div>
                <!-- 图片 -->
                <div class="pic">
                    <img src="../../assets/footer1.png" alt="">
                    <img src="../../assets/footer1.png" alt="">
                    <img src="../../assets/footer1.png" alt="">
                    <img src="../../assets/footer1.png" alt="">
                    <img src="../../assets/footer1.png" alt="">
                </div>
                <!-- 点赞 评论 收藏 等等 -->
                <div class="directions">
                    <div>
                        <span><i class="icon iconazanpress"></i> 2</span>
                        <span><i class="icon iconaxiaoxi"></i> 2</span>
                        <span><i class="icon iconashoucang"></i> 3</span>
                    </div>
                    <div><span><i class="icon iconawebtubiaozhengli20"></i></span></div>
                </div>
            </div>
            <!--  暂时-->
            <p>----------暂时没有更多----------</p>
        </div>
    </div>
</template>

<script>
import Header from '../common/header.vue'
export default {
    data(){
        return{
            title:'我的动态'
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
.dongtaiitem{
  height: 100%;
  width: 100%;
padding-top: 40px;
}
/* 头部 */

/* 每一项设置 */
.contentitem{
    padding: 0 0.5rem;
    margin-bottom: 10px;
    margin-top:10px
}
/* 个人信息 时间 昵称*/
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
/* 图片 */
.pic{
    padding: 0.4rem
}
.pic img{
    width:7rem
}
/* 动作 */
.directions{
    display: flex;
    justify-content: space-between
}
.directions span{
    margin-right:1rem
}
.dongtaiitem p{
    color:#cfcfcf;
    font-size: 0.2rem;
    text-align: center
}
</style>
