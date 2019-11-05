<template>
    <div class="main">
        <div class="commuitem">
            <!-- 头部 -->
            <div class="header">
              <Search title="今日话题" :searchlist="searchlist"/>
            </div>
            <!-- 动态 -->
            <div class="discuss">
              <div class="chatlist">
                <div class="chatmain">
                  <div class="chattitle">
                    <div class="qq">
                      <div class="qqimg"><img src="@/assets/chattitle.png" alt=""></div>
                      <div class="qqtext "><span class="chattitle_text">我的小可爱</span></div>
                    </div>
                    <span class="chattitle-data"><i class="icon iconashizhong"><span class="chattitle_text">2017-04-01</span></i></span>
                  </div>
                </div>
                <router-link to="/commu/communitem" tag="div" class="chatimg">
                  <div class="innerimg"><img src="@/assets/footer1.png" alt=""></div>
                  <div class="innertext">
                    <span>今天天气不错，和朋友一起去加勒比海盗当海盗，第一次就被警察抓了。还是很开心！！</span>
                  </div>
                </router-link>
                <p class="other">
                  <span @click="good"><i class="icon iconazanpress"></i>  0人赞过</span>
                  <span @click="bad"><i class="icon iconashoucang"></i>  0人收藏</span>
                </p>
              </div>
        </div>
            <!-- footer -->
            <Foot/>
        </div>
    </div>
</template>

<script>
import Search from "../common/search.vue"
import Foot from "../common/footer.vue";
export default {
  name: "Commu",
  data(){
    return{
      searchlist:[
        '大大大','dwdadwa'
      ]
    }
  },
  components: {
    Foot,
    Search
  }
};
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
}
.commuitem {
  height: 100%;
  width: 100%;
}
/* 导航栏 */
.header {
  height: 3rem;
}
/* 中间 */
.chatlist{
  padding: 0 1rem
}
.chatmain{
  margin-bottom: 5px
}
.chatimg{
box-sizing: border-box;
height:40%;
display: flex;
border:2px solid #999;
}
.innerhtml{
  height:100%;
  width:50%
}
.chatimg img{
  height:100%;
  width: 100%;
}
.innertext{
  height:100px;
  width:100%;
  font-size: 0.5rem;
  padding: 5px;
  overflow: scroll;
}
.other{
  display: flex;
  justify-content: space-between;
  font-size: 0.5rem
}
.chattitle{
  display: flex;
  justify-content: space-between
}
.chattitle-data{
  padding-top: 11px
}
.chattitle_text{
  font-size: 10px;
  padding-top: 10px
}
.qq{
  display: flex;
  justify-content: space-between
}
.qqimg{
  height:32px;
  width:32px;
  background-color: #fff;
  border-radius: 50%
}
.qqtext{
  margin-left: 10px;
  width:60px;
  height: 32px;
  line-height: 45px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}
p{
  margin-bottom: 0
}
.discuss{
  padding-bottom: 50px
}
</style>
