import Bracket from '../Bracket';
import { StoreState } from '../../types';
import { connect } from 'react-redux';

const mapStateToProps = ({ userBrackets, activeBracketIndex }: StoreState) => {
    const currentBracket = userBrackets[activeBracketIndex];
    return {
        name: currentBracket.name,
        games: currentBracket.games,
        champion: currentBracket.champion,
        identifier: currentBracket.identifier
    }
}

export default connect(mapStateToProps)(Bracket as any);