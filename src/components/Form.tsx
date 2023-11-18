interface Props {
  addTask: (task: string) => void;
}

const Form = ({ addTask }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const [task] = e.target.elements;

    if (task.value === "") return;

    addTask(task.value);

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Buy books" name="task" />
      <button>Add</button>
    </form>
  );
};

export default Form;
