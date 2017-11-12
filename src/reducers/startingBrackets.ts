import { Bracket } from '../types';

const startingBrackets: Bracket[] = [{
    name: `World's Greatest Tournament`,
    games: [
        {
            location: 'Lake Travis',
            time: 'Nov. 17, 7:30pm',
            nodes: [
                {
                    id: 1,
                    team: {
                        name: 'Lake Travis (8-2)'
                    },
                    childID: 17
                },
                {
                    id: 2,
                    team: {
                        name: 'Madison (4-6)'
                    },
                    childID: 17
                }

            ]
        },
        {
            location: 'Judson',
            time: 'Nov. 17, 7:30pm',
            nodes: [
                {
                    id: 3,
                    team: {
                        name: 'Judson (9-1)'
                    },
                    childID: 18
                },
                {
                    id: 4,
                    team: {
                        name: 'Warren (7-4)'
                    },
                    childID: 18
                }
            ]
        },
        {
            location: 'Southwest',
            time: 'Nov. 17, 7:30pm',
            nodes: [
                {
                    id: 5,
                    team: {
                        name: 'Southwest (8-2)'
                    },
                    childID: 19,
                },
                {
                    id: 6,
                    team: {
                        name: 'La Joya (6-4)'
                    },
                    childID: 19,
                }
            ]
        },
        {
            location: 'Los Fresnos',
            time: 'Nov. 16, 7pm',
            nodes: [
                {
                    id: 7,
                    team: {
                        name: 'Edinburg (6-4)'
                    },
                    childID: 20,
                },
                {
                    id: 8,
                    team: {
                        name: 'Los Fresnos (7-3)'
                    },
                    childID: 20,
                }
            ]
        },
        {
            location: 'Reagan',
            time: 'Nov. 17, 7:30pm',
            nodes: [
                {
                    id: 9,
                    team: {
                        name: 'Reagan (8-2)'
                    },
                    childID: 21,
                },
                {
                    id: 10,
                    team: {
                        name: 'Hays (4-6)'
                    },
                    childID: 21,
                }
            ]
        },
        {
            location: `O'Connor`,
            time: 'Nov. 17, 7:30pm',
            nodes: [
                {
                    id: 11,
                    team: {
                        name: `O'Connor (10-0)`
                    },
                    childID: 22,
                },
                {
                    id: 12,
                    team: {
                        name: 'Clemens (8-2)'
                    },
                    childID: 22,
                }
            ]
        },
        {
            location: `Union South`,
            time: 'Nov. 17, 7:30pm',
            nodes: [
                {
                    id: 13,
                    team: {
                        name: `McAllen Memorial (8-2)`
                    },
                    childID: 23,
                },
                {
                    id: 14,
                    team: {
                        name: 'Union South (4-6)'
                    },
                    childID: 23,
                }
            ]
        },
        {
            location: `San Benito`,
            time: 'Nov. 16, 7 pm',
            nodes: [
                {
                    id: 15,
                    team: {
                        name: `San Benito (10-0)`
                    },
                    childID: 24,
                },
                {
                    id: 16,
                    team: {
                        name: 'Edinburg North (5-5)'
                    },
                    childID: 24,
                }
            ]
        },
        {
            location: '',
            time: '',
            nodes: [
                {
                    id: 17,
                    team: null,
                    childID: 25,
                    parentIDs: [1, 2]
                },
                {
                    id: 18,
                    team: null,
                    childID: 25,
                    parentIDs: [3, 4]
                }
            ]
        },
        {
            location: '',
            time: '',
            nodes: [
                {
                    id: 19,
                    team: null,
                    childID: 26,
                    parentIDs: [5, 6]
                },
                {
                    id: 20,
                    team: null,
                    childID: 26,
                    parentIDs: [7, 8]
                }
            ]
        },
        {
            location: '',
            time: '',
            nodes: [
                {
                    id: 21,
                    team: null,
                    childID: 27,
                    parentIDs: [9, 10]
                },
                {
                    id: 22,
                    team: null,
                    childID: 27,
                    parentIDs: [11, 12]
                }
            ]
        },
        {
            location: '',
            time: '',
            nodes: [
                {
                    id: 23,
                    team: null,
                    childID: 28,
                    parentIDs: [13, 14]
                },
                {
                    id: 24,
                    team: null,
                    childID: 28,
                    parentIDs: [15, 16]
                }
            ]
        },
        {
            location: '',
            time: '',
            nodes: [
                {
                    id: 25,
                    team: null,
                    childID: 29,
                    parentIDs: [17, 18]
                },
                {
                    id: 26,
                    team: null,
                    childID: 29,
                    parentIDs: [19, 20]
                }
            ]
        },
        {
            location: '',
            time: '',
            nodes: [
                {
                    id: 27,
                    team: null,
                    childID: 30,
                    parentIDs: [21, 22]
                },
                {
                    id: 28,
                    team: null,
                    childID: 30,
                    parentIDs: [23, 24]
                }
            ]
        },
        {
            location: '',
            time: '',
            nodes: [
                {
                    id: 29,
                    team: null,
                    childID: 31,
                    parentIDs: [25, 26]
                },
                {
                    id: 30,
                    team: null,
                    childID: 31,
                    parentIDs: [27, 28]
                }
            ]
        },
    ],
    champion: {
        id: 31,
        team: null,
        parentIDs: [29, 30]
    },
    identifier: 'div6_1a'
}];

export default startingBrackets;