import Vue from "vue";
import Router from "vue-router";
import Post from "@/components/Post";
import PostDetail from "@/components/PostDetail";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Post",
      component: Post
    },
    {
      path: "/postdetail",
      name: "postDetail",
      component: PostDetail
    }
  ]
});
