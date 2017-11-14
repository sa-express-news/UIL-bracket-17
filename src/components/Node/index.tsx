import * as React from 'react';
import { Node as NodeProps } from '../../types';

import { updateNode } from '../../actions';

import Team from '../Team';

import './Node.css';

const Node = ({ id, team, childID, parentIDs, legalityFunction, updateNodeFunction, updateGameIndexFunction, touchEnabled }: NodeProps) => {

    const handleClick = (event: any): void => {
        event.preventDefault();
        if (touchEnabled) {
            const updateAction = updateNode(id, team);
            if (updateNodeFunction) { updateNodeFunction(updateAction); }
            updateGameIndexFunction();
        }
    };

    const handleDragOver = (event: DragEvent): void => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    }

    const handleDrop = (event: DragEvent): void => {
        event.preventDefault();
        if (!touchEnabled) {
            const desiredTeam = JSON.parse(event.dataTransfer.getData('text'));
            if (legalityFunction(id, desiredTeam)) {
                const updateAction = updateNode(id, desiredTeam);
                updateNodeFunction(updateAction);
            }
        }
    }

    return (
        <div className="Node" onClick={touchEnabled ? handleClick : null} onDragOver={handleDragOver as any} onDrop={!touchEnabled ? handleDrop as any : null}>
            {team !== null ? <Team name={team.name} colors={team.colors} logo={team.logo} /> : null}
        </div>
    );
};

export default Node;