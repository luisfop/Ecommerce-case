import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';
import hockeyPlayers from './hockey-players';

//main store

const store = configureStore({
    reducer: {
        hockeyPlayers: hockeyPlayers.reducer,
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
    }
})


export default store;