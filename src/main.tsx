import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "styled-components";
import {Theme} from "./style/theme";
import {GlobalStyle} from "./style/GlobalStyle";
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
import {AuthProvider} from "./context/AuthContext";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ThemeProvider theme={Theme}>
                    <GlobalStyle/>
                    <App/>
                </ThemeProvider>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
)
