import * as React from 'react';
import { Team as TeamProps } from '../../types';

const Team = ({ name, logo, colors }: TeamProps) => {
    return (
        <div className="Team">
            <p>{name}</p>
        </div>
    )
}

export default Team;
