import * as React from 'react';
import { Select as SelectProps } from '../../types';
import { updateBracketID, updateBracketIndex } from '../../actions';

const Select = ({ options, dispatch, onChange }: SelectProps) => {

    const handleChange = (event: Event): void => {
        const target = event.target as HTMLSelectElement;
        const updateIDAction = updateBracketID(target.value);
        const updateIndexAction = updateBracketIndex(target.selectedIndex);
        dispatch(updateIDAction);
        dispatch(updateIndexAction);
        onChange();
    }

    const optionComponents = options.map((option, index) => {
        return <option value={option.value} key={index}>{option.text}</option>;
    });

    return (
        <select onChange={handleChange as any}>
            {optionComponents}
        </select>
    )
}

export default Select;