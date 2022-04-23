import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [],
            currtask: ''
        }
    }
    handelChange = (e) => {
        this.setState({
            currtask: e.target.value
        })
    }
    handelcreate = () => {
        this.setState({
            tasks: [...this.state.tasks, { task: this.state.currtask, id: this.state.tasks.length }],
            currtask: ''
        })
        console.log(this.state.tasks)
    }
    handelDelelte = (id) => {
        this.setState({
            tasks: [...this.state.tasks.filter((taskobj) => taskobj.id != id)]
        })
    }
    render() {
        return (
            <div>
                <div className="inputDiv">
                    <input type="text" value={this.state.currtask} onChange={this.handelChange} />
                    <button onClick={this.handelcreate}>Add task</button>
                </div>
                <ul className="tasks">
                    {
                        this.state.tasks.map((taskobj) => (
                            <li>
                                <p>{taskobj.task}</p>
                                <button onClick={() => this.handelDelelte(taskobj.id)}>Delete</button>

                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
