import * as React from 'react';
import { Notification as NotificationProps } from '../../types';
import { updateNotification } from '../../actions';

import Button from '../Button';

import './Notification.css';

const Notification = ({ message, buttonClickHandler }: NotificationProps) => {

    let style = {
        transform: `translateY(-100%)`
    };

    if (message !== null) {
        style = {
            transform: `translateY(0)`
        }
    };

    return (
        <div className='Notification' style={style} onClick={buttonClickHandler as any}>
            <p>{message}</p>
            <Button text="OK" clickHandler={buttonClickHandler} />
        </div>
    )
}

export default Notification;