import { createSlice } from '@reduxjs/toolkit';


const hockeyPlayers = createSlice({
    name:'players',
    initialState:  {players: [{name: 'Luis', age: 29, shots: 'left', playable: true}, {name: 'Ovechkin', age: 35, shots: 'right', playable: true}]},


    reducers: {
        showPlayers(state){
            console.log('This is my players => ',state.players)
        }
    }
})

export const playersActions = hockeyPlayers.actions;

export default hockeyPlayers