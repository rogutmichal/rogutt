import React from 'react'
import Todoitems from './Todoitems'

class Todo extends React.Component {
    state = {
        elements: [
            {id: '131', isComplited: true, title: 'jeden'},
            { id: '313', isComplited: false, title: 'dwa'}
        ],
        inputValue: ''

    }

    markCompleted(id)
    {
        const index = this.state.elements.findIndex(x => x.id == id)
        const newElements = this.state.elements
        newElements[index].isComplited = true

        this.setState({ elements: newElements})
    }
    addItem()
    {
        const item = {
            id: Math.random(),
            title: this.state.inputValue
        }
        const newElements = [item, ...this.state.elements]
            this.setState({elements: newElements})
            this.setState({ inputValue: ''})
    }

    inputHandler(event)
    {
        const newValue = event.target.value
        this.setState({ inputValue: newValue})
    }

    render() {
        const elements = this.state.elements.map(e => {
            return <Todoitems element={e} markClicked={this.markCompleted.bind(this)} />
        }

        )
        return (
            <div>
                Todo app
                <input typu ="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>Dodaj</button>
                {elements}
            </div>


        )

    }
}
export default Todo;
