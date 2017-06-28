import axios from 'axios';

export const USER_DATA = 'USER_DATA';
export const ADD_POST = 'ADD_POST';
export const POSTS_DATA = 'POSTS_DATA';
export const CREATE_POST = 'CREATE_POST';

const BASE_URL = "https://jsonplaceholder.typicode.com/"

export function getDevProfile(email)
{
  var url = `${BASE_URL}users?email=${email}`;
  var request = axios.get(url);


  return {
          type: USER_DATA,
          payload: request
        }

        // request.then(() => callback());
}

export function createPost(title, body, userId,callback)
{
  console.log("creating post...");
  var url = `${BASE_URL}posts`;
  var post_data = {
    userId: userId,
    title: title,
    body: body
  }

  const request = axios
    .post(url, post_data)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPosts(userId)
{
  var url = `${BASE_URL}posts?userId=${userId}`;
  var request = axios.get(url);

  return {
          type: POSTS_DATA,
          payload: request
        }
}

export function addPostToView(post)
{
  console.log("adding post...")
  post.id = (new Date()).getTime();

  return {
          type: ADD_POST,
          payload: post
        }
}
