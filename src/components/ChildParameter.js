import React from 'react'

function ChildParameter (props)  {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}> Greet Parent </button>
        </div>
    )
}

export default ChildParameter
