import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import hockeyPlayers from './hockey-players';

//main store

const store = configureStore({
    reducer: {
        hockeyPlayers: hockeyPlayers.reducer,
        auth: authSlice.reducer,
    }
})


export default store;