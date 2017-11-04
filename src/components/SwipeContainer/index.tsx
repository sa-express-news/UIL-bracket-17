import * as React from 'react';

import { SwipeContainer as SwipeContainerProps } from '../../types';
import './SwipeContainer.css';



interface SwipeContainerState {
    touchStartX: number;
    touchStartY: number;
    lastChange: Date;
}

export default class SwipeContainer extends React.Component<SwipeContainerProps, SwipeContainerState> {

    constructor() {
        super();
        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
        this.state = {
            touchStartX: 0,
            touchStartY: 0,
            lastChange: new Date()
        };
    }

    handleTouchStart = (event: any) => {

        const theTouch = event.touches[0];

        this.setState(prevState => ({
            touchStartX: theTouch.screenX,
            touchStartY: theTouch.screenY
        }));
    }

    handleTouchEnd = (event: any) => {
        const theTouch = event.changedTouches[0];

        if (this.state.touchStartX === null || this.state.touchStartY === null) { return }

        if (this.state.touchStartX - theTouch.screenX >= 75) {
            this.props.swipeLeftFunction();
        }

        if (theTouch.screenX - this.state.touchStartX >= 75) {
            this.props.swipeRightFunction();
        }

    }

    shouldComponentUpdate(nextProps: SwipeContainerProps, nextState: SwipeContainerState): boolean {
        const millisecondsSinceLastChange = new Date().getTime() - this.state.lastChange.getTime();

        if (millisecondsSinceLastChange < this.props.timeThreshold) {
            return false;
        }

        return true;
    }

    render() {
        return (
            <div className="SwipeContainer" onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd}>
                {this.props.children}
            </div>
        );
    }

}