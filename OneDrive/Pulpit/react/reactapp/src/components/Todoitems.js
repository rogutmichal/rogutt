import React from 'react'

const Todoitems = props => {
    return (<div className = {`card ${props.element.isComplited ? 'completed': '' }`} key={props.element.id}>
        <h2>{props.element.title}</h2>
        <button onClick ={() => props.markClicked(props.element.id)}>Zakonczone</button>
        </div>
    )
} 

export default Todoitems