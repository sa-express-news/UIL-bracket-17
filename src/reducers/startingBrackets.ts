import { Bracket } from '../types';

const startingBrackets: Bracket[] = [
    {
        name: `Class 6A, Division 1`,
        games: [
            {
                location: 'Lake Travis',
                time: 'Nov. 17, 7:30 pm',
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
                time: 'Nov. 17, 7:30 pm',
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
                time: 'Nov. 17, 7:30 pm',
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
                time: 'Nov. 16, 7 pm',
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
                time: 'Nov. 17, 7:30 pm',
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
                time: 'Nov. 17, 7:30 pm',
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
                time: 'Nov. 17, 7:30 pm',
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
        identifier: 'div1_6a'
    },
    {
        name: `Class 6A, Division 2`,
        games: [
            {
                location: 'Westlake',
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 1,
                        team: {
                            name: 'Westlake (10-0)'
                        },
                        childID: 17
                    },
                    {
                        id: 2,
                        team: {
                            name: 'MacArthur (5-5)'
                        },
                        childID: 17
                    }

                ]
            },
            {
                location: 'Smithson Valley',
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 3,
                        team: {
                            name: 'Smithson Valley (9-1)'
                        },
                        childID: 18
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Jay (7-3)'
                        },
                        childID: 18
                    }
                ]
            },
            {
                location: 'Eagle Pass',
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Eagle Pass (8-2)'
                        },
                        childID: 19,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'McAllen (4-6)'
                        },
                        childID: 19,
                    }
                ]
            },
            {
                location: 'Vela',
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 7,
                        team: {
                            name: 'Vela (10-0)'
                        },
                        childID: 20,
                    },
                    {
                        id: 8,
                        team: {
                            name: 'Hanna (7-3)'
                        },
                        childID: 20,
                    }
                ]
            },
            {
                location: 'Johnson',
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 9,
                        team: {
                            name: 'Johnson (8-2)'
                        },
                        childID: 21,
                    },
                    {
                        id: 10,
                        team: {
                            name: 'Vandegrift (6-4)'
                        },
                        childID: 21,
                    }
                ]
            },
            {
                location: `Brennan`,
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 11,
                        team: {
                            name: `Brennan (6-4)`
                        },
                        childID: 22,
                    },
                    {
                        id: 12,
                        team: {
                            name: 'Steele (6-4)'
                        },
                        childID: 22,
                    }
                ]
            },
            {
                location: `Rowe`,
                time: 'Nov. 16, 7 pm',
                nodes: [
                    {
                        id: 13,
                        team: {
                            name: `Rowe (7-3)`
                        },
                        childID: 23,
                    },
                    {
                        id: 14,
                        team: {
                            name: 'Alexander (5-5)'
                        },
                        childID: 23,
                    }
                ]
            },
            {
                location: `San Benito`,
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 15,
                        team: {
                            name: `Pharr-San Juan-Alamo (8-2)`
                        },
                        childID: 24,
                    },
                    {
                        id: 16,
                        team: {
                            name: 'Weslaco East (7-3)'
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
        identifier: 'div2_6a'
    },
    {
        name: `Class 5A, Division 1`,
        games: [
            {
                location: 'New Braunfels High School',
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 1,
                        team: {
                            name: 'Austin (7-3)'
                        },
                        childID: 17
                    },
                    {
                        id: 2,
                        team: {
                            name: 'Boerne-Champion (5-5)'
                        },
                        childID: 17
                    }

                ]
            },
            {
                location: 'Alamo Stadium',
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 3,
                        team: {
                            name: 'Angleton (9-0)'
                        },
                        childID: 18
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Highlands (7-3)'
                        },
                        childID: 18
                    }
                ]
            },
            {
                location: 'Southside',
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Southside (8-2)'
                        },
                        childID: 19,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'Flour Bluff (8-1)'
                        },
                        childID: 19,
                    }
                ]
            },
            {
                location: 'Veterans Memorial',
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 7,
                        team: {
                            name: 'Veterans Memorial (9-1)'
                        },
                        childID: 20,
                    },
                    {
                        id: 8,
                        team: {
                            name: 'Lopez (8-2)'
                        },
                        childID: 20,
                    }
                ]
            },
            {
                location: 'Kelley Reeves Stadium',
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 9,
                        team: {
                            name: 'Dripping Springs (10-0)'
                        },
                        childID: 21,
                    },
                    {
                        id: 10,
                        team: {
                            name: 'LBJ Austin (7-3)'
                        },
                        childID: 21,
                    }
                ]
            },
            {
                location: `Burbank`,
                time: 'Nov. 18, 1:30 pm',
                nodes: [
                    {
                        id: 11,
                        team: {
                            name: `Burbank (5-5)`
                        },
                        childID: 22,
                    },
                    {
                        id: 12,
                        team: {
                            name: 'Foster (6-3)'
                        },
                        childID: 22,
                    }
                ]
            },
            {
                location: `Lehnhoff Stadium`,
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 13,
                        team: {
                            name: `CC Veterans Memorial (9-1)`
                        },
                        childID: 23,
                    },
                    {
                        id: 14,
                        team: {
                            name: 'Winn (3-7)'
                        },
                        childID: 23,
                    }
                ]
            },
            {
                location: `Alice's Memorial Stadium`,
                time: 'Nov. 18, 6 pm',
                nodes: [
                    {
                        id: 15,
                        team: {
                            name: `Brownsville Veterans Memorial (8-1)`
                        },
                        childID: 24,
                    },
                    {
                        id: 16,
                        team: {
                            name: 'Nixon (7-2)'
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
        identifier: 'div1_5a'
    },
    {
        name: `Class 5A, Division 2`,
        games: [
            {
                location: 'Medina Valley',
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 1,
                        team: {
                            name: 'McCallum (10-0)'
                        },
                        childID: 17
                    },
                    {
                        id: 2,
                        team: {
                            name: 'Medina Valley (6-4)'
                        },
                        childID: 17
                    }

                ]
            },
            {
                location: 'Terry',
                time: 'Nov. 17, 7 pm',
                nodes: [
                    {
                        id: 3,
                        team: {
                            name: 'Terry (4-4)'
                        },
                        childID: 18
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Houston (6-4)'
                        },
                        childID: 18
                    }
                ]
            },
            {
                location: 'Alice',
                time: 'Nov. 17, 8 pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Floresville (6-4)'
                        },
                        childID: 19,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'Alice (7-3)'
                        },
                        childID: 19,
                    }
                ]
            },
            {
                location: `Sharyland`,
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 15,
                        team: {
                            name: `Sharyland (8-2)`
                        },
                        childID: 24,
                    },
                    {
                        id: 16,
                        team: {
                            name: 'Pace (5-5)'
                        },
                        childID: 24,
                    }
                ]
            },
            {
                location: 'Tivy',
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 9,
                        team: {
                            name: 'Tivy (8-2)'
                        },
                        childID: 21,
                    },
                    {
                        id: 10,
                        team: {
                            name: 'Crockett (3-7)'
                        },
                        childID: 21,
                    }
                ]
            },
            {
                location: `Victoria West`,
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 11,
                        team: {
                            name: `San Antonio Memorial (7-3)`
                        },
                        childID: 22,
                    },
                    {
                        id: 12,
                        team: {
                            name: 'Victoria West (4-5)'
                        },
                        childID: 22,
                    }
                ]
            },
            {
                location: `Floresville ISD Stadium`,
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 13,
                        team: {
                            name: `Calallen (10-0)`
                        },
                        childID: 23,
                    },
                    {
                        id: 14,
                        team: {
                            name: 'Uvalde (6-4)'
                        },
                        childID: 23,
                    }
                ]
            },
            {
                location: `Mercedes`,
                time: 'Nov. 17, 7:30 pm',
                nodes: [
                    {
                        id: 15,
                        team: {
                            name: `Mercedes (8-2)`
                        },
                        childID: 24,
                    },
                    {
                        id: 16,
                        team: {
                            name: 'Pioneer (6-4)'
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
        identifier: 'div2_5a'
    },
];

export default startingBrackets;