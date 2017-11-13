import * as React from 'react';
import { Bracket as BracketProps, Team, PostBracketRequest } from '../../types';

import Game from '../Game';
import Node from '../Node';
import Button from '../Button';
import Select from '../Select';
import SwipeContainer from '../SwipeContainer';

import { UpdateNode, updateNode, updateBracketID, postBracket, fetchBracket, updateNotification } from '../../actions'

import { isTeamUpdateLegal, isBracketComplete } from '../../data-structures/bracket';

import './Bracket.css';

interface BracketState {
    gameIndex: number;
    userEmail: string;
}

export default class Bracket extends React.Component<BracketProps, BracketState>{
    constructor(props: BracketProps) {
        super(props);
        this.state = {
            gameIndex: 0,
            userEmail: ''
        };
    }

    isNodeUpdateLegal = (id: number, team: Team): boolean => {
        return isTeamUpdateLegal(this.props, id, team);
    }

    dispatchNodeUpdate = (action: UpdateNode): Function => {
        return this.props.dispatch(action);
    }

    postBracketToServer = (): Function | void => {
        if (!this.isEmail(this.state.userEmail)) {
            this.props.dispatch(updateNotification('Please enter a valid email address'));
        } else {
            const userEmail = this.state.userEmail;
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

    handleEmailInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ userEmail: event.currentTarget.value });
    }

    isEmail = (string: string): boolean => {
        return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(string);
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
                value: 'div1_6a',
                text: 'Class 6A, Divison 1'
            },
            {
                value: 'div2_6a',
                text: 'Class 6A, Divison 2'
            },
            {
                value: 'div1_5a',
                text: 'Class 5A, Divison 1'
            },
            {
                value: 'div1_5a',
                text: 'Class 5A, Divison 2'
            },
        ];

        let selectComponent = null;

        if (!this.props.bracketID) {
            selectComponent = <Select options={divisionOptions} dispatch={this.props.dispatch} />;
        }

        let emailInput = null;

        if (!this.props.bracketID) {
            emailInput = <input type="text" value={this.state.userEmail} onChange={this.handleEmailInputChange}></input>
        }

        let saveButton = null;

        if (isBracketComplete(this.props) && !this.props.bracketID) {
            saveButton = <Button text='Save/update' clickHandler={this.postBracketToServer} />
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
                        {gameComponents[0]}
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[1]}
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[2]}
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[3]}
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[4]}
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[5]}
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[6]}
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[7]}
                    </div>
                    <div className="round">
                        {gameComponents[8]}
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[9]}
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[10]}
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[11]}
                    </div>
                    <div className="round">
                        {gameComponents[12]}
                        <div className="spacer">&nbsp;</div>
                        {gameComponents[13]}
                    </div>
                    <div className="round">
                        {gameComponents[14]}
                    </div>
                    <div className="round">
                        {championNode}
                    </div>
                </div>;
        }

        return (
            <div className="BracketContainer">
                {emailInput}
                {saveButton}
                {selectComponent}
                < div className="Bracket" >
                    <h3>{name}</h3>
                    {visibleBracket}
                </div >
            </div>
        )
    }
}