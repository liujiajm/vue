<template>
  <div>
      <!-- 轮播图 -->
      <swiper :lunbotu-list="swipeList" :isfull="true"></swiper>
    <!-- 九宫格商品 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <router-link to="/home/newList" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../assets/images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></a></router-link>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <router-link to="/home/photolist">
              <img src="../../assets/images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div>
              </router-link>
              </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/goods/goodList'>
              <img src="../../assets/images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../assets/images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../assets/images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../assets/images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
  </ul> 
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from './swiper.vue';

export default {
  data() {
    return {
      swipeList: []
    };
  },
  created() {
    this.getSwipe();
  },
  components:{
    swiper,
  },
  methods: {
    getSwipe() {
      this.$http.get("api/getlunbo").then(res => {
        // console.log(res);
        if (res.body.status === 0) {
          this.swipeList = res.body.message;
        //   console.log(this.swipeList);
        } else {
          Toast("加载轮播图失败...");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body{
    font-size: 14px;
  }

  .mui-table-view-cell {
  border: 0;
}
}
</style>
