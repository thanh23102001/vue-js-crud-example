<template>
  <div v-if="currentBlog" class="edit-form">
    <h4>Blog</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentBlog.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Content</label>
        <input type="text" class="form-control" id="description"
          v-model="currentBlog.content"
        />
      </div>
    </form>

    <button class="badge badge-danger mr-2"
      @click="deleteBlog"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateBlog"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import BlogDataService from "../services/BlogDataService";

export default {
  name: "blog",
  data() {
    return {
      currentBlog: null,
      message: ''
    };
  },
  methods: {
    getBlog(id) {
      BlogDataService.get(id)
        .then(response => {
          this.currentTutorial = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateBlog() {
      BlogDataService.update(this.currentBlog.id, this.currentBlog)
        .then(response => {
          console.log(response.data);
          this.message = 'The blog was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteBlog() {
      BlogDataService.delete(this.currentBlog.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "blogs" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTutorial(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
