import React, {Component} from 'react';

import Input from '../components/input';
import TextArea from '../components/textarea';

class AddTaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTask: {
              id: 0,
              title: '',
              description: '',
              status: 'backlog',
            }
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleTextArea = this.handleTextArea.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => ({
            newTask:
                {...prevState.newTask, [name]: value}
        }), () => console.log(this.state.newTask));
    }

    handleTextArea(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            newTask: {
                ...prevState.newTask, description: value
            }
        }), ()=>console.log(this.state.newTask));
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
                <TextArea title={'Task Description'}
                    name={'description'}
                    rows={4}
                    cols={80}
                    value={this.state.newTask.description}
                    placeholder={'Enter Task Description'}
                    handleChange={this.handleTextArea} />
            </form>
        )
    }
}

export default AddTaskForm;