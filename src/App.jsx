
const App = () => {
  return(
    <TodoProvider>
      <div>
        <h1>Todo App</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;


