const AddTodoForm = () => {
    const [text, setText] = useState('');
    const { addTodo } = useContext(TodoContext);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addTodo(text);
      setText('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Add new todo" 
        />
        <button type="submit">Add</button>
      </form>
    );
  };
  
  export default AddTodoForm;
  
  
  