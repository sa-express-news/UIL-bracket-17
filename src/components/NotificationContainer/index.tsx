import { connect } from 'react-redux';

import Notification from '../Notification';
import { StoreState } from '../../types';
import { updateNotification } from '../../actions';


const mapStateToProps = ({ notification }: StoreState) => {
    return {
        message: notification
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        buttonClickHandler: () => dispatch(updateNotification(null))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification as any);