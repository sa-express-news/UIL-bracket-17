import * as React from 'react';
import { Notification as NotificationProps } from '../../types';
import { updateNotification } from '../../actions';

import Button from '../Button';

import './Notification.css';

const Notification = ({ message, buttonClickHandler }: NotificationProps) => {

    let style = {
        display: 'none',
        transform: `translateY(-100%)`
    };

    if (message !== null) {
        style = {
            display: 'block',
            transform: `translateY(0)`
        }
    };

    let button = window.innerWidth < 768 ? null : <Button text="Okay" clickHandler={buttonClickHandler} />;

    return (
        <div className='Notification' style={style} onClick={buttonClickHandler as any}>
            <p>{message}</p>
            {button}
        </div>
    )
}

export default Notification;