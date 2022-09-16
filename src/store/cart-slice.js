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
            //get the item that already exist on cart
            const existingItem = state.itemList.find((item) => item.id === newItem.id );

            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }else{
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
            }
            state.totalQuantity++;
        },
        removeFromCart(){},
        showCart(state){
            state.showCart = !state.showCart
        }


    }
})


export const cartActions = cartSlice.actions;


export default cartSlice;