import { Task } from "../types/tasks";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Array<Task>;
  deleteTask: (id: number) => void;
}

const TaskList = ({ tasks, deleteTask }: Props) => {
  const listTask = tasks?.map((task) => (
    <TaskItem name={task.name} id={task.id} deleteTask={deleteTask} />
  ));
  return <ul className="task-list">{listTask}</ul>;
};

export default TaskList;
