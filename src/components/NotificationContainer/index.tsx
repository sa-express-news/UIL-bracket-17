import Notification from '../Notification';
import { StoreState } from '../../types';
import { connect } from 'react-redux';

const mapStateToProps = ({ notification }: StoreState) => {
    return {
        message: notification
    }
}

export default connect(mapStateToProps)(Notification as any);