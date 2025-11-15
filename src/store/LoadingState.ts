import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface loadingState {
    loading: 'idle' | 'loading' | 'ready' |'lastSecond' | 'success'
}

const initialState: loadingState = {
    loading: 'idle',
}

export const loadingStateSlice = createSlice({
    name: 'loadingStateSlice',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<'idle' | 'loading' | 'ready' |'lastSecond' | 'success'>) => {
            state.loading = action.payload;
        },
    }

})
export default loadingStateSlice.reducer
export const {
    setLoading,
} = loadingStateSlice.actions;