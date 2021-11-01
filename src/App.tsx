import React, {ChangeEvent, useContext, useState} from 'react';
import {Toast} from "./components/Toast";
import {ToastContext} from "./context/ToastContext";
import {ActionType} from "./context/context-types";
import {v1} from "uuid";

export const App = () => {
    const [position, setPosition] = useState<string>('top-left')
    const [, dispatch] = useContext(ToastContext)

    const buttonHandler = (type: string) => {
        switch (type){
            case 'SUCCESS':
                return dispatch({
                    type: ActionType.ADD_NOTIFICATION,
                    payload:{id: v1(), type:"SUCCESS", title:'Success Title', message: 'Success message'}
                })
            case 'ERROR':
                return dispatch({
                    type: ActionType.ADD_NOTIFICATION,
                    payload:{id: v1(), type:"ERROR", title:'Error Title', message: 'Error message'}
                })
            case 'INFO':
                return dispatch({
                    type: ActionType.ADD_NOTIFICATION,
                    payload:{id: v1(), type:"INFO", title:'Info Title', message: 'Info message'}
                })
            case 'WARNING':
                return dispatch({
                    type: ActionType.ADD_NOTIFICATION,
                    payload:{id: v1(), type:"WARNING", title:'Warning Title', message: 'Warning message'}
                })
        }
    }

    const positionHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setPosition(e.currentTarget.value)
    }

    return (
        <div>
            <div className='main-content'>
                <button onClick={() => buttonHandler('SUCCESS')}>SUCCESS</button>
                <button onClick={() => buttonHandler('ERROR')}>ERROR</button>
                <button onClick={() => buttonHandler('INFO')}>INFO</button>
                <button onClick={() => buttonHandler('WARNING')}>WARNING</button>
                <select name="position-selector" value={position} onChange={positionHandler}>
                    <option value="top-left">Top-Left</option>
                    <option value="top-right">Top-Right</option>
                    <option value="bottom-left">Bottom-Left</option>
                    <option value="bottom-right">Bottom-Right</option>
                </select>
            </div>
            <Toast position={position} autoDeleteInterval={3000}/>
        </div>
    );
};
