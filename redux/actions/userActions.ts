import { CONNECT, DISCONNECT } from "../actionsTypes";

export const connectUser = (mail: String, firstName: String, lastName: String, id: Number) => {
    return {
        type: CONNECT,
        payload: {
            mail,
            firstName,
            lastName,
            id
        }
    }
}

export const disconnectUser = () => {
    return {
        type: DISCONNECT,
        payload: {}
    }
}