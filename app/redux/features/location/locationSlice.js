import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    country: 'United States'
}

export const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        getUserLocation: (state, action) => {
            state.country = action.payload
        }
    }
});

export const { getUserLocation } = locationSlice.actions;

export const selectLocation = state => state.location.country;

export default locationSlice.reducer;