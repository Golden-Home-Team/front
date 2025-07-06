import {createContext, ReactNode, useContext} from "react";
import axios from "axios";
import type {LoginReq, LoginRes, SignUpReq} from "../types/auth";
import type {ApiResult} from "../types/api";

interface AuthContextProps {
    signUp: (req: SignUpReq) => Promise<ApiResult>;
    login: (req: LoginReq) => Promise<LoginRes>;
    checkUserExists: (id : SignUpReq["loginId"]) => Promise<Boolean>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const signUp = async (req: SignUpReq): Promise<ApiResult> => {
        const res = await axios.post('/api/users/signup', req);

        if(res.status != 200) {
            throw new Error(`Sign up failed with status code ${res.status}`);
            //todo 서버와 예외처리를 어떻게 할지 협의
        }

        return res.data as ApiResult;
    }

    const login = async (req: LoginReq): Promise<LoginRes> => {
        const res = await axios.post('/api/auth', req);

        if(res.status != 200) {
            throw new Error(`Login failed with status code ${res.status}`);
        }

        return res.data as LoginRes;
    }

    const checkUserExists = async (id: SignUpReq["loginId"]): Promise<Boolean> => {
        const res = await axios.get(`/api/users/signup/loginId/duplicated?loginId=${id}`);
        if(res.status == 200) {
            return true
        }

        if(res.status == 409) {
            return false
        }

        throw new Error(`Check user existence failed with status code ${res.status}`);
    }

    return (
        <AuthContext.Provider value={{signUp, login, checkUserExists}}>
            {children}
        </AuthContext.Provider>
    )
}