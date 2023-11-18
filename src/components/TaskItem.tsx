interface Props {
  name: string;
  id: number;
  deleteTask: (id: number) => void;
}

const TaskItem = ({ name, id, deleteTask }: Props) => {
  return (
    <li key={id} className="task">
      {name}
      <button onClick={() => deleteTask(id)} className="btn-delete">
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
