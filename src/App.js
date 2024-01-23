import './App.css';
// import Counter from './components/counter';
import Header from './components/header';
import TodoList from './components/todoList';

function App() {
  return (
    <div>
      <Header label="bonjour Paris" />
      {/* <Counter /> */}
      <TodoList/>
    </div>
  );
}

export default App;
