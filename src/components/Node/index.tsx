import * as React from 'react';
import { Node as NodeProps } from '../../types';

import Team from '../Team';

const Node = ({ id, team, childID, parentIDs }: NodeProps) => {
    return (
        <div className="Node">
            {team !== null ? <Team name={team.name} colors={team.colors} logo={team.logo} /> : null}
        </div>
    )
}

export default Node;