import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [ ...state.items, action.payload ]
        },
        removeFromBasket: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        increment: (state, action) => {
          const  itemToUpdate =  state.items.find(item => item.id === action.payload);
          if(Number(itemToUpdate.quantity) < 5 && Number(itemToUpdate.quantity) >= 1) {
          itemToUpdate.quantity = (Number(itemToUpdate.quantity) + 1).toString();
          }
        },
        decrement: (state, action) => {
            const  itemToUpdate =  state.items.find(item => item.id === action.payload);
            if(Number(itemToUpdate.quantity) <= 5 && Number(itemToUpdate.quantity) > 1) {
            itemToUpdate.quantity = (Number(itemToUpdate.quantity) - 1).toString();
            }
        }
    }
});

export const { addToBasket, removeFromBasket, increment, decrement } = basketSlice.actions;

export const selectItems = state => state.basket.items;

export default basketSlice.reducer;