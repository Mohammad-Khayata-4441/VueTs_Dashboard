import { Authentication as AuthenticationApi } from '@/api'
import { AppConfig } from '@api'
import type { LoginModel } from '@/models/interfaces'
import axios from 'axios'  
const Login_Api = AppConfig.DOMAIN_HOST + AuthenticationApi.Login
class Authentication {
    static Login(payload: LoginModel): void {
        axios.post(Login_Api, payload)
    }

} 