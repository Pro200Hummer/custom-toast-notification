import React, {createContext, Dispatch, useReducer} from 'react';
import {Notifications, NotificationType, ToastActions} from "./context-types";
import {v1} from 'uuid';

export const ToastContext = createContext<[Notifications, Dispatch<ToastActions>]>([[], () => {}]);

export const ToastContextProvider = (props: any) => {

    const notifications: Notifications = [
        {
            id: v1(),
            type: 'SUCCESS',
            title: 'Successfully fetched data',
            message: 'Successfully retrieved all posts'
        }
    ]

    const [state, dispatch] = useReducer((state: Notifications, action: ToastActions) => {
        switch (action.type) {
            case 'ADD_NOTIFICATION':
                return state
            case 'DELETE_NOTIFICATION':
                return state
            default:
                return state
        }
    }, notifications)

    const addNotification = (params: NotificationType) =>
        ({type: 'ADD_NOTIFICATION', payload: {...params}})
    const deleteNotification = (id: string) => ({type: 'DELETE_NOTIFICATION', payload: id})

    return (
        <ToastContext.Provider value={[state, dispatch]}>
            {props.children}
        </ToastContext.Provider>
    )
}


