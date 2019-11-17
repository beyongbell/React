import React from 'react'
import Person from './Person'

export default function NameListObj () {
    const names = ['Bruce', 'Clark', 'Diana'];
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
    ]

    const personList = persons.map((person, index) => <Person key={index} person={person} />)

    return <div>{nameList} {personList}</div>
}