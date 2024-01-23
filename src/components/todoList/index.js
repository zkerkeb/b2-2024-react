import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([{id:1, text: 'todo 1', status: 'pending'}])
    const [inputValue, setInputValue] = useState('couocu')
    const [idEdit, setIdEdit] = useState(null)
    const [editValue, setEditValue] = useState('')

    const addTodo = () => {
     
        if(inputValue.trim() === '' ){
            alert('Veuillez saisir un todo')
            return
        }
        if (inputValue.trim().length < 3){
            alert('Veuillez saisir un todo de plus de 3 caractères')
            return
        }
        // todos.push({id:2, text: inputValue, status: 'pending'})
       
        setTodos([{id: new Date().getTime(), text: inputValue, status: 'pending'}, ...todos])
        setInputValue('')
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const handleDone = (id) => {
        const newTodos = todos.map(todo => {
            if(todo.id === id){
                todo.status = todo.status === 'done' ? 'pending' : 'done'
            }
            return todo
        })
        setTodos(newTodos)
    }
   
    const handleEdit = (id, todoValue) => {
        setIdEdit(id)
        setEditValue(todoValue)
    }


    const handleModify = (id) => {
        const newTodos = todos.map(todo => {
            if(todo.id === id){
                todo.text = editValue
            }
            return todo
        })
        setTodos(newTodos)
        setIdEdit(null)
    }


    return (
        <div>
            <h2>TodoList</h2>
            <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
                type="text"
                placeholder="Ajouter un todo"
            ></input>
            <button 
            onClick={addTodo}
            > add todo</button>
            <ul>
                {todos.map((todo) => {
                    console.log(todo)
                    return (
                    <div>
                    {idEdit === todo.id ? (
                        <input
                        value={editValue}
                        onChange={e => setEditValue(e.target.value)}
                        type="text"
                    ></input>
                    ): (
                    <li
                     style={{
                        textDecoration: todo.status === 'done' ? 'line-through' : 'none'
                        // textDecoration: 'line-through'
                     }}
                    >{todo.text}</li>
                    )}
                    <button onClick={() => idEdit === todo.id ? handleModify(todo.id) : handleEdit(todo.id, todo.text)}>{idEdit === todo.id ? 'valider le changement' : 'edit'}</button>
                    <button onClick={() => handleDone(todo.id)}> {todo.status === 'pending' ?  "mark as done" : 'mark as pending'} </button>
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    </div>)
                })}
            </ul>
        </div>
    );
}


export default TodoList;