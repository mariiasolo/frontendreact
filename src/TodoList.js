import React, {useState} from 'react';
import './App.css';



function App() {
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setDesc(event.target.value);
  }
  const addTodo = (event) => {
    setTodos([...todos, desc]);
  }

  return ( 
    <div>
        <input type ="text" onChange = {inputChanged} value = {desc}/>
        <button onClick={addTodo}>Add</button>
            <table>
                <tbody> {
                    todos.map(
                        (todo, index) => 
                        <tr key={index}>
                            <td>{todo}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
    </div>);
             
    
}

export default App;