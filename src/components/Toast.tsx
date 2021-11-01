import React, {useContext} from 'react';
import {ToastContext} from "../context/ToastContext";
import style from './Toast.module.scss';
import {ToastType} from "../context/context-types";
import {FaCheck, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle} from "react-icons/all";

export const Toast = () => {
    const [state, dispatch] = useContext(ToastContext);

    const generateIcon = (type: ToastType) => {
        switch (type) {
            case 'SUCCESS':
                return <FaCheck/>
            case 'INFO':
                return <FaInfoCircle/>
            case 'WARNING':
                return <FaExclamationTriangle/>
            case 'ERROR':
                return <FaExclamationCircle/>
            default:
                return
        }
    }

    return (
        <div className={style.notificationContainer}>
            {state.map((n, index) => {
                return (
                    <div key={n.id} className={style.toast}>
                        <div className={style.notificationImage}>
                            {generateIcon(n.type)}
                        </div>
                        <div>
                            <p className={style.notificationTitle}>{n.title}</p>
                            <p className={style.notificationMessage}>{n.message}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};