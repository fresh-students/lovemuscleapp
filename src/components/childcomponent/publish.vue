<template>
    <div class="main">
        <div class="publishitem">
            <Header :title="headtitle"/>
            <div class="centeritem">
                <div class="inputitem">
                    <div class="title"><input type="text" class="inputtitle" placeholder="标题内容" maxlength="24" v-model="title"></div>
                    <div class="content"><textarea rows="10" type="textarea" class="inputcontent" placeholder="文章内容" v-model="content"></textarea></div>
                </div>
                <div class="uploaditem">
                    <p>添加图片</p>
                    <!--照片区域-->
                    <div  class="picarea" v-for="(urls, index) in imgs " :key="index">
                        <div class="delete" v-on:click="deleteImg(index)"><i class="icon iconashanchu"></i></div>
                        <img :src="urls" width="100px" height="100px"  />
                    </div>
                    <div class="addpic" @click="imgClick()"><img src="../../assets/add.png" alt=""></div>
                    <input  type="file" id='uploadFile'  name="img" accept="image/*"  v-on:change="readLocalFile()">
                </div>
            </div>
            <mt-button type="primary" size="large" @click.native="submitPic"><i class="icon iconaok" slot="icon"></i>发表</mt-button>
        </div>
    </div>
</template>

<script>
import Header from '../common/header.vue'
import {defaultIp} from '../../assets/ip/index.js'
export default {
    data(){
        return {
            headtitle:'我要发表',
            title:'',
            content:'',
            imgs:[]
        }
    },
    created(){
        if( typeof FileReader === 'undefined'){
            this.message = '抱歉，您的浏览器不支持该功能'
        }
    },
    methods:{
        deleteImg(index){
            this.imgs.splice(index,1)
        },
        imgClick(){
            document.getElementById("uploadFile").click()
        },
        readLocalFile(){
            var localFile = document.getElementById("uploadFile").files[0];
            var reader = new FileReader();
            var content;
            var current = this;
            reader.onload = function(event){
                content = event.target.result;
                current.imgs.push(content)
            }
            reader.onerror = function(event){
                alert('error')
            }
            content = reader.readAsDataURL(localFile,"UTF-8");
            var sss  = document.getElementById("uploadFile").value;
            console.log('sss'+sss)
        },
        submitPic(){
            var localFile = document.getElementById("uploadFile").files[0];
            let params = new FormData()
            params.append("title",this.title)
            params.append("content",this.content)
            params.append("mFileArr",localFile,localFile.name)
            this.axios.post(defaultIp+'/publishImg',params,{
                headers:{
                    'Content-Type':'multipart/form-data'
                },
                withCredentials: true
            }).then(res => {
                console.log(res)
            })
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
  width:100%;
}
.publishitem{
height:100%;
  width:100%;
}
.centeritem{
    padding-top: 40px
}
.centeritem img{
    max-width:100%;
    max-height:100%
}
.uploaditem{
    overflow: hidden;
}
.uploaditem input{
    float: left;  display: none;
}
.uploaditem p{
    margin-bottom: 0px
}
.delete{
position: absolute;
    right:0px
}
.picarea{
    float: left; margin: 10px ; 
    position: relative;
}
.addpic{
    width: 100px; height: 100px; background-color: #ccc;  float: left;  margin: 10px
}
/*  */
.title{
    width:100%;
}
.content{
    width:100%
}
.inputtitle{
    box-sizing: border-box;
width:100%;
  border:none;
  outline:none;
  border-radius: 4px;
  background-color: #cfcfcf;
  caret-color:rgba(59, 159, 149);
  color:#fff;
  font-size: 0.9rem;
  margin-bottom: 10px;
  padding: 5px;
}
.inputcontent{
    box-sizing: border-box;
    width:100%;
    border:none;
    outline:none;
    background-color: #cfcfcf;
    caret-color:rgba(59, 159, 149);
    border-radius: 4px;
    font-family:"黑体";
  color:#fff;
  font-size: 0.9rem;
  padding: 5px
}
.inputitem{
    margin-top: 10px
}
</style>
