export interface Button {
    text: string;
    disabled?: boolean;
    clickHandler?: Function;
}

export interface Select {
    options: {
        value: string;
        text: string;
    }[];
    dispatch?: Function;
    onChange?: Function;
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
    touchEnabled?: boolean;
}

export interface Node {
    id: number;
    team: Team | null;
    childID?: number;
    parentIDs?: [number, number];
    legalityFunction?: Function;
    canonicalCheckFunction?: Function;
    updateNodeFunction?: Function;
    updateGameIndexFunction?: Function;
    touchEnabled?: boolean;
}

export interface Game {
    location: string;
    time: string;
    nodes: [Node, Node];
    legalityFunctionForNodes?: Function;
    canonicalCheckFunction?: Function;
    updateNodeFunction?: Function;
    updateGameIndexFunction?: Function;
    touchEnabled?: boolean;
}

export interface Bracket {
    name: string;
    games: Game[];
    champion: Node;
    identifier?: string;
    canonicalVersion?: Bracket;
    dispatch?: Function;
    bracketID?: number;
    touchEnabled?: boolean;
}

export interface BracketContainer {
    id: string;
}

export interface StoreState {
    activeBracketIndex: number;
    activeBracketID: string;
    userBrackets: Bracket[];
    canonicalBrackets: Bracket[];
    postingBracket: boolean;
    notification: string | null;
    touchEnabled: boolean;
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

export interface fetchCanonicalBracketsResponse {
    error: string | null;
    data: Bracket[];
}