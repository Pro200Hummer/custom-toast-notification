export type ToastType = 'SUCCESS' | 'ERROR' | 'INFO' | 'WARNING'
export type NotificationType = {
    id: string
    type: ToastType
    title: string
    message: string
}
export type Notifications = NotificationType[]

export enum ActionType {
    ADD_NOTIFICATION = 'ADD_NOTIFICATION',
    DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'
}

type AddNotification = {
    type: ActionType.ADD_NOTIFICATION
    payload: NotificationType
}

type DeleteNotification = {
    type: ActionType.DELETE_NOTIFICATION
    payload: string
}

export type ToastActions = AddNotification | DeleteNotification