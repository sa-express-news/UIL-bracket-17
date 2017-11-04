import { Bracket } from '../types';

const startingBrackets: Bracket[] = [
    {
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
                        childID: 9
                    },
                    {
                        id: 2,
                        team: {
                            name: 'Team B'
                        },
                        childID: 9
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
                        childID: 10
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Team D'
                        },
                        childID: 10
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Team E'
                        },
                        childID: 11,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'Team F'
                        },
                        childID: 11,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 7,
                        team: {
                            name: 'Team G'
                        },
                        childID: 12,
                    },
                    {
                        id: 8,
                        team: {
                            name: 'Team H'
                        },
                        childID: 12,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 9,
                        team: null,
                        childID: 13,
                        parentIDs: [1, 2]
                    },
                    {
                        id: 10,
                        team: null,
                        childID: 13,
                        parentIDs: [3, 4]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 11,
                        team: null,
                        childID: 14,
                        parentIDs: [5, 6]
                    },
                    {
                        id: 12,
                        team: null,
                        childID: 14,
                        parentIDs: [7, 8]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 13,
                        team: null,
                        childID: 15,
                        parentIDs: [9, 10]
                    },
                    {
                        id: 14,
                        team: null,
                        childID: 15,
                        parentIDs: [11, 12]
                    }
                ]
            },
        ],
        champion: {
            id: 15,
            team: null,
            parentIDs: [13, 14]
        },
        identifier: 'div1_1a'
    },
    {
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
                        childID: 9
                    },
                    {
                        id: 2,
                        team: {
                            name: 'Team B'
                        },
                        childID: 9
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
                        childID: 10
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Team D'
                        },
                        childID: 10
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Team E'
                        },
                        childID: 11,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'Team F'
                        },
                        childID: 11,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 7,
                        team: {
                            name: 'Team G'
                        },
                        childID: 12,
                    },
                    {
                        id: 8,
                        team: {
                            name: 'Team H'
                        },
                        childID: 12,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 9,
                        team: null,
                        childID: 13,
                        parentIDs: [1, 2]
                    },
                    {
                        id: 10,
                        team: null,
                        childID: 13,
                        parentIDs: [3, 4]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 11,
                        team: null,
                        childID: 14,
                        parentIDs: [5, 6]
                    },
                    {
                        id: 12,
                        team: null,
                        childID: 14,
                        parentIDs: [7, 8]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 13,
                        team: null,
                        childID: 15,
                        parentIDs: [9, 10]
                    },
                    {
                        id: 14,
                        team: null,
                        childID: 15,
                        parentIDs: [11, 12]
                    }
                ]
            },
        ],
        champion: {
            id: 15,
            team: null,
            parentIDs: [13, 14]
        },
        identifier: 'div2_1a'
    },
    {
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
                        childID: 9
                    },
                    {
                        id: 2,
                        team: {
                            name: 'Team B'
                        },
                        childID: 9
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
                        childID: 10
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Team D'
                        },
                        childID: 10
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Team E'
                        },
                        childID: 11,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'Team F'
                        },
                        childID: 11,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 7,
                        team: {
                            name: 'Team G'
                        },
                        childID: 12,
                    },
                    {
                        id: 8,
                        team: {
                            name: 'Team H'
                        },
                        childID: 12,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 9,
                        team: null,
                        childID: 13,
                        parentIDs: [1, 2]
                    },
                    {
                        id: 10,
                        team: null,
                        childID: 13,
                        parentIDs: [3, 4]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 11,
                        team: null,
                        childID: 14,
                        parentIDs: [5, 6]
                    },
                    {
                        id: 12,
                        team: null,
                        childID: 14,
                        parentIDs: [7, 8]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 13,
                        team: null,
                        childID: 15,
                        parentIDs: [9, 10]
                    },
                    {
                        id: 14,
                        team: null,
                        childID: 15,
                        parentIDs: [11, 12]
                    }
                ]
            },
        ],
        champion: {
            id: 15,
            team: null,
            parentIDs: [13, 14]
        },
        identifier: 'div2_1a'
    },
    {
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
                        childID: 9
                    },
                    {
                        id: 2,
                        team: {
                            name: 'Team B'
                        },
                        childID: 9
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
                        childID: 10
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Team D'
                        },
                        childID: 10
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Team E'
                        },
                        childID: 11,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'Team F'
                        },
                        childID: 11,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 7,
                        team: {
                            name: 'Team G'
                        },
                        childID: 12,
                    },
                    {
                        id: 8,
                        team: {
                            name: 'Team H'
                        },
                        childID: 12,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 9,
                        team: null,
                        childID: 13,
                        parentIDs: [1, 2]
                    },
                    {
                        id: 10,
                        team: null,
                        childID: 13,
                        parentIDs: [3, 4]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 11,
                        team: null,
                        childID: 14,
                        parentIDs: [5, 6]
                    },
                    {
                        id: 12,
                        team: null,
                        childID: 14,
                        parentIDs: [7, 8]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 13,
                        team: null,
                        childID: 15,
                        parentIDs: [9, 10]
                    },
                    {
                        id: 14,
                        team: null,
                        childID: 15,
                        parentIDs: [11, 12]
                    }
                ]
            },
        ],
        champion: {
            id: 15,
            team: null,
            parentIDs: [13, 14]
        },
        identifier: 'div2_2a'
    },
    {
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
                        childID: 9
                    },
                    {
                        id: 2,
                        team: {
                            name: 'Team B'
                        },
                        childID: 9
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
                        childID: 10
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Team D'
                        },
                        childID: 10
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Team E'
                        },
                        childID: 11,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'Team F'
                        },
                        childID: 11,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 7,
                        team: {
                            name: 'Team G'
                        },
                        childID: 12,
                    },
                    {
                        id: 8,
                        team: {
                            name: 'Team H'
                        },
                        childID: 12,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 9,
                        team: null,
                        childID: 13,
                        parentIDs: [1, 2]
                    },
                    {
                        id: 10,
                        team: null,
                        childID: 13,
                        parentIDs: [3, 4]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 11,
                        team: null,
                        childID: 14,
                        parentIDs: [5, 6]
                    },
                    {
                        id: 12,
                        team: null,
                        childID: 14,
                        parentIDs: [7, 8]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 13,
                        team: null,
                        childID: 15,
                        parentIDs: [9, 10]
                    },
                    {
                        id: 14,
                        team: null,
                        childID: 15,
                        parentIDs: [11, 12]
                    }
                ]
            },
        ],
        champion: {
            id: 15,
            team: null,
            parentIDs: [13, 14]
        },
        identifier: 'div3_1a'
    },
    {
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
                        childID: 9
                    },
                    {
                        id: 2,
                        team: {
                            name: 'Team B'
                        },
                        childID: 9
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
                        childID: 10
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Team D'
                        },
                        childID: 10
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Team E'
                        },
                        childID: 11,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'Team F'
                        },
                        childID: 11,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 7,
                        team: {
                            name: 'Team G'
                        },
                        childID: 12,
                    },
                    {
                        id: 8,
                        team: {
                            name: 'Team H'
                        },
                        childID: 12,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 9,
                        team: null,
                        childID: 13,
                        parentIDs: [1, 2]
                    },
                    {
                        id: 10,
                        team: null,
                        childID: 13,
                        parentIDs: [3, 4]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 11,
                        team: null,
                        childID: 14,
                        parentIDs: [5, 6]
                    },
                    {
                        id: 12,
                        team: null,
                        childID: 14,
                        parentIDs: [7, 8]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 13,
                        team: null,
                        childID: 15,
                        parentIDs: [9, 10]
                    },
                    {
                        id: 14,
                        team: null,
                        childID: 15,
                        parentIDs: [11, 12]
                    }
                ]
            },
        ],
        champion: {
            id: 15,
            team: null,
            parentIDs: [13, 14]
        },
        identifier: 'div3_2a'
    },
    {
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
                        childID: 9
                    },
                    {
                        id: 2,
                        team: {
                            name: 'Team B'
                        },
                        childID: 9
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
                        childID: 10
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Team D'
                        },
                        childID: 10
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Team E'
                        },
                        childID: 11,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'Team F'
                        },
                        childID: 11,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 7,
                        team: {
                            name: 'Team G'
                        },
                        childID: 12,
                    },
                    {
                        id: 8,
                        team: {
                            name: 'Team H'
                        },
                        childID: 12,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 9,
                        team: null,
                        childID: 13,
                        parentIDs: [1, 2]
                    },
                    {
                        id: 10,
                        team: null,
                        childID: 13,
                        parentIDs: [3, 4]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 11,
                        team: null,
                        childID: 14,
                        parentIDs: [5, 6]
                    },
                    {
                        id: 12,
                        team: null,
                        childID: 14,
                        parentIDs: [7, 8]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 13,
                        team: null,
                        childID: 15,
                        parentIDs: [9, 10]
                    },
                    {
                        id: 14,
                        team: null,
                        childID: 15,
                        parentIDs: [11, 12]
                    }
                ]
            },
        ],
        champion: {
            id: 15,
            team: null,
            parentIDs: [13, 14]
        },
        identifier: 'div1_4a'
    },
    {
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
                        childID: 9
                    },
                    {
                        id: 2,
                        team: {
                            name: 'Team B'
                        },
                        childID: 9
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
                        childID: 10
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Team D'
                        },
                        childID: 10
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Team E'
                        },
                        childID: 11,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'Team F'
                        },
                        childID: 11,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 7,
                        team: {
                            name: 'Team G'
                        },
                        childID: 12,
                    },
                    {
                        id: 8,
                        team: {
                            name: 'Team H'
                        },
                        childID: 12,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 9,
                        team: null,
                        childID: 13,
                        parentIDs: [1, 2]
                    },
                    {
                        id: 10,
                        team: null,
                        childID: 13,
                        parentIDs: [3, 4]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 11,
                        team: null,
                        childID: 14,
                        parentIDs: [5, 6]
                    },
                    {
                        id: 12,
                        team: null,
                        childID: 14,
                        parentIDs: [7, 8]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 13,
                        team: null,
                        childID: 15,
                        parentIDs: [9, 10]
                    },
                    {
                        id: 14,
                        team: null,
                        childID: 15,
                        parentIDs: [11, 12]
                    }
                ]
            },
        ],
        champion: {
            id: 15,
            team: null,
            parentIDs: [13, 14]
        },
        identifier: 'div2_4a'
    },
    {
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
                        childID: 9
                    },
                    {
                        id: 2,
                        team: {
                            name: 'Team B'
                        },
                        childID: 9
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
                        childID: 10
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Team D'
                        },
                        childID: 10
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Team E'
                        },
                        childID: 11,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'Team F'
                        },
                        childID: 11,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 7,
                        team: {
                            name: 'Team G'
                        },
                        childID: 12,
                    },
                    {
                        id: 8,
                        team: {
                            name: 'Team H'
                        },
                        childID: 12,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 9,
                        team: null,
                        childID: 13,
                        parentIDs: [1, 2]
                    },
                    {
                        id: 10,
                        team: null,
                        childID: 13,
                        parentIDs: [3, 4]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 11,
                        team: null,
                        childID: 14,
                        parentIDs: [5, 6]
                    },
                    {
                        id: 12,
                        team: null,
                        childID: 14,
                        parentIDs: [7, 8]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 13,
                        team: null,
                        childID: 15,
                        parentIDs: [9, 10]
                    },
                    {
                        id: 14,
                        team: null,
                        childID: 15,
                        parentIDs: [11, 12]
                    }
                ]
            },
        ],
        champion: {
            id: 15,
            team: null,
            parentIDs: [13, 14]
        },
        identifier: 'div5_1a'
    },
    {
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
                        childID: 9
                    },
                    {
                        id: 2,
                        team: {
                            name: 'Team B'
                        },
                        childID: 9
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
                        childID: 10
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Team D'
                        },
                        childID: 10
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Team E'
                        },
                        childID: 11,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'Team F'
                        },
                        childID: 11,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 7,
                        team: {
                            name: 'Team G'
                        },
                        childID: 12,
                    },
                    {
                        id: 8,
                        team: {
                            name: 'Team H'
                        },
                        childID: 12,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 9,
                        team: null,
                        childID: 13,
                        parentIDs: [1, 2]
                    },
                    {
                        id: 10,
                        team: null,
                        childID: 13,
                        parentIDs: [3, 4]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 11,
                        team: null,
                        childID: 14,
                        parentIDs: [5, 6]
                    },
                    {
                        id: 12,
                        team: null,
                        childID: 14,
                        parentIDs: [7, 8]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 13,
                        team: null,
                        childID: 15,
                        parentIDs: [9, 10]
                    },
                    {
                        id: 14,
                        team: null,
                        childID: 15,
                        parentIDs: [11, 12]
                    }
                ]
            },
        ],
        champion: {
            id: 15,
            team: null,
            parentIDs: [13, 14]
        },
        identifier: 'div5_2a'
    },
    {
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
                        childID: 9
                    },
                    {
                        id: 2,
                        team: {
                            name: 'Team B'
                        },
                        childID: 9
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
                        childID: 10
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Team D'
                        },
                        childID: 10
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Team E'
                        },
                        childID: 11,
                    },
                    {
                        id: 6,
                        team: {
                            name: 'Team F'
                        },
                        childID: 11,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 7,
                        team: {
                            name: 'Team G'
                        },
                        childID: 12,
                    },
                    {
                        id: 8,
                        team: {
                            name: 'Team H'
                        },
                        childID: 12,
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 9,
                        team: null,
                        childID: 13,
                        parentIDs: [1, 2]
                    },
                    {
                        id: 10,
                        team: null,
                        childID: 13,
                        parentIDs: [3, 4]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 11,
                        team: null,
                        childID: 14,
                        parentIDs: [5, 6]
                    },
                    {
                        id: 12,
                        team: null,
                        childID: 14,
                        parentIDs: [7, 8]
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 13,
                        team: null,
                        childID: 15,
                        parentIDs: [9, 10]
                    },
                    {
                        id: 14,
                        team: null,
                        childID: 15,
                        parentIDs: [11, 12]
                    }
                ]
            },
        ],
        champion: {
            id: 15,
            team: null,
            parentIDs: [13, 14]
        },
        identifier: 'div6_1a'
    },
    {
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
        },
        identifier: 'div6_2a'
    }
];

export default startingBrackets;