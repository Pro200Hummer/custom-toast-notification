export type ToastType = 'SUCCESS' | 'DANGER' | 'INFO' | 'WARNING'
export type NotificationType = {
    id: string
    type: ToastType
    title: string
    message: string
}
export type Notifications = NotificationType[]