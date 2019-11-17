import React, { Component }  from 'react';

class PropComponent2 extends Component {
    render() {
        const {name} = this.props
        // const { state1, state2} = this.props
        return <h1> Class Component2 {name} </h1>
    }
}

export default PropComponent2