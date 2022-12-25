import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const API_URL = 'https://traveldiariesserver.onrender.com';

export const gettAllPosts = async () => {
  const data = await axios.get(API_URL + '/posts');

  return data.data;
};

export const getUser = async (id) => {
  const user = await axios.get(`${API_URL}/user/${id}`);

  return user.data;
};

export const sendAuthReq = async (signup, data) => {
  const Data = await axios
    .post(`${API_URL}/user/${signup ? 'signup' : 'login'}`, {
      name: data.name ? data.name : null,
      image: data.image ? data.image : null,
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));
  const userData = await Data.data;
  return userData;
};

export const addPost = async (postData) => {
  const data = await axios.post(`${API_URL}/posts/add_post`, {
    title: postData.title,
    description: postData.description,
    location: postData.location,
    image: postData.image,
    user: postData.user,
  });
  return data.data;
};

export const deletePostByID = async (id) => {
  const data = await axios.delete(`${API_URL}/posts/${id}`);
  return data;
};

export const getPostById = async (post_id, user_id) => {
  const post = await axios.get(`${API_URL}/posts/${post_id}`, {
    user: user_id,
  });
  return post;
};

export const editPost = async (id, data) => {
  const post = await axios.patch(`${API_URL}/posts/${id}/edit`, {
    title: data.title,
    description: data.description,
    location: data.location,
  });

  return post.data;
};
