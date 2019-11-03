import React from 'react'
import { connect } from "react-redux";

class Comp2 extends React.Component {
    render() {
        console.log(this.props.counter)
        return (
            <div className="comp2">
                <h1>{this.props.counter}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.countUp.counter
})

export default connect(mapStateToProps, null)(Comp2); 