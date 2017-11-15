import Bracket from '../Bracket';
import { StoreState, BracketContainer as BracketContainerProps } from '../../types';
import { connect } from 'react-redux';

import { match } from 'react-router-dom';

const mapStateToProps = ({ userBrackets, activeBracketIndex, touchEnabled, canonicalBrackets }: StoreState, { id }: BracketContainerProps) => {
    const currentBracket = userBrackets[activeBracketIndex];
    return {
        name: currentBracket.name,
        games: currentBracket.games,
        champion: currentBracket.champion,
        identifier: currentBracket.identifier,
        canonicalVersion: canonicalBrackets[activeBracketIndex],
        bracketID: parseInt(id),
        touchEnabled: touchEnabled
    }
}

export default connect(mapStateToProps)(Bracket as any);