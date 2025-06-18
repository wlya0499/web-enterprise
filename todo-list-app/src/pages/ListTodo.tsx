import { useEffect, useState } from 'react';
import { TodoItem } from '../components/TodoItem';
import type { todoDto } from '../dtos/todo.dto';
import supabase from '../utils/supabase';
import { Link } from 'react-router-dom';


export default function ListTodo() {
  const [todos, setTodos] = useState<todoDto[]>([]);

  useEffect(() => {
    async function getTodos() {
      const { data: dataTodos, error } = await supabase.from('todos').select();
      if (error) console.log('error', error);
      if (dataTodos) setTodos(dataTodos);
    }
    getTodos();
  }, []);

  const onHandleMarkDone = async (id: number) => {
    await supabase.from('todos').update({ status: 1 }).eq('id', id);
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, status: 1 } : todo)));
  };

  const onHandleDelete = async (id: number) => {
    await supabase.from('todos').update({ is_deleted: 1 }).eq('id', id);
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, is_deleted: 1 } : todo)));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Link to="/add"><button>+ Add Todo</button></Link>
      <ul>
        {todos
          .filter(todo => todo.is_deleted === 0)
          .map(todo => (
            <TodoItem
              key={todo.id}
              {...todo}
              onMarkDone={onHandleMarkDone}
              onDelete={onHandleDelete}
            />
          ))}
      </ul>
    </div>
  );
}
