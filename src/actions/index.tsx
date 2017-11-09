import * as constants from '../constants';
import { Dispatch } from 'react-redux';

import { Team, PostBracketResponse, PostBracketRequest } from '../types';

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

export interface PostBracket {
    type: constants.POST_BRACKET;
    data: PostBracketRequest;
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
        notification: message
    }
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
                dispatch(updateNotification('Error sending your bracket'))
            } else if (serverResponse.error === null && serverResponse.data !== null) {
                const { created, id } = serverResponse.data;
                if (created) dispatch(updateNotification('Bracket created!'));
                else dispatch(updateNotification('Bracket updated!'));

                //Dispatch the ID action here
            }


        } catch (err) {
            dispatch(updateNotification('Error sending your bracket'));
        }
    }
}