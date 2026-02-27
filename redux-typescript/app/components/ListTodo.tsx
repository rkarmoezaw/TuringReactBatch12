import { useReducer } from "react";

interface Todo {
  id: number;
  title: string;
}

interface TodoListProps {
  todos: Todo[];
}

type TodoActionType = "ADD_TODO" | "REMOVE_TODO" | "UPDATE_TODO";

type TodoAction = {
  type: TodoActionType;
  payload: Todo;
};

const initialState: Todo[] = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Next.js" },
  { id: 3, title: "Build a Todo App" },
];

type TodoState = typeof initialState;

const initData: Todo[] = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Next.js" },
  { id: 3, title: "Build a Todo App" },
];

function todoReducer(
  state: TodoState = initialState,
  action: TodoAction,
): TodoState {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload.id);
    case "UPDATE_TODO":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo,
      );
      `
      `;
    default:
      return state;
  }
}

function TodoItems({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default function ListTodo() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoItems todos={state} />
    </div>
  );
}
