import React, {createContext, useReducer} from 'react';
import {v1} from 'uuid';
import {Notifications, NotificationType} from "./context-types";

export const ToastContext = createContext<Notifications>([]);

export const ToastContextProvider = (props: any) => {

    const notifications: Notifications = [
        {
            id: v1(),
            type: 'SUCCESS',
            title: 'Successfully fetched data',
            message: 'Successfully retrieved all posts'
        }
    ]

    const [state, dispatch] = useReducer((state: Notifications, action: ActionsType) => {
        switch (action.type) {
            case 'ADD_NOTIFICATION':
                return state
            case 'DELETE_NOTIFICATION':
                return state
            default:
                return state
        }
    }, notifications)

    type ActionsType =
        | ReturnType<typeof addNotification>
        | ReturnType<typeof deleteNotification>

    const addNotification = (params: NotificationType) =>
        ({type: 'ADD_NOTIFICATION', payload: {...params}} as const)
    const deleteNotification = (id: string) => ({type: 'DELETE_NOTIFICATION', payload: id} as const)

    return (
        <ToastContext.Provider value={notifications}>
            {props.children}
        </ToastContext.Provider>
    )
}


