<template>
<div class="goodsinfo-container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
    <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <swiper :lunbotu-list="lunbotu" :isfull="false"></swiper>
        </div>
    </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
  <div class="mui-card-header">商品名称</div>
  <div class="mui-card-content">
    <div class="mui-card-content-inner">
      <p class="price">
        市场价：<del>￥2399</del>&nbsp;&nbsp;销售价：<span class="now_price">￥1999</span>
      </p>
      <p>购买数量：<numbox></numbox></p>
      <p>
        <mt-button type="primary" size="small">立即购买</mt-button>
        <mt-button type="danger" size="small">加入购物车</mt-button>
      </p>
    </div>
  </div>
</div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
  <div class="mui-card-header">商品参数</div>
  <div class="mui-card-content">
    <div class="mui-card-content-inner">
      <p>商品货号：</p>
      <p>库存情况：</p>
      <p>上架时间：</p>
    </div>
  </div>
  <div class="mui-card-footer">
    <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
    <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
  </div>
</div>
</div>
</template>

<script>
    import swiper from './swiper.vue';
    import numbox from './numBox.vue';
    export default{
        components: {
            swiper,
            numbox
        },
        data(){
            return{
                id: this.$route.params.id,
                lunbotu: []
            }
        },
        created() {
            this.getLunbotu();
            this.getGoodsInfo()
        },
        methods: {
            getLunbotu(){
                this.$http.get('api/getthumimages/' + this.id).then(res => {
                    // console.log(res);
                    if(res.body.status == 0) {
                        res.body.message.forEach(item => {
                            item.img = item.src;
                        });
                        this.lunbotu = res.body.message;
                    }
                })
            },
            getGoodsInfo(){
                this.$http.get('api/goods/getinfo/' + this.id).then(res => {
                    // console.log(res);
                    if(res.body.status == 0){
                        this.goodsinfo = res.body.message[0];
                    }
                })
            },
            goDesc(id){
                this.$router.push({name: 'goodsdesc',params: {id}})
            },
            goComment(id){
                this.$router.push({name: 'goodscomment',params: {id}})
            }
        }
    }
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
}
</style>

