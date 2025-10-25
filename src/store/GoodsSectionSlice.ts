import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TeaFormat {
    id: string;
    title: string;
    price: string;
    description: string;
    image: string;
}

export interface GoodsState {
    activeFormat: string;
    formats: TeaFormat[];
}

import standardTEA from '../assets/standardTEA.jpg';
import personalTEA from '../assets/personalTEA.jpg';
import examTEA from '../assets/examTEA.jpg';

const initialState: GoodsState = {
    activeFormat: 'standardTEA',
    formats: [
        {
            id: 'standardTEA',
            title: 'Standard',
            price: '1500 руб./час',
            description: 'Стандартный урок английского языка, охватывающий все аспекты: грамматику, лексику, аудирование и разговорную практику.',
            image: standardTEA
        },
        {
            id: 'personalTEA',
            title: 'Personal',
            price: '2500 руб./час',
            description: 'Персональный урок, разработанный специально под ваши цели и потребности. Индивидуальный подход и фокус на конкретных темах.',
            image: personalTEA
        },
        {
            id: 'examTEA',
            title: 'Exam',
            price: '2000 руб./час',
            description: 'Специализированная подготовка к экзаменам ОГЭ, ЕГЭ, IELTS или TOEFL. Прорабатываем экзаменационные стратегии и типовые задания.',
            image: examTEA
        }
    ]
};

const goodsSectionSlice = createSlice({
    name: 'goodsSection',
    initialState,
    reducers: {
        setActiveFormat: (state, action: PayloadAction<string>) => {
            state.activeFormat = action.payload;
        },
    },
});

export default goodsSectionSlice.reducer;
export const { setActiveFormat } = goodsSectionSlice.actions;
