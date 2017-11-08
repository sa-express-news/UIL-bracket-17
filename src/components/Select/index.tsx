import * as React from 'react';
import { Select as SelectProps } from '../../types';

const Select = ({ options }: SelectProps) => {

    const optionComponents = options.map((option) => {
        return <option value={option.value}>{option.text}</option>;
    });

    return (
        <select>
            {optionComponents}
        </select>
    )
}

export default Select;