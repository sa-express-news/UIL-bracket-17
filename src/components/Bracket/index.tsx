import * as React from 'react';
import { Bracket as BracketProps, Team, PostBracketRequest } from '../../types';

import Game from '../Game';
import Node from '../Node';
import Button from '../Button';
import Select from '../Select';
import SwipeContainer from '../SwipeContainer';

import { UpdateNode, updateNode, updateBracketID, postBracket, fetchBracket } from '../../actions'

import { isTeamUpdateLegal, isBracketComplete } from '../../data-structures/bracket';

import './Bracket.css';

interface BracketState {
    gameIndex: number;
}

export default class Bracket extends React.Component<BracketProps, BracketState>{
    constructor(props: BracketProps) {
        super(props);
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

    postBracketToServer = (): Function => {
        // const hearstCookie = JSON.parse(decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent('hrstptok').replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")));
        const userEmail = 'kfarhang0@gmail.com';
        const bracket: BracketProps = {
            name: this.props.name,
            games: this.props.games,
            champion: this.props.champion,
            identifier: this.props.identifier
        };

        const dataToSend: PostBracketRequest = {
            bracket: bracket,
            email: userEmail,
            conferenceDivision: this.props.identifier
        };

        return this.props.dispatch(postBracket(dataToSend));
    }

    incrementGameIndex = (): void => {
        this.setState((prevState: BracketState, props: BracketProps) => {
            return {
                gameIndex: prevState.gameIndex === this.props.games.length ? 0 : prevState.gameIndex + 1
            };
        });
    }

    decrementGameIndex = (): void => {
        this.setState((prevState: BracketState, props: BracketProps) => {
            return {
                gameIndex: prevState.gameIndex === 0 ? this.props.games.length : prevState.gameIndex - 1
            };
        });
    }

    componentDidMount(): void {
        if (this.props.bracketID) {
            this.props.dispatch(fetchBracket(this.props.bracketID))
        }
    }

    render() {
        const gameComponents = this.props.games.map((game, index) => {
            return <Game location={game.location} time={game.time} nodes={game.nodes}
                legalityFunctionForNodes={this.isNodeUpdateLegal}
                updateNodeFunction={this.dispatchNodeUpdate}
                updateGameIndexFunction={this.incrementGameIndex} key={index} />
        });

        const championNode = <Node id={this.props.champion.id} team={this.props.champion.team}
            parentIDs={this.props.champion.parentIDs} legalityFunction={this.isNodeUpdateLegal}
            updateNodeFunction={this.dispatchNodeUpdate} updateGameIndexFunction={(): null => null} />;

        const divisionOptions = [
            {
                value: 'div1_1a',
                text: 'Division 1, 1A'
            },
            {
                value: 'div2_1a',
                text: 'Division 2, 1A'
            },
            {
                value: 'div1_2a',
                text: 'Division 1, 2A'
            },
            {
                value: 'div2_2a',
                text: 'Division 2, 2A'
            },
            {
                value: 'div3_1a',
                text: 'Division 3, 1A'
            },
            {
                value: 'div3_2a',
                text: 'Division 3, 2A'
            },
            {
                value: 'div4_1a',
                text: 'Division 4, 1A'
            },
            {
                value: 'div4_2a',
                text: 'Division 4, 2A'
            },
            {
                value: 'div5_1a',
                text: 'Division 5, 1A'
            },
            {
                value: 'div5_2a',
                text: 'Division 5, 2A'
            },
            {
                value: 'div6_1a',
                text: 'Division 6, 1A'
            },
            {
                value: 'div6_2a',
                text: 'Division 6, 2A'
            }
        ];

        const selectComponent = <Select options={divisionOptions} dispatch={this.props.dispatch} />;

        let saveButton = null;

        if (isBracketComplete(this.props)) {
            saveButton = <Button text='Save bracket' clickHandler={this.postBracketToServer} />
        }

        let visibleBracket = null;

        if (window.innerWidth < 768) {
            let visibleComponent = null;

            if (this.state.gameIndex < gameComponents.length) {
                visibleComponent = gameComponents[this.state.gameIndex];
            } else {
                visibleComponent = championNode;
            }

            visibleBracket =
                <SwipeContainer
                    swipeLeftFunction={this.incrementGameIndex}
                    swipeRightFunction={this.decrementGameIndex}
                    timeThreshold={400}>
                    {visibleComponent}
                </SwipeContainer>;
        } else {

            visibleBracket =
                <div className="Bracket">
                    <div className="round">
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[0]}
                        <div className="game-spacer">&nbsp;</div>
                        {gameComponents[1]}
                        <div className="game-spacer">&nbsp;</div>
                        {gameComponents[2]}
                        <div className="game-spacer">&nbsp;</div>
                        {gameComponents[3]}
                        <div className="spacer">&nbsp;</div>
                    </div>
                    <div className="round">
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[4]}
                        <div className="game-spacer">&nbsp;</div>
                        {gameComponents[5]}
                        <div className="spacer">&nbsp;</div>
                    </div>
                    <div className="round">
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[6]}
                        <div className="spacer">&nbsp;</div>
                    </div>
                    <div className="round">
                        <div className="spacer">&nbsp;</div>
                        {championNode}
                        <div className="spacer">&nbsp;</div>
                    </div>
                </div>;
        }

        return (
            <div>
                {selectComponent}
                < div className="Bracket" >
                    <h3>{name}</h3>
                    {visibleBracket}
                </div >
                {saveButton}
            </div>
        )
    }
}