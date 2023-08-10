import styles from './Todo.module.scss'

export default function Todo({ todo, buttonAction, buttonText, buttonStyle }) {
    return (
        <div
            className={`${styles.todo} ${todo.completed ? styles.completed : ''}`}
        >
            <div className={`${styles.text} ${styles.dragHandle}`}>
                {todo.title}
            </div>
            <button
                className={`${styles.button} ${styles[buttonStyle]}`}
                onClick={() => buttonAction(todo._id)}
            >
                {buttonText}
            </button>
        </div>
    );
}