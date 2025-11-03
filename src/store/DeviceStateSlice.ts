import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type DeviceType = 'laptop' | 'touchDevice'
export interface deviceState {
    deviceType: DeviceType
}

const initialState: deviceState = {
    deviceType: 'laptop',
}

export const deviceStateSlice = createSlice({
    name: 'deviceStateSlice',
    initialState,
    reducers: {
        setDeviceType:(state, action:PayloadAction<DeviceType>) => {
            state.deviceType = action.payload;
        },
    }

})
export default deviceStateSlice.reducer
export const {
    setDeviceType,
} = deviceStateSlice.actions;