import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "styled-components";
import {Theme} from "./common/style/theme";
import {GlobalStyle} from "./common/style/GlobalStyle";
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
import {AuthProvider} from "./domains/auth/context/AuthContext";
import {FacilityProvider} from "./domains/facility/context/FacilityContext";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {OverlayProvider} from 'overlay-kit';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <FacilityProvider>
                    <QueryClientProvider client={queryClient}>
                        <ThemeProvider theme={Theme}>
                            <OverlayProvider>
                                <GlobalStyle/>
                                <App/>
                            </OverlayProvider>
                        </ThemeProvider>
                    </QueryClientProvider>
                </FacilityProvider>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
)
