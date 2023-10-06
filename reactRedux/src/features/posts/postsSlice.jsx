import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Learning redux toolkit', content: "Really some good stuff"},
    { id: '2', title: 'Slices', content: "A slice is a collection of reducer logic and actions for a single feature in the application"}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action){
            state.push(action.payload);
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions

export default postSlice.reducer;