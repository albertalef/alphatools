import { createSlice } from "@reduxjs/toolkit";
import BotController from "@renderer/controllers/BotController";
import { BotInstanceInterface } from "@renderer/interfaces/AutoBidInterfaces";

export interface AutoBidInstancesState {
    instances: BotInstanceInterface[],
}

const initialState: AutoBidInstancesState = {
    instances: [],
}

export const slice = createSlice({
    name: 'autoBidInstances',
    initialState,
    reducers: {
        updateTime(state) {
            const instances = state.instances.map(instance => {
                if (instance.running) {
                    instance = { ...instance, timerCountSeconds: instance.timerCountSeconds + 1 };
                }
                return instance;
            })
            return { ...state, instances }
        },
        stopInstance(state, { payload }) {
            const instances = state.instances.map(instance => {
                if (instance.id == payload) {
                    BotController.stopTask(payload);
                    instance = { ...instance, running: false };
                }
                return instance;
            })
            return { ...state, instances }
        },
        setClosed(state, { payload }) {
            const instances = state.instances.map(instance => {
                if (instance.id == payload) {
                    instance = { ...instance, running: false };
                }
                return instance;
            })
            return { ...state, instances }
        },
        startInstance(state, { payload }) {
            const instances = state.instances.map(instance => {
                if (instance.id == payload) {
                    BotController.resumeTask(payload, instance.tasks);
                    instance = { ...instance, running: true };
                }
                return instance;
            })
            return { ...state, instances }
        },
        createInstance(state, { payload }) {
            const tasks = payload;
            const botId = BotController.createTask(tasks);

            const newInstance = { id: botId, running: true, tasks, timerCountSeconds: 0 };

            return { ...state, instances: [...state.instances, newInstance] };
        },
        deleteInstance(state, {payload}){
            const instanceIndex = state.instances.findIndex((instance) => instance.id == payload );
            BotController.stopTask(payload);
            return {...state, instances: [...state.instances.slice(0, instanceIndex), ...state.instances.slice(instanceIndex + 1)]}
        },
        removeTaskFromInstance(state, { payload }) {
            const instances = state.instances.map(instance => {
                if (instance.id == payload.instanceId) {
                    instance = { ...instance, tasks: [...instance.tasks.slice(0, payload.index), ...instance.tasks.slice(payload.index + 1)] }
                }
                return instance;
            })
            return {
                ...state, instances: instances.filter(instance =>
                    instance.tasks.length > 0
                )
            }
        }
    }
})

export const { updateTime, startInstance, stopInstance, createInstance, setClosed, removeTaskFromInstance, deleteInstance } = slice.actions;

export default slice.reducer;