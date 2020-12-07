<template>
  <div class="app">
    <div class="row row-cols-3">
      <div class="col " v-for="post in posts" :key="post.title">
        <div
          class="card"
          @click="goDetail(post)"
          style="heigth: 28rem; max-width: 24rem; "
        >
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ post.name }}</h6>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mergeData } from "../definition";
import store from "../store/store";
import router from "../router/index";
import $ from "jquery";
export default {
  name: "HelloWorld",
  data() {
    return {
      posts: ""
    };
  },
  mounted() {
    if (store.state.firstCreate) {
      mergeData()
        .then(() => {
          this.posts = store.state.posts;
        })
        .then(() => {
          $(".card").on("click", evt => {
            $(".app").fadeOut("slow");
          });
        });
      store.state.firstCreate = !store.state.firstCreate;
    } else {
      this.posts = store.state.posts;
    }
  },
  methods: {
    goDetail(post) {
      store.state.detail = post;

      setTimeout(() => {
        router.push({ name: "postDetail" });
      }, 1000);
    }
  }
};
</script>
<style scoped>
@import "/Users/smeroglu/Desktop/hitit_task/src/sass/components/post.scss";
</style>
