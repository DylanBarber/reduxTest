import React from 'react'
import { connect } from "react-redux";

import PropTypes from "prop-types"
import { countUp, countDown, resetCount } from "../actions/counterAction";

class Comp1 extends React.Component {
    countUpHandler = () => {
        this.props.countUp();
    }
    countDownHandler = () => {
        this.props.countDown();
    }
    resetCountHandler = () => {
        this.props.resetCount(); 
    }
    render() {
        return (
            <div className="comp1">
                <button onClick={this.countUpHandler}>Count up</button>
                <button onClick={this.countDownHandler}>Count down</button>
                <button onClick={this.resetCountHandler}>Reset Counter</button>
            </div>
        )
    }
}

Comp1.propTypes = {
    countUp: PropTypes.func.isRequired,
    countUp: PropTypes.func.isRequired
}

export default connect(null, { countDown, countUp, resetCount })(Comp1); 