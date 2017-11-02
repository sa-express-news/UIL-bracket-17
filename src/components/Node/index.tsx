import * as React from 'react';
import { Node as NodeProps } from '../../types';

import { updateNode } from '../../actions';

import Team from '../Team';

const Node = ({ id, team, childID, parentIDs, legalityFunction, updateNodeFunction }: NodeProps) => {

    const handleClick = (event: any): void => {
        event.preventDefault();
        const updateAction = updateNode(childID, { id: childID, team: team });
        updateNodeFunction(updateAction);
    }


    return (
        <div className="Node" onClick={handleClick}>
            {team !== null ? <Team name={team.name} colors={team.colors} logo={team.logo} /> : null}
        </div>
    )
}

export default Node;