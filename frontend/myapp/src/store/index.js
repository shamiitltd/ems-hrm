// src/store/index.js
import { createStore } from 'redux';
import rootReducer from '../reducers'; // Ensure this path is correct

const store = createStore(rootReducer);

export default store;