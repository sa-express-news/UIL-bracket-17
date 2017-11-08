import * as React from 'react';
import { Notification as NotificationProps } from '../../types';
import { updateNotification } from '../../actions';

import Button from '../Button';

const Notification = ({ message, buttonClickHandler }: NotificationProps) => {
    let component = null;

    if (message !== null) {
        component =
            <div className="Notification">
                <p>{message}</p>
                <Button text="OK" clickHandler={buttonClickHandler} />
            </div>;
    }

    return (
        <div>
            {component}
        </div>
    )
}

export default Notification;