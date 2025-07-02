export type SignUpReq = {
    loginId: string;
    email: string;
    password: string;
    phoneNumber: string;
}
export type LoginReq = {
    loginId: string;
    password: string;
}
export type LoginRes = {
    accessToken: string;
    refreshToken: string;
}