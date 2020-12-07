import axios from "axios";
import { post } from "jquery";
import store from "./store/store";
let url = "https://jsonplaceholder.typicode.com/";

export function getPosts() {
  axios
    .get(url + "posts")
    .then(response =>
      localStorage.setItem("posts", JSON.stringify(response.data))
    );
}

export function getUsers() {
  let username = [];
  axios
    .get(url + "users")
    .then(response => (response = response.data))
    .then(data => {
      data.forEach(element => {
        username.push({
          name: element.name
        });
      });
    })
    .then(() => localStorage.setItem("users", JSON.stringify(username)));
}

export async function mergeData() {
  await getPosts();
  await getUsers();
  let posts = await JSON.parse(localStorage.getItem("posts"));
  await refreshData(posts);
}

export async function deletePost(postid) {
  let posts = await JSON.parse(localStorage.getItem("posts"));
  let isId = element => element.id === postid;
  let index = posts.findIndex(isId);
  posts.splice(index, 1);
  await refreshData(posts);
}
export async function updatePost(title, body, postid) {
  let posts = await JSON.parse(localStorage.getItem("posts"));
  let isId = element => element.id === postid;
  let index = posts.findIndex(isId);
  posts[index].title = title;

  posts[index].content = body;

  await refreshData(posts);
}

export async function refreshData(posts) {
  let id;
  let users = await JSON.parse(localStorage.getItem("users"));
  posts.forEach(element => {
    id = element.userId;
    element.name = users[--id].name;
  });
  await localStorage.setItem("posts", JSON.stringify(posts));
  store.state.posts = await JSON.parse(localStorage.getItem("posts"));
}
