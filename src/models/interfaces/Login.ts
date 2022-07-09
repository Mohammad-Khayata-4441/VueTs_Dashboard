export interface LoginModel {
    username: string;
    password: string;
    rememberMe: boolean;
    email?: string;
    phoneNumber?: string;
}