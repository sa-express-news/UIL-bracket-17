import * as React from 'react';
import { Button as ButtonProps } from '../../types';

const Button = ({ text, disabled, clickHandler }: ButtonProps) => {

    return (
        <button disabled={disabled} onClick={!clickHandler ? (): null => null : clickHandler as any}>{text}</button>
    )

}

export default Button;