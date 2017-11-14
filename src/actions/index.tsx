import * as constants from '../constants';
import { Dispatch } from 'react-redux';

import { Bracket, Team, PostBracketResponse, PostBracketRequest, fetchBracketReponse } from '../types';

import history from '../routerHistory';

export interface Action {
    type: string;
}

export interface UpdateBracketIndex {
    type: constants.UPDATE_BRACKET_INDEX;
    index: number;
}

export interface UpdateBracketID {
    type: constants.UPDATE_BRACKET_ID;
    id: string;
}

export interface UpdateNode {
    type: constants.UPDATE_NODE;
    id: number;
    team: Team;
}

export interface ReceiveBracketPostResponse {
    type: constants.RECEIVE_BRACKET_POST_RESPONSE;
    error: string | null;
    data: {
        created: boolean;
        id: number;
    } | null;
}

export interface UpdateNotification {
    type: constants.UPDATE_NOTIFICATION;
    notification: string | null;
}

export interface UpdateBracket {
    type: constants.UPDATE_BRACKET;
    bracket: Bracket;
}

export interface ToggleTouch {
    type: constants.TOGGLE_TOUCH;
}

export const updateBracketIndex = (index: number): UpdateBracketIndex => {
    return {
        type: constants.UPDATE_BRACKET_INDEX,
        index: index
    };
}

export const updateBracketID = (id: string): UpdateBracketID => {
    return {
        type: constants.UPDATE_BRACKET_ID,
        id: id
    };
}

export const updateNode = (id: number, team: Team): UpdateNode => {
    return {
        type: constants.UPDATE_NODE,
        id: id,
        team: team
    };
}

export const receiveBracketPostResponse = ({ error, data }: PostBracketResponse): ReceiveBracketPostResponse => {
    return {
        type: constants.RECEIVE_BRACKET_POST_RESPONSE,
        error: error,
        data: data
    };
}

export const updateNotification = (message = null as string | null): UpdateNotification => {
    return {
        type: constants.UPDATE_NOTIFICATION,
        notification: message,
    }
}

export const updateBracket = (bracket: Bracket): UpdateBracket => {
    return {
        type: constants.UPDATE_BRACKET,
        bracket: bracket
    };
}

export const toggleTouch = (): ToggleTouch => {
    return {
        type: constants.TOGGLE_TOUCH
    };
}

export const postBracket = (data: PostBracketRequest) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(updateNotification('Saving your bracket...'));

        try {
            const serverResponseRaw = await fetch('https://expressnewsdata.com/brackets/football-playoffs-2017/bracket', {
                method: 'POST',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify(data)
            });

            const serverResponse: PostBracketResponse = await serverResponseRaw.json();

            if (serverResponse.error !== null) {
                dispatch(updateNotification(serverResponse.error));
            } else if (serverResponse.data !== null) {
                const { created, id } = serverResponse.data;
                if (created) dispatch(updateNotification('Bracket created! Bookmark this URL to return to your bracket later and check how you did. If you want to create a bracket for another class or division, just hit the back button.'));
                else dispatch(updateNotification('Bracket updated! Bookmark this URL to return to your bracket later and check how you did. If you want to create a bracket for another class or division, just hit the back button.'));

                history.push(`${serverResponse.data.id}`);
            }


        } catch (err) {
            dispatch(updateNotification('Error sending your bracket - try refreshing the page and sending it again.'));
        }
    }
}

export const fetchBracket = (id: number) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const serverResponseRaw = await fetch(`https://expressnewsdata.com/brackets/football-playoffs-2017/bracket/${id}`, {
                headers: new Headers({ 'content-type': 'application/json' }),
            });

            const serverResponse: fetchBracketReponse = await serverResponseRaw.json();

            if (serverResponse.error !== null) {
                dispatch(updateNotification('Error sending your bracket - try refreshing the page and sending it again.'));
            } else if (serverResponse.data === null) {
                dispatch(updateNotification(`Sorry, no bracket found at that ID! Contact datateam@express-news.net if you need help tracking down your ID.`));
            } else if (serverResponse.data !== null) {
                const { bracket } = serverResponse.data;
                dispatch(updateBracket(bracket));
                switch (bracket.identifier) {
                    case 'div1_6a':
                        dispatch(updateBracketIndex(0));
                        break;
                    case 'div2_6a':
                        dispatch(updateBracketIndex(1));
                        break;
                    case 'div1_5a':
                        dispatch(updateBracketIndex(2));
                        break;
                    case 'div2_5a':
                        dispatch(updateBracketIndex(3));
                        break;
                    default:
                        return;
                }
            }
        } catch (e) {
            dispatch(updateNotification('Error fetching your bracket - try refreshing this page.'));
        }
    }
}