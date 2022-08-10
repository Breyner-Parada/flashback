import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, createPosts, updatedPost, deletedPost, likePost, signIn, signUp } from "../Api";

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    getPosts(state, action) {
      return action.payload;
    },
    addPosts(state, action) {
      return [...state, action.payload];
    },
    upgradePosts(state, action) {
      return state.map(post => post._id === action.payload._id ? action.payload : post);
    },
    deletePosts(state, action) {
      return state.filter(post => post._id !== action.payload);
    },
    signUpUser(state, action) {
      localStorage.setItem('profile', JSON.stringify(action.payload));
      return state;
    }
  }
});

export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await fetchPosts();
      dispatch(getPosts(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const newPosts = (post) => {
  return async (dispatch) => {
    try {
      const { data } = await createPosts(post);
      dispatch(addPosts(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePost = (id, post) => {
  return async (dispatch) => {
    try {
      const { data } = await updatedPost(id, post);
      dispatch(upgradePosts(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await deletedPost(id);
      dispatch(deletePosts(id));
    } catch (error) {
      console.log(error);
    }
  };
};

export const likedPost = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await likePost(id);
      dispatch(upgradePosts(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const signin = (formData, Navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await signIn(formData);
      dispatch(signUpUser(data));
      Navigate('/flashback');
    } catch (error) {
      console.log(error);
    }
  };
};
export const signup = (formData, Navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await signUp(formData);
      dispatch(signUpUser(data));
      Navigate('/flashback');
    } catch (error) {
      console.log(error);
    }
  };
};

export const { addPosts, getPosts, upgradePosts, deletePosts, signUpUser } = postsSlice.actions;
export default postsSlice.reducer;
