<template>
  <div class="app">
    <div class="post">
      <h1>{{ title }}</h1>
      <h2>{{ author }}</h2>
      <p>{{ content }}</p>
      <div class="button">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#editModal"
        >
          Edit
        </button>
        <button
          type="button"
          class="btn btn-danger"
          data-toggle="modal"
          data-target="#deleteModal"
        >
          Delete
        </button>
      </div>
    </div>
    <edit-modal
      id="editModal"
      :postTitle="title"
      :postBody="content"
      :postId="detail.id"
    ></edit-modal>
    <delete-modal id="deleteModal" :postId="detail.id"></delete-modal>
  </div>
</template>
<script>
import $ from "jquery";
import { mapState } from "vuex";
import router from "../router/index";
import EditModal from "./modal/EditModal";
import DeleteModal from "./modal/DeleteModal";

export default {
  name: "PostDetail",
  components: { EditModal, DeleteModal },

  created() {
    this.title = this.detail.title;
    this.author = this.detail.name;
    this.content = this.detail.body;
  },
  computed: {
    ...mapState(["detail"]),
    title: function() {
      return this.detail.title;
    },
    content: function() {
      return this.detail.body;
    }
  }
};
</script>
<style scoped>
@import "/Users/smeroglu/Desktop/hitit_task/src/sass/components/postdetail.scss";
</style>
