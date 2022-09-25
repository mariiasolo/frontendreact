import React from 'react';
import './App.css';



function TodoTable (props) {
    return (
    <div className = "App">
        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                </tr>        
                { 
                props.todoList.map ((item, index) => 
                    <tr key= {index}>
                        <td> {item.date} </td>
                        <td> {item.description }</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    </div>  
    );
}

export default TodoTable;