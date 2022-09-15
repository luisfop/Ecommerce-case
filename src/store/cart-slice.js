import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        itemList: [],
        totalQuantity: 0,
        showCart: false
    },

    reducers: {

        addItemToCart(state,action){
            const newItem = action.payload;

            //to check if the item is already on cart
            const existingItem = state.itemList.find((item) => item.id === newItem.id );

            if(existingItem){
                existingItem.totalQuantity++;
                existingItem.price += newItem.price;
            }else{
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
            }

        },
        removeFromCart(){},
        showCart(state){
            state.showCart = true
        }


    }
})


export const cartActions = cartSlice.actions;


export default cartSlice;