import * as React from 'react';
import { Bracket as BracketProps, Team } from '../../types';

import Game from '../Game';
import Node from '../Node';

import * as bracketFunctions from '../../data-structures/bracket';

const Bracket = (bracket: BracketProps) => {
    const { name, games, champion, identifier } = bracket;
    const gameComponents = games.map((game, index) => {
        return <Game location={game.location} time={game.time} nodes={game.nodes} legalityFunctionForNodes={isNodeUpdateLegal} key={index} />
    });

    const isNodeUpdateLegal = (id: number, team: Team): boolean => {
        return bracketFunctions.isTeamUpdateLegal(bracket, id, team);
    }

    return (
        <div className="Bracket">
            <h3>{name}</h3>
            {gameComponents}
            <Node id={champion.id} team={champion.team} parentIDs={champion.parentIDs} legalityFunction={isNodeUpdateLegal} />
        </div>
    )
}

export default Bracket;