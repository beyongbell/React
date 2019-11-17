import React from 'react';

// function Greet(props) {
//     return <h1> Hello {props.name} </h1>
// }

const Props3 = props => {
    const {name, gender} = props

    return (
        <div>
            <h1> Hello {name} </h1>
            {gender}
        </div>
    )
}

export default Props3;