import React from 'react'
import './Style.css'

function StyleSheet(props) {
    let success = props.success ? 'success' : ''
    return (
        <div>
            <h1 className="primary"> StyleSheet </h1>
            <h1 className={success}> StyleSheet </h1>
            <h1 className={`${success} font-xl`}> StyleSheet </h1>
        </div>
    )
}

export default StyleSheet
