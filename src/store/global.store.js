import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducerNotas from '../reducer/notas.reducer';
import reducerUser from '../reducer/user.reducer';

const reducer = combineReducers({user: reducerUser , notas: reducerNotas});
const store = configureStore({reducer})

export default store;
