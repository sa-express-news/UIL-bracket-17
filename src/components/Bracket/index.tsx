import * as React from 'react';
import { Bracket as BracketProps } from '../../types';

import Game from '../Game';
import Node from '../Node';

const Bracket = ({ name, games, champion, identifier }: BracketProps) => {
    const gameComponents = games.map((game, index) => {
        return <Game location={game.location} time={game.time} nodes={game.nodes} key={index} />
    });

    return (
        <div className="Bracket">
            <h3>{name}</h3>
            {gameComponents}
            <Node id={champion.id} team={champion.team} parentIDs={champion.parentIDs} />
        </div>
    )
}

export default Bracket;