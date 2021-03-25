import s from './TodoList.module.css';
const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <div>
      <ul className={s.container}>
        {todos.map(({ id, text }) => (
          <li key={id} className={s.item}>
            <p>{text}</p>
            <button type="button" className={s.btn} onClick={()=>onDeleteTodo(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
