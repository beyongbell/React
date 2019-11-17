import React, { Component } from 'react'

export default class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
             isLoggedIn: true
        }
    }

    render() {
        return this.state.isLoggedIn && <div> Welcome Tinnakorn </div>

        // return this.state.isLoggedIn ? (
        //     <div> Welcome Tinnakorn </div>
        // ) : (
        //     <div> Welcome Guest </div>
        // )

        // let message;

        // if (this.state.isLoggedIn) {
        //     message =  <div> Welcome Tinnakorn </div>
        // } else {
        //     message = <div> Welcome Guest </div>
        // }

        // return <div> {message} </div>
    }
}
