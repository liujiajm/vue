<template>
<div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
    <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
    <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr>
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>
<comment-box :id="this.id"></comment-box>
</div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from './comment.vue';

    export default {
        data () {
            return {
                id: this.$route.params.id,
                newsinfo: {}
            }
        },
        created () {
            this.getNewInfo()
        },
        components: {
            'comment-box': comment
        },
        methods: {
            getNewInfo() {
                this.$http.get('api/getnew/' + this.id).then(res => {
                    if(res.body.status === 0) {
                        this.newsinfo = res.body.message[0];
                    } else {
                        Toast('获取news失败')
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    /deep/ img {
      width: 100%;
    }
  }
}
</style>

