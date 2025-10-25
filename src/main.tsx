import {createRoot} from 'react-dom/client'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {BrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import {ThemeProviderWrapper} from "./ThemeProviderWrapper.tsx";
import './global.css'


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProviderWrapper>
            <BrowserRouter basename={'/tea'}>
                <App/>
            </BrowserRouter>
        </ThemeProviderWrapper>
    </Provider>
)