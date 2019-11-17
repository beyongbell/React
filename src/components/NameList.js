import React from 'react'

export default function NameList() {
    const names = ['Bruce', 'Clark', 'Diana'];
    const nameList = names.map(name => <h2>{name}</h2>)

    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
            {nameList}
        </div>
    )
}
