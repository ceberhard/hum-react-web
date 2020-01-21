import React, {Component} from 'react';

import Input from '../components/input';

class AddTaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTask: {
              title: '',
            }
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => ({
            newTask:
                {...prevState.newTask, [name]: value}
        }), () => console.log(this.state.newTask));
    }

    render() {
        return (
            <form className="container">
                <Input type={'text'}
                    title={'Task Title'}
                    name={'title'}
                    value={this.state.newTask.title}
                    placeholder={'Enter Task Title'} 
                    handleChange={this.handleInput} />
            </form>
        )
    }
}

export default AddTaskForm;