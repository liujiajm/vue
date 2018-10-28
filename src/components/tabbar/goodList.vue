<template>
    <mt-loadmore :autoFill='false' :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
    <div class="goods-list">
        <div class="goods-item" v-for="(item,index) in goodslist" :key="index" @click="goDatail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>
    </div>
</mt-loadmore>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageindex: 1,
      goodslist: [],
      allLoaded: false
    };
  },
  created() {
    this.getGoodList();
    // this.goDatail()
  },
  methods: {
    getGoodList() {
      this.$http.get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status != 0) {
            Toast(result.body.message);
            return;
          }
          if (this.pageindex == 1) {
            // 重置下拉状态
            this.$refs.loadmore.onTopLoaded();
            // 直接赋值第一页的数据
            this.goodslist = result.body.message;
          } else {
            // 重置上拉状态
            if (result.body.message.length == 0) {
              this.allLoaded = true;
            }
            // 重置上拉状态
            this.$refs.loadmore.onBottomLoaded();
            this.goodslist = this.goodslist.concat(result.body.message);
          }
        });
    },
    loadTop() {
      console.log("下拉");
      this.pageIndex = 1;
      this.getGoodList();
    },
    loadBottom() {
      console.log("上拉");
      this.pageindex++;
      this.getGoodList();
    },
    goDatail(id) {
        // this.$router.push({ name: "goodsInfo", params: { id } });
        this.$router.push({ path: "/goods/goodsInfo/" + id });
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>

