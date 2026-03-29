import Field from "@/shared/ui/Field";
import { useContext } from "react";
import { TasksContext } from "@/entities/todo";

const SearchTaskForm = (props) => {
  const { styles } = props;
  const context = useContext(TasksContext);
  const {
    searchQuery,
    setSearchQuery,
  } = context;
  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Field
        className={styles.field}
        label="Search task"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  )
}

export default SearchTaskForm;
