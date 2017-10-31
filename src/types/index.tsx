export interface Team {
    name: string;
    logo?: string;
    colors?: [string, string];
}

export interface Node {
    id: number;
    team: Team;
    childID?: number;
    parentIDs?: [number, number];
}

export interface Game {
    location: string;
    time: string;
    nodes: [Node, Node];
}

export interface Bracket {
    name: string;
    games: Game[];
    champion: Node;
    identifier?: string | number;
}

export interface StoreState {
    activeBracketIndex: number;
    userBrackets: Bracket[];
    canonicalBrackets: Bracket[];
}