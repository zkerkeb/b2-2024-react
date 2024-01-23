import { useState } from "react";

// Définition du composant TodoList
const TodoList = () => {
    // État pour stocker les tâches (todos), chacune avec un id, un texte et un statut
    const [todos, setTodos] = useState([{id:1, text: 'todo 1', status: 'pending'}]);

    // État pour gérer la valeur d'entrée pour une nouvelle tâche
    const [inputValue, setInputValue] = useState('');

    // État pour suivre l'id de la tâche en cours de modification
    const [idEdit, setIdEdit] = useState(null);

    // État pour stocker la valeur actuelle de la tâche en cours de modification
    const [editValue, setEditValue] = useState('');

    // Fonction pour ajouter une nouvelle tâche
    const addTodo = () => {
        // Validation de la valeur d'entrée
        if(inputValue.trim() === '' ){
            alert('Veuillez saisir un todo');
            return;
        }
        if (inputValue.trim().length < 3){
            alert('Veuillez saisir un todo de plus de 3 caractères');
            return;
        }

        // Ajout de la nouvelle tâche au début du tableau todos
        setTodos([{id: new Date().getTime(), text: inputValue, status: 'pending'}, ...todos]);
        setInputValue(''); // Réinitialisation du champ de saisie après l'ajout
    };

    // Fonction pour supprimer une tâche
    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id); // Filtrage pour retirer la tâche supprimée
        setTodos(newTodos);
    };

    // Fonction pour changer le statut d'une tâche
    const handleDone = (id) => {
        const newTodos = todos.map(todo => {
            if(todo.id === id){
                todo.status = todo.status === 'done' ? 'pending' : 'done'; // Changement de statut
            }
            return todo;
        });
        setTodos(newTodos);
    };
   
    // Fonction pour commencer la modification d'une tâche
    const handleEdit = (id, todoValue) => {
        setIdEdit(id);
        setEditValue(todoValue);
    };

    // Fonction pour appliquer les modifications après la modification d'une tâche
    const handleModify = (id) => {
        const newTodos = todos.map(todo => {
            if(todo.id === id){
                todo.text = editValue; // Mise à jour du texte de la tâche
            }
            return todo;
        });
        setTodos(newTodos);
        setIdEdit(null); // Réinitialisation de l'état d'édition
    };

    return (
        <div>
            <h2>TodoList</h2>
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                type="text"
                placeholder="Ajouter un todo"
            />
            <button onClick={addTodo}>Ajouter un todo</button>
            <ul>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        {idEdit === todo.id ? (
                            <input
                                value={editValue}
                                onChange={e => setEditValue(e.target.value)}
                                type="text"
                            />
                        ) : (
                            <li style={{ textDecoration: todo.status === 'done' ? 'line-through' : 'none' }}>
                                {todo.text}
                            </li>
                        )}
                        <button onClick={() => idEdit === todo.id ? handleModify(todo.id) : handleEdit(todo.id, todo.text)}>
                            {idEdit === todo.id ? 'Valider le changement' : 'Modifier'}
                        </button>
                        <button onClick={() => handleDone(todo.id)}>
                            {todo.status === 'pending' ?  "Marquer comme fait" : 'Marquer comme en attente'}
                        </button>
                        <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
