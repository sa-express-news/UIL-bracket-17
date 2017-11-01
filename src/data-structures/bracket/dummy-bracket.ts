import { Bracket } from '../../types';

const bracket: Bracket = {
    name: `World's Greatest Tournament`,
    games: [
        {
            location: 'Foobar Zone',
            time: '7pm',
            nodes: [
                {
                    id: 1,
                    team: {
                        name: 'Team A'
                    },
                    childID: 5
                },
                {
                    id: 2,
                    team: {
                        name: 'Team B'
                    },
                    childID: 5
                }

            ]
        },
        {
            location: 'Foobar Zone',
            time: '7pm',
            nodes: [
                {
                    id: 3,
                    team: {
                        name: 'Team C'
                    },
                    childID: 6
                },
                {
                    id: 4,
                    team: {
                        name: 'Team D'
                    },
                    childID: 6
                }
            ]
        },
        {
            location: 'Foobar Zone',
            time: '7pm',
            nodes: [
                {
                    id: 5,
                    team: null,
                    childID: 7,
                    parentIDs: [1, 2]
                },
                {
                    id: 6,
                    team: null,
                    childID: 7,
                    parentIDs: [3, 4]
                }
            ]
        }
    ],
    champion: {
        id: 7,
        team: null,
        parentIDs: [5, 6]
    }
};

export default bracket;