import * as React from 'react';
import { Notification as NotificationProps } from '../../types';

const Notification = ({ message }: NotificationProps) => {
    let component = null;

    if (message !== null) {
        component =
            <div className="Notification">
                <p>{message}</p>
            </div>;
    }

    return (
        <div>
            {component}
        </div>
    )
}

export default Notification;