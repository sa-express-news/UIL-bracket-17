import * as React from 'react';
import { Bracket as BracketProps, Team } from '../../types';

import Game from '../Game';
import Node from '../Node';

import { UpdateNode, updateNode } from '../../actions'

import { isTeamUpdateLegal } from '../../data-structures/bracket';

interface BracketState {
    gameIndex: number;
}

export default class Bracket extends React.Component<BracketProps, BracketState>{
    constructor() {
        super();
        this.state = {
            gameIndex: 0
        };
    }

    isNodeUpdateLegal = (id: number, team: Team): boolean => {
        return isTeamUpdateLegal(this.props, id, team);
    }

    dispatchNodeUpdate = (action: UpdateNode): Function => {
        return this.props.dispatch(action);
    }

    updateGameIndex = (): void => {
        this.setState((prevState: BracketState, props: BracketProps) => {
            return {
                gameIndex: prevState.gameIndex > this.props.games.length ? 0 : prevState.gameIndex + 1
            };
        });
    }

    render() {
        const gameComponents = this.props.games.map((game, index) => {
            return <Game location={game.location} time={game.time} nodes={game.nodes}
                legalityFunctionForNodes={this.isNodeUpdateLegal}
                updateNodeFunction={this.dispatchNodeUpdate}
                updateGameIndexFunction={this.updateGameIndex} key={index} />
        });

        let visibleComponent = null;

        if (this.state.gameIndex < gameComponents.length) {
            visibleComponent = gameComponents[this.state.gameIndex];
        } else {
            visibleComponent = <Node id={this.props.champion.id} team={this.props.champion.team}
                parentIDs={this.props.champion.parentIDs} legalityFunction={this.isNodeUpdateLegal}
                updateGameIndexFunction={(): null => null} />
        }

        return (
            <div className="Bracket">
                <h3>{name}</h3>
                {visibleComponent}
            </div>
        )
    }
}