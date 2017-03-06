import React, {Component} from 'react'
import TodoItem from './TodoItem'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            todos: [
                    ],
            count: 0 // keeps track of the key for the item
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        var newTodo = this.state.todos.slice();
        newTodo.push({id: this.state.count, title: this.state.title, description: this.state.description});
        this.setState({title: '', description: '', todos: newTodo, count: this.state.count + 1})
    }


    render(){
        const list = this.state.todos.map((todo) => {
            return <TodoItem key={todo.id}
                             id={todo.id}
                             title={todo.title}
                             description={todo.description}
                             />;
        });
        return(
                <div className="box">
                    <form onSubmit={this.onSubmit} >
                        <label>
                            Title
                            <input onChange={this.onChange} 
                                    value={this.state.title} 
                                    type="text" 
                                    name="title" 
                                    className="input"/>
                        </label>
                        <label className="label">
                            Time 
                            <input onChange={this.onChange} 
                                    value={this.state.description} 
                                    type="text" 
                                    name="description"
                                    className="input"/>
                        </label>
                        <button type="submit" className="todo-button">Save</button>
                    </form>
                    <div className="list">
                        To Do:
                        <ul>
                            {list}
                        </ul>
                    </div>
                </div>
            );
    }
}

