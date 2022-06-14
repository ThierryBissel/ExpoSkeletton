import { Action } from "redux";
import { CONNECT, DISCONNECT } from "../actionsTypes";

let initialState = {
    mail: "",
    firstName: "",
    lastName: "",
    id: ""
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CONNECT:
            {
                const { mail, firstName, lastName, id } = action.payload
                return {
                    mail,
                    firstName,
                    lastName,
                    id
                }
            }
        case DISCONNECT:
            {
                return {}
            }
        default:
            return state;
    }
}