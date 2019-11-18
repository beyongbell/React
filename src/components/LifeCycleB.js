import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tinnakorn'
        }
        console.log('LifeCycleB Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB GetDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }

    render() {
        console.log('LifeCycleB Render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
