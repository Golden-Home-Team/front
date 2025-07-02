import {createContext, ReactNode, useContext} from "react";
import axios from "axios";

export type SignUpReq = {
    loginId: string;
    email: string;
    password: string;
    phoneNumber: string;
}

export type ApiResult = {
    success: boolean;
}

interface AuthContextProps {
    signUp: (SignUpReq) => Promise<ApiResult>;
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
    return (
        <AuthContext.Provider value={{signUp}}>
            {children}
        </AuthContext.Provider>
    )
}