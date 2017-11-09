export interface Button {
    text: string;
    clickHandler?: Function;
}

export interface Select {
    options: {
        value: string;
        text: string;
    }[];
    dispatch?: Function;
}

export interface Notification {
    message: string | null;
    buttonClickHandler?: Function;
}

export interface SwipeContainer {
    swipeLeftFunction: Function;
    swipeRightFunction: Function;
    timeThreshold: number;
    children: any;
}

export interface Team {
    name: string;
    logo?: string;
    colors?: [string, string];
}

export interface Node {
    id: number;
    team: Team | null;
    childID?: number;
    parentIDs?: [number, number];
    legalityFunction?: Function;
    updateNodeFunction?: Function;
    updateGameIndexFunction?: Function;
}

export interface Game {
    location: string;
    time: string;
    nodes: [Node, Node];
    legalityFunctionForNodes?: Function;
    updateNodeFunction?: Function;
    updateGameIndexFunction?: Function;
}

export interface Bracket {
    name: string;
    games: Game[];
    champion: Node;
    identifier?: string;
    dispatch?: Function;
}

export interface StoreState {
    activeBracketIndex: number;
    activeBracketID: string;
    userBrackets: Bracket[];
    canonicalBrackets: Bracket[];
    postingBracket: boolean;
    notification: string | null;
}

export interface PostBracketRequest {
    bracket: Bracket;
    name?: string;
    email: string;
    conferenceDivision: string;
}

export interface PostBracketResponse {
    error: string | null,
    data:
    {
        created: boolean,
        id: number
    } | null
}

export interface fetchBracketReponse {
    error: string | null;
    data: {
        bracket: Bracket
    } | null;
}