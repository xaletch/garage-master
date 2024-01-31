import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedCategory: '',
    caseItems: [],
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setCaseItems: (state, action) => {
            state.caseItems = action.payload;
        },
    },
});

export const { setSelectedCategory, setCaseItems } = categorySlice.actions;

export default categorySlice.reducer;