import React from 'react'
import {configureStore} from '@reduxjs/toolkit';
import  useReducer  from '../reducers/userSlice';

const store = configureStore({
    reducer:{users:useReducer}

})

export default store