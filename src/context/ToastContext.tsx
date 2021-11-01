import React, {createContext, Dispatch, useReducer} from 'react';
import {Notifications, ToastActions} from "./context-types";

export const ToastContext = createContext<[Notifications, Dispatch<ToastActions>]>([[], () => {}]);

export const ToastContextProvider = (props: any) => {

    const notifications: Notifications = []

    const [state, dispatch] = useReducer((state: Notifications, action: ToastActions) => {
        switch (action.type) {
            case 'ADD_NOTIFICATION':
                return [...state, action.payload]
            case 'DELETE_NOTIFICATION':
                return state.filter(s => s.id !== action.payload)
            default:
                return state
        }
    }, notifications)

    return (
        <ToastContext.Provider value={[state, dispatch]}>
            {props.children}
        </ToastContext.Provider>
    )
}


