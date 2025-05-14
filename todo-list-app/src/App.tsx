import './App.css'
import { TodoItem } from './components/Todoitem';

export default function App() {
    const todos = [
        { id: 1, todo: 'Belajar React', status: 1, isDeleted: 0 },
        { id: 2, todo: 'Ngoding Project', status: 1, isDeleted: 0 },
        { id: 3, todo: 'Belajar Vite', status: 1, isDeleted: 0 },
        { id: 4, todo: 'Belajar JS', status: 1, isDeleted: 0 },
    ];
    const onHandLeMarkDone = (id: number) => {
      console.log('Todo with id: ',{id} ,'is marked to Done');
    }
    const onHandLeDelete = (id: number) => {
      console.log('Todo with id:' ,{id} ,'is Deleted');
  }

  return (
      <div>
          <h1>Todo List</h1>
          <button onClick={() => {}}>+ Add Todo</button>
          <ul>
              {todos
                  .filter(todo => todo.isDeleted === 0)
                  .map(todo => (
                      <TodoItem
                          key={todo.id}
                          {...todo}
                          onMarkDone={onHandLeMarkDone}
                          onDelete={onHandLeDelete}
                      />
                  ))}
          </ul>
      </div>
  );
}