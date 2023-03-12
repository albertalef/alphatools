import { createSlice } from "@reduxjs/toolkit";
import { InfoTask } from "@renderer/interfaces/AutoBidInterfaces";


export interface InitialStateType {
    addedTasks: InfoTask[],
}

const initialState: InitialStateType = {
    addedTasks: []
}

export const slice = createSlice({
    name: 'autoBidCreation',
    initialState,
    reducers: {
        loadTasks(state, { payload }) {
            return { ...state, addedTasks: payload }
        },
        addTask(state, { payload }) {
            return { ...state, addedTasks: [payload, ...state.addedTasks] }
        },
        removeTask(state, { payload }) {
            const newAddedTasks = [...state.addedTasks];
            return {
                ...state, addedTasks: [...newAddedTasks.slice(0, payload), ...newAddedTasks.slice(payload + 1)]
            };
        },
        clearAddedTasks(state){
            return {...state, addedTasks: []};
        }
    }
})

export const { loadTasks, addTask, removeTask, clearAddedTasks } = slice.actions;

export default slice.reducer;