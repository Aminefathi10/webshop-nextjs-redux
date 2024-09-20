import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.items = [ ...state.items, action.payload ]
        },
        removeFromFavorite: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export const selectItems = state => state.favorite.items;

export default favoriteSlice.reducer;