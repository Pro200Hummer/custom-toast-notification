import React, {ChangeEvent, useContext, useState} from 'react';
import {Toast} from "./components/Toast";
import {ToastContext} from "./context/ToastContext";
import {ActionType} from "./context/context-types";
import {v1} from "uuid";
import "./Main.css";


/**
 * Add any test comment
 * */
export const App = () => {
    console.log("App rendered")
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
        <div className='wrapper'>
            <div className='main-content'>
                <div className='buttons'>
                    <button onClick={() => buttonHandler('SUCCESS')} className='btn-success'>SUCCESS</button>
                    <button onClick={() => buttonHandler('ERROR')} className='btn-error'>ERROR</button>
                    <button onClick={() => buttonHandler('INFO')} className='btn-info'>INFO</button>
                    <button onClick={() => buttonHandler('WARNING')} className='btn-warning'>WARNING</button>
                </div>
                <select
                    name="position-selector"
                    value={position}
                    onChange={positionHandler}
                    className='position-select'
                >
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
