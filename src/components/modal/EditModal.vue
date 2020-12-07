<template>
  <div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Post</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label class="col-form-label">Title:</label>
              <input type="text" class="form-control" v-model="postTitle" />
            </div>
            <div class="form-group">
              <label class="col-form-label">Content:</label>
              <textarea class="form-control" v-model="postBody"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button
            id="save"
            type="button"
            class="btn btn-success"
            data-dismiss="modal"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { updatePost } from "/Users/smeroglu/Desktop/hitit_task/src/definition.js";
import $ from "jquery";
import store from "../../store/store";

export default {
  name: "edit",
  props: ["postTitle", "postBody", "postId"],

  mounted() {
    $("#save").on("click", evt => {
      store.state.detail.title = this.postTitle;
      store.state.detail.content = this.postBody;

      updatePost(this.postTitle, this.postBody, this.postId);
    });
  }
};
</script>
<style scoped>
@import "/Users/smeroglu/Desktop/hitit_task/src/sass/components/editmodal.scss";
</style>
