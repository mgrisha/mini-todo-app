import { memo, useContext } from "react";
import { TasksContext } from "@/entities/todo";
import RouterLink from "@/shared/ui/RouterLink";

import styles from "./TodoItem.module.scss";
import {highlightCaseInsensitive} from "@/shared/utils/highlight.js";

const TodoItem = (props) => {
    const {
      className = '',
      id,
      title,
      isDone,
    } = props;

    const context = useContext(TasksContext);
    const {
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
      deleteTask,
      toggleTaskComplete,
      disappearingTaskId,
      appearingTaskId,
      searchQuery,
    } = context;

    const highlightedTitle = highlightCaseInsensitive(title, searchQuery);

    return (
      <li className={`${styles.todoItem} ${className} ${disappearingTaskId === id ? styles.isDisappearing : ''} ${appearingTaskId === id ? styles.isAppearing : ''}`} ref={id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}>
        <input
          type="checkbox"
          className={styles.checkbox}
          id={id}
          checked={isDone}
          onChange={({target}) => toggleTaskComplete(id, target.checked)}
        />
        <label
          htmlFor={id}
          className={`${styles.label} visually-hidden`}
        >
          {title}
        </label>
        <RouterLink to={`tasks/${id}`} aria-label="Task detail page">
          {/*{title}*/}
          <span dangerouslySetInnerHTML={{ __html: highlightedTitle }}></span>
        </RouterLink>
        <button
          className={styles.deleteButton}
          aria-label="Delete"
          title="Delete"
          onClick={() => deleteTask(id)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </li>
    )
}

export default memo(TodoItem);
