import { createSlice } from "@reduxjs/toolkit"
import PrivateConfigService from "@renderer/services/PrivateConfigService";



export const slice = createSlice({
    name: 'user',
    initialState: {
        walletKey: PrivateConfigService.getValue("WALLET_PRIVATE_KEY") || "",
        walletAddress: PrivateConfigService.getValue("ADDRESS") || "",
    },
    reducers: {
        changeWallet(state, { payload }) {

            PrivateConfigService.setValue("WALLET_PRIVATE_KEY", payload);

            return { ...state, walletKey: payload };
        },
        changeAddress(state, { payload }) {

            PrivateConfigService.setValue("ADDRESS", payload);
            
            return { ...state, walletAddress: payload };
        }
    }
})

export const { changeWallet, changeAddress } = slice.actions;


export default slice.reducer;