import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface modalState {
    isModalOpen:boolean
    isErrorOpen:boolean
    errorMessage:string
}

const initialState: modalState = {
    isModalOpen: false,
    isErrorOpen: false,
    errorMessage: ''
}

export const modalWindowSlice = createSlice({
    name: 'modalWindowSlice',
    initialState,
    reducers: {
        setIsModalWindowOpen:(state, action:PayloadAction<boolean|undefined>) => {
            if (action.payload === undefined) state.isModalOpen = !state.isModalOpen
            else{
                state.isModalOpen = action.payload
            }
        },
        setIsErrorWindowOpen:(state, action:PayloadAction<boolean|undefined>) => {
            if (action.payload === undefined) state.isErrorOpen = !state.isErrorOpen
            else{
                state.isErrorOpen = action.payload
            }
        },
        setErrorMessage:(state, action:PayloadAction<string|undefined>) => {
            if (action.payload === undefined) state.errorMessage = ''
            else{
                state.errorMessage = action.payload
            }
        }
    }

})
export default modalWindowSlice.reducer
export const {
    setIsModalWindowOpen,
    setIsErrorWindowOpen,
    setErrorMessage
} =  modalWindowSlice.actions