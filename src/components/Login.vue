<template>
  <div class="main">
    <div class="loginitem">
      <div class="touxiang">
      <div class="counter">
        <div><img src="../assets/title.png" alt=""></div>
        <span>欢迎加入爱健俱乐部!</span>
      </div>
    </div>
    <div class="all">
      <div class="loginInput">
        <div><input type="text" class="emailnum"  maxlength="20" v-model="zhanghao" placeholder="手机或邮箱"></div>
        <div><input type="password"  class="pwdnum" maxlength="20" v-model="pwd" ></div>
        <div><input type="button" id="checknum" value="立即登录" @click="login()"></div>
        <div class="bottomtext">
          <a href="#">忘记密码</a>
          <a href="#">注册新用户</a>
        </div>
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
import {defaultIp} from '../assets/ip/index.js'
import { Toast } from 'mint-ui'
export default {
  name: 'Login',
  data () {
    return {
      zhanghao:'',
      pwd:'',
    }
  },
  methods:{
    login(){
      this.axios.post(defaultIp+'/login',{
        account:this.zhanghao,
        password:this.pwd
      }).then(res => {
        console.log(res)
        if(res.data.isSucceed ==1){
          Toast({
            message:res.data.message,
            position:"middle",
            duration:1000,
            iconClass:'icon iconaiconcopy'
          })
        }else{
          let p = new Promise(function(resolve,reject){
            setTimeout(() => {
              Toast({
                message:res.data.message,
                position:'middle',
                iconClass:'icon iconaok',
                duration:500
              })
              resolve()
            }, 1000);
          }).then((resolve)=>{
            setTimeout(()=>{
              this.$router.push({path:'/index'})
            }, 1000);
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  height:100%;
  width:100%;
  background: url("../assets/bg1.png") no-repeat;
  background-size: cover;
  background-position: center;
}
.loginitem{
  height:100%;
  width:100%;
  background-color: rgba(0,0,0,0.3);
}
/* 头像 */
.touxiang{
  width:100%;
  padding-top: 4rem
}
.touxiang .counter{
  width:60%;
  margin: 0 auto;
  text-align: center
}
.counter span{
  display: block;
  color:#fff;
  font-size: 0.7rem;
  letter-spacing: 0.1rem;
  margin-top: 0.5rem;
  font-weight: 300
}
/*  输入框*/
.all{
  width:100%;
  margin-top: 3rem
}
.emaillogin{
  padding-left: 16%
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
height:2.5rem;
}
/* 账号框 */
.loginInput .emailnum{
  background-color: rgba(255, 255, 255,0.62);
  border:none;
  border-radius: 20px;
  outline:none;
  caret-color:rgba(59, 159, 149);
  padding-left: 4rem;
  color:#fff;
  font-size: 0.9rem;
  background-image: url("../assets/a.png");
  background-position: 20px 6px ;
  background-repeat: no-repeat;
  z-index:2;
  margin-bottom: 1.2rem
}
/* 密码框 */
.loginInput .pwdnum{
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
  z-index:2;
  margin-bottom: 1.2rem
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
/* 登录框 */
.loginInput #checknum{
  background-color: rgba(59, 159, 149, 0.38);
  border:none;
  border-radius: 20px;
  outline:none;
  color:#fff;
  letter-spacing: 0.2rem;
}
/* 输入框下面的文字 */
.bottomtext{
  width:68%;
  margin: 0 auto;
  font-size: 0.4rem;
  display:flex;
  justify-content: space-between;
  color:#fff;
  margin-top: 0.5rem
}
/* 三方登录 */
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
</style>
