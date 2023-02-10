import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface InitialStateType {
    selectedTrait: number | undefined;
}

const initialState: InitialStateType = {
    selectedTrait: undefined,
}

export const slice = createSlice({
    name: 'traitBidCreation',
    initialState,
    reducers: {
        setSelectedTrait(state, {payload}: PayloadAction<number | undefined>){
            return {...state, selectedTrait: payload};
        }
    }
})

export const { setSelectedTrait } = slice.actions;

export const selectTraitBidCreation = state => state.traitBidCreation;

export default slice.reducer;