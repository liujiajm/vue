<template>
    <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <vue-preview :slides="list" @close="getThumbs"></vue-preview>
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
</div>
</template>

<script>
import comment from './comment.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            photoinfo: {},
            list: []
        }
    },
    created() {
        this.getPhotoInfo();
        this.getThumbs()
    },
    methods: {
        getPhotoInfo() {
            this.$http.get('api/getimageInfo/' + this.id).then(res => {
                // console.log(res);
                if(res.body.status == 0) {
                    this.photoinfo = res.body.message[0]
                }
            })
        },
        getThumbs(){
            this.$http.get("api/getthumimages/" + this.id).then(res => {
                // console.log(res);
                if(res.body.status==0){
                    res.body.message.forEach(item => {
                        item.w = 600;
                        item.h = 500;
                        item.msrc = item.src
                    })
                    this.list = res.body.message
                }
            })
        },
    },
    components: {
        'cmt-box': comment
    }
}
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
}
/deep/ .my-gallery{
    display: flex;
    // flex-direction: row;
    flex-wrap: wrap;
    figure{
        width: 33.33%;
        margin: 0;
        padding: 3px;
        img{
            width: 100%
        }
    }
}
</style>

