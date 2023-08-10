import styles from './TodoList.module.scss'
import Todo from '../Todo/Todo'

 
export default function TodoList({
    newTodo,
    createTodo,
    setNewTodo,
    todos,
    completedTodos,
    moveToCompleted,
    deleteTodo
}) {
    const handleAddTodo = () => {
        if (newTodo.title.trim() !== '') {
            createTodo();
        }
    };

    return (
        <div className={`${styles.todolist} ${styles.biggerText}`}>
            Just do it:
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    value={newTodo.title}
                    onChange={(e) => {
                        setNewTodo({ ...newTodo, title: e.target.value });
                    }}
                    onKeyDown={(e) => {
                        e.key === 'Enter' && handleAddTodo();
                    }}
                    placeholder="Add a task..."
                />
                <button
                    className={styles.addButton}
                    onClick={handleAddTodo}
                >
                    Add Todo
                </button>
            </div>
            <h3>Todos</h3>
            {todos.map(todo => (
                <Todo
                    key={todo._id}
                    todo={todo}
                    buttonAction={moveToCompleted}
                    buttonText={'Complete'}
                    buttonStyle={'completeButton'}
                />
            ))}
            <h3>Completed Todos</h3>
            {completedTodos.map(todo => (
                <Todo
                    key={todo._id}
                    todo={todo}
                    buttonAction={deleteTodo}
                    buttonText={'Delete'}
                    buttonStyle={'deleteButton'}
                />
            ))}
        </div>
    );
}