<template>
  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Alert</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this post?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>

          <button
            id="delete"
            type="button"
            class="btn btn-danger"
            data-dismiss="modal"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { deletePost } from "/Users/smeroglu/Desktop/hitit_task/src/definition.js";
import $ from "jquery";

import router from "../../router/index";

export default {
  name: "delete",
  props: ["postId"],
  mounted() {
    $("#delete").on("click", evt => {
      deletePost(this.postId)
        .then(() => router.push({ name: "Post" }))
        .then(() => {
          this.$toasted.show("User successfully added..!");
        });
    });
  }
};
</script>
