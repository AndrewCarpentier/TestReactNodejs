import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

export default function TodoList({ todoList, deleteTodo, updateTodo }) {
  return todoList.length ? (
    <ul>
      {todoList.map((t) =>
        t.edit ? (
          <EditTodo
            role="listitem"
            key={t.id}
            todo={t}
            updateTodo={updateTodo}
          />
        ) : (
          <TodoItem
            role="listitem"
            key={t.id}
            todo={t}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        )
      )}
    </ul>
  ) : (
    <>
      <p data-testId="emptyListText">Aucune todo pour le moment</p>
    </>
  );
}
