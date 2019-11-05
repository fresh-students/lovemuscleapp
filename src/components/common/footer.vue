<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/index">
                <i class="icon iconatabbarshouye"></i>
                <p>首页</p>
            </router-link>
            <router-link tag="li" to="/commu">
                <i class="icon iconatabbarshequ"></i>
                <p>社区</p>
            </router-link>
            <router-link tag="li" to="/wetalk">
                <i class="icon iconatabbar_kefu"></i>
                <p>客服</p>
            </router-link>
            <router-link tag="li" to="/mine">
                <i class="icon iconatabbarwode"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  *{padding: 0;margin:0}
ul,li{ list-style: none;display: flex;text-align: center}
img{ display: block;}
#footer{ width:100%; height:50px; background-color:#666;position: fixed; left: 0; bottom:0;}
#footer ul{ display: flex; text-align: center; height:50px; align-items:center;}
#footer ul li{ flex:1; height:40px;text-align: center;display: list-item}
#footer ul li.active{ color: #000;}
#footer ul li.router-link-active{ color: #000;}
#footer ul i{ font-size: 20px;}
#footer ul p{ font-size: 12px; line-height: 18px;}
</style>
