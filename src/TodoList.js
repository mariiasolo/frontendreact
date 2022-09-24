import React, {useState} from 'react';
import './App.css';
import TodoTable from './TodoTable';



function TodoList() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todoList, setTodoList] = useState([]);

  const inputChanged = (event) => {
    setTodo({... todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodoList([...todoList, todo]);
  }

  return ( 
    <div className = "App">
        <form onSubmit={addTodo}>
            <input type="date" name="date" value= {todo.date} onChange = {inputChanged} />
            <input type="text" name = "description" value={todo.description} onChange= {inputChanged} />
            <input type= "submit" value= "Add" />
        
        </form>
        <TodoTable todoList={todoList} /> 
       
    </div>);
             
    
}

export default TodoList;
