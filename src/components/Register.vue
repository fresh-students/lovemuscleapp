<template>
  <div class="main">
    <div class="registerItem">
      <div class="checklogin">
        <a href="">密码登录</a>
      </div>
      <div class="all">
        <div class="emaillogin">
        <h3>邮箱登录</h3>
        <span>快速找到好友，一站式帮助你健身</span>
      </div>
      <div class="loginInput">
        <div><input type="text" id="emailnum" placeholder="输入邮箱号" maxlength="20" v-model="emailNum" @input="numInput($event)" ></div>
        <div class="unclearsearch" v-show="checkIt">
          <ul>
            <li  v-for="(item,i) in emailform" :key="i" @click="choose(item)">{{emailNum}}{{item}}</li>
          </ul>
        </div>
        <div><input type="button" id="checknum" value="获取验证码" @click="getCheckNum"></div>
      </div>
      <div class="tip">
        <span>未注册邮箱验证后自动登录</span>
      </div>
      </div>
      <div class="otherlogin">
          <div><h3>其他登录方式</h3></div>
          <div class="thirdlogin">
            <div class="qq"><img src="../assets/1111.png" alt=""></div>
            <div class="qq"><img src="../assets/123.png" alt=""></div>
            <div class="qq"><img src="../assets/t.png" alt=""></div>
          </div>
          <div class="tips">注册即代表同意&nbsp;&nbsp;爱健&nbsp;&nbsp;用户协议&nbsp;&nbsp;和&nbsp;&nbsp;隐私政策</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      emailNum:'',
      checkIt:false,
      emailform:[ '@163.com' ,  '@qq.com' , '@sina.com', '@baidu.com' ]
    }
  },
  methods:{
    numInput(){
      this.emailNum = event.currentTarget.value
      this.checkIt = true
      if(this.emailNum.trim() ==''){
        this.checkIt = false
      }else{
        if(this.emailNum.trim().includes("@")){
          this.checkIt = false
        }
      }
    },
    choose(item){//选择li项
      this.emailNum=this.emailNum+item
      this.checkIt=false
    },
    getCheckNum(){//发送验证码

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  height:100%;
  width:100%;
  background: url("../assets/bg.png") no-repeat;
  background-size: cover;
  background-position: center;
}
.registerItem{
  height:100%;
  width:100%;
  background-color: rgba(0,0,0,0.3);
  position: relative;
}
.checklogin{
  padding-top: 3rem;
  margin-bottom: 1rem
}
.checklogin a{
  font-size: 0.7rem;
  float:right;
  margin-right: 2rem;
}
/* 是输入框 */
.all{
  width:100%;
  margin-top: 3rem
}
.emaillogin{
  padding-left: 16%
}
.emaillogin h3{
  color:#fff;
  font-size: 1rem;
  font-weight: 350;
  letter-spacing: 0.2rem
}
.emaillogin span{
  color:rgba(255,255,255,0.8);
  font-size: 0.6rem;
  letter-spacing: 0.2rem
}
.loginInput{
  margin-top: 3rem
}
.loginInput input{
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
width:68%;
margin-left: 16%;
height:2.8rem;
}
.loginInput #emailnum{
  background-color: rgba(255, 255, 255,0.62);
  border:none;
  border-radius: 20px;
  outline:none;
  caret-color:rgba(59, 159, 149);
  padding-left: 4rem;
  color:#fff;
  font-size: 0.9rem;
  background-image: url("../assets/a.png");
  background-position: 20px 8px ;
  background-repeat: no-repeat;
  z-index:2
}
input::-webkit-input-placeholder{
  color:#fff;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
  color:#fff;
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
  color:#fff;
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
  color:#fff;
}
.loginInput #checknum{
  background-color: rgba(59, 159, 149, 0.38);
  border:none;
  border-radius: 20px;
  outline:none;
  color:#fff;
  letter-spacing: 0.2rem;
  margin-top: 1.5rem
}
/* 三方登录 */
.tip{
text-align: center;
font-size: 0.6rem;
color:rgba(255, 255, 255, 0.7);
margin-top: 1rem;
letter-spacing: 0.2rem;
font-weight: 300
}
.otherlogin{
  position: absolute;
  width:80%;
  bottom: 1.5rem;
  left:10%;
  
}
.otherlogin h3{
  color:#fff;
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  text-align: center
}
.otherlogin .tips{
  text-align: center;
  font-size: 0.5rem;
  color:rgba(255, 255, 255, 0.6);
  margin-top: 1rem;
  letter-spacing: 0.1rem;
  font-weight: 500
}
.thirdlogin{
  width:100%;
  margin: 0 auto;
  display: flex;
  justify-content:space-around;
  margin-top: 1.5rem
}
.thirdlogin img{
  height:40px;
  width:40px
}
.thirdlogin .qq{
  height:40px;
  width:40px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%
}
/* 模糊搜索 */
ul{
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0
}
.unclearsearch{
  height:80px;
  width:46%;
  background-color:rgba(255, 255, 255, 0.4);
  position: absolute;
  right: 21%;
  overflow:scroll;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.unclearsearch li{
  height:16px;
  line-height: 14px;
  font-size: 12px;
  padding: 2px 10px;
}
</style>
