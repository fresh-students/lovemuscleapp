<template>
    <div class="main">
        <div class="indexitem">
            <div class="header">
                <Search title="健身项目" :searchlist="searchlist"/>
            </div>
            <!-- <div class="line" id="line1"></div> -->
            <div class="center">
                <div class="centermain">
                <div class="circle">
                    <p>总共运动</p>
                </div>
                </div>
                <div class="bottom">
                <span class="bottom_text">
                    <span>次数(num)</span>
                    <span>时间(min)</span>
                    <span>消耗(jr)</span>
                </span>
                <span class="bottom_num">
                    <span>120</span>
                    <span>85</span>
                    <span>1302</span>
                </span>
                </div>
            </div>
            <div class="line" id="line2"></div>
            <div class="videoarea">
                <div><h3>健身视频</h3></div>
                <div class="videoplay">
                    <div class="videoimg">
                        <div class="lode">
                            <p>标题顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶</p>
                            <img src="../../assets/ic.png" alt="">
                            <span>一条小团团</span>
                            <span>2评论</span>
                            <span>2017-05-14</span>
                        </div>
                        <div class="lode">
                            <p>标题</p>
                            <img src="../../assets/ic.png" alt="">
                            <span>一条小团团</span>
                            <span>2评论</span>
                            <span>2017-05-14</span>
                        </div>
                        <div class="lode">
                            <p>标题</p>
                            <img src="../../assets/ic.png" alt="">
                            <span>一条小团团</span>
                            <span>2评论</span>
                            <span>2017-05-14</span>
                        </div>
                    </div>
                </div>
            </div>
            <Foot/>
        </div>
    </div>
</template>

<script>
import Search from '../common/search.vue'
import Foot from '../common/footer.vue'
export default {
    name:'Index',
    data(){
        return {
            searchlist:[
            "123",
            "1110",
            "789"
            ]
        }
    },
    components:{
        Foot,
        Search
    }
}
</script>

<style scoped>
.main{
  height:100%;
  width:100%;
}
.indexitem{
height:100%;
  width:100%;
  padding-bottom: 50px;
  overflow: scroll
}
/* 导航栏 */
.header{
    height:3rem;
}
.mint-tabbar{
  background-color: red
}
/* 分割线 */
.line{
    height:0.5rem;
    width:100%;
    background-color: #cfcfcf;
    z-index: -1
}
/* #line1{
    margin-bottom: 0.5rem
} */
#line2{
    margin-top: 0.5rem;
    margin-bottom: 1rem
}
/* 计数板 */
.center {
height:13rem;
background: url("../../assets/ic.png");
background-repeat: no-repeat;
background-size:cover;
background-position: center;
color: #fff;
position: relative;
z-index:-1
}
.centermain{
  width:100%;
  height:60%;
  position: relative;
  top: 2rem
}
.circle{
  width:6rem;
  height:6rem;
  background-color: aqua;
  margin: 0 auto;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  text-align: center
}
.circle p{
  position: relative;
  top: 1.5rem
}
.bottom{
  position: absolute;
  width:90%;
  left:5%;
  bottom:1rem
}
.bottom .bottom_text,.bottom_num{
  display: flex;
  justify-content: space-around;
  font-size: 0.5rem
}
/* 视频区域 */
.videoarea{
    width:100%;
}
.videoarea h3{
    font-weight: 250;
    font-size: 1rem
}
.videoplay{
    margin-top: 0.5rem;
    width: 100%;
}
.videoimg{
    width:100%;
    box-sizing: border-box;
    padding: 1%;
}
.videoimg img{
    width:98%;
    padding: 1%
}
.lode{
    font-size: 0.5rem;
    border:1px solid #cfcfcf;
    border-radius: 4px;
    margin-bottom: 1%
}
.lode span{
    color:#666
}
.lode p{
    margin: 0;
    padding: 0 1%;
    font-size: 0.8rem;
    letter-spacing: 0.1rem
}
/*  */
</style>
