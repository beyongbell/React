import React, { Component }  from 'react';

class PropComponent extends Component {
    render() {
        return <h1> Class Component {this.props.name} </h1>
    }
}

export default PropComponent