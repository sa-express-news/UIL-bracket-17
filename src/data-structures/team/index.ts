import { Team } from '../../types';

export const createTeam = (name: string, logo?: string, colors?: [string, string]): Team => {
    let team = { name: name };
    if (logo) {
        team = Object.assign({}, team, { logo: logo });
    }
    if (colors) {
        team = Object.assign({}, team, { colors: colors });
    }
    return Object.freeze(team);
}

export const isTeam = (object: Object | null): object is Team => {
    if (object === null) return true;
    if (Object.getOwnPropertyNames(object).length > 3 || Object.getOwnPropertyNames(object).length < 1) return false;
    const { name, logo, colors } = <Team>object;
    if (typeof name === 'string') {
        if (logo) {
            if (typeof logo !== 'string') return false;
        }
        if (colors) {
            if (!Array.isArray(colors)) {
                return false;
            } else {
                let flag = null;
                colors.forEach((color) => {
                    if (typeof color !== 'string') flag = false;
                });
                if (flag === false) return false;
            }

        }
        return true;
    }
    return false;
}