import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "styled-components";
import {Theme} from "./style/theme";
import {GlobalStyle} from "./style/GlobalStyle";
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
import {AuthProvider} from "./context/AuthContext";
import {FacilityProvider} from "./context/FacilityContext";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <FacilityProvider>
                    <QueryClientProvider client={queryClient}>
                        <ThemeProvider theme={Theme}>
                            <GlobalStyle/>
                            <App/>
                        </ThemeProvider>
                    </QueryClientProvider>
                </FacilityProvider>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
)
