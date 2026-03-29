import { memo, useContext, useMemo } from "react";
import { TasksContext } from "@/entities/todo";

const TodoInfo = (props) => {
  const { styles } = props;
  const context = useContext(TasksContext);
  const {
    tasks,
    deleteAllTasks
  } = context;

  const total = tasks.length;
  const done = useMemo(() => {
    return tasks.filter(task => task.isDone).length;
  }, [tasks]);

  const hasTasks = total > 0;

  return (
    <div className={styles.info}>
      <div className="todo__total-task">
        Done {done} from {total}
      </div>
      {hasTasks && (
        <button
          className={styles.deleteAllButton}
          type="button"
          onClick={deleteAllTasks}
        >
          Delete all
        </button>
      )}
    </div>
  );
}

export default memo(TodoInfo);
