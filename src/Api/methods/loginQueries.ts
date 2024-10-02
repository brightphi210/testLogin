import { LOGIN_ENDPOINT } from "../enpoints";
import { instance } from "../instance";

interface PayLoadProp {
    email: string;
    password: string;
}

export const loginQuery = (payload: PayLoadProp) => instance.post(LOGIN_ENDPOINT, payload)