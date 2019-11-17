import React from 'react';

// function Greet(props) {
//     return <h1> Hello {props.name} </h1>
// }

const Props2 = ({ name, gender}) => {
    return (
        <div>
            <h1> Hello { name } </h1>
            <h2> Gender { gender } </h2>
        </div>
    )
}

export default Props2;