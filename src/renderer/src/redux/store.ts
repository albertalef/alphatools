import { configureStore } from "@reduxjs/toolkit";
import autoBidCreationSlice from "./autoBid/autoBidCreationSlice";
import autoBidInstancesSlice, { autoBidInstancesMiddleware, updateTime } from "./autoBid/autoBidInstancesSlice";
import traitBidCreationSlice from "./traitBid/traitBidCreationSlice";
import userSlice from "./userSlice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        autoBidInstances: autoBidInstancesSlice,
        autoBidCreation: autoBidCreationSlice,
        traitBidCreation: traitBidCreationSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(autoBidInstancesMiddleware)
})

setInterval(() => {
    store.dispatch(updateTime());
}, 1000);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch