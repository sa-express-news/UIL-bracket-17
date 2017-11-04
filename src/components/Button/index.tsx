import * as React from 'react';
import { Button as ButtonProps } from '../../types';

const Button = ({ text, clickHandler }: ButtonProps) => {

    return (
        <button onClick={!clickHandler ? (): null => null : clickHandler as any}>{text}</button>
    )

}

export default Button;