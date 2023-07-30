import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const userList = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState: {userList},
  reducers: {
    addUser:(state,action)=>{
        console.log(state);
        console.log(action);
        state.userList.push(action.payload);
    },
    editUser:(state,action)=>{
        const {id,name,username,email} = action.payload
        state.userList[id-1].name = name;
        state.userList[id-1].username = username;
        state.userList[id-1].email = email;
    },
    deleteUser:(state,action)=>{
        const {id} = action.payload;
        state.userList = state.userList.filter(f=>f.id !== +id)
    }
  },
});


export default userSlice.reducer;
export const {addUser,editUser,deleteUser} = userSlice.actions
