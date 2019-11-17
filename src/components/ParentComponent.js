import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
import ChildParameter from './ChildParameter';

export class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
             parentName: 'parent'
        }

        this.greetParent          = this.greetParent.bind(this)
        this.greetParentParameter = this.greetParentParameter.bind(this)
    }

    greetParent() {
        alert(`Hello ${this.state.parentName}`)
    }

    greetParentParameter(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
                <ChildParameter greetHandler={this.greetParentParameter}/>
            </div>
        )
    }
}

export default ParentComponent
