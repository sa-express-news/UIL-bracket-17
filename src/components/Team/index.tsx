import * as React from 'react';
import { Team as TeamProps } from '../../types';

import './Team.css';

const Team = (teamProps: TeamProps) => {
    const { name, colors, logo } = teamProps;

    const handleDragStart = (event: DragEvent): void => {
        event.dataTransfer.setData('text/plain', JSON.stringify(teamProps));
        event.dataTransfer.dropEffect = 'copy';
    }

    return (
        <div className="Team" draggable={window.innerWidth > 767} onDragStart={handleDragStart as any}>
            <p>{name}</p>
        </div>
    )
}

export default Team;
