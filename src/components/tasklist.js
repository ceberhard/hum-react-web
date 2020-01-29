import React, {Component} from 'react';

import TaskListRow from './tasklistrow';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    loadTaskData() {
        fetch('https://localhost:5001/api/v1/task', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            console.log(response);
            response.json().then(data => {
                console.log(data);
                this.setState(prevStete => ({
                    tasks: data
                }), () => console.log(this.state.tasks));
            });
        })
    }

    render() {
        return (
            <TaskListRow data={this.state.tasks} />
        );
    }

    componentDidMount() {
        this.loadTaskData();
    }
}

export default TaskList;