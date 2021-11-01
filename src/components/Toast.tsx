import React, {FC, useContext} from 'react';
import {ToastContext} from "../context/ToastContext";
import './Toast.css';
import {ActionType, ToastType} from "../context/context-types";
import {FaCheck, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle, FaRegWindowClose} from "react-icons/all";

type ToastPropsType = {
    position: string
}

export const Toast: FC<ToastPropsType> = props => {
    const {position} = props

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
    const generateBackgroundColor = (type: ToastType) => {
        switch (type) {
            case 'SUCCESS':
                return '#2AA80AFF'
            case 'INFO':
                return '#10b795'
            case 'WARNING':
                return '#CCAA07FF'
            case 'ERROR':
                return '#CC0707FF'
            default:
                return
        }
    }

    const deleteToast = (id: string) => {
        dispatch({type: ActionType.DELETE_NOTIFICATION, payload: id})
    }

    return (
        <div className={`notification-container ${position}`}>
            {state.map(n => {
                return (
                    <div
                        key={n.id}
                        className='notification toast'
                        style={{backgroundColor: generateBackgroundColor(n.type)}}
                    >
                        <FaRegWindowClose className='close-button' onClick={() => deleteToast(n.id)}/>
                        <div className='notification-image'>
                            {generateIcon(n.type)}
                        </div>
                        <div>
                            <p className='notification-title'>{n.title}</p>
                            <p className='notification-message'>{n.message}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};