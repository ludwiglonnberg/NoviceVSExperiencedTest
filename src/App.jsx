import UserFetch from "./components/test/UserFetch";
import Login from "./components/test/Login";
import TodoList from "./components/test/TodoList";

function App() {
  return (
    <div style={{ marginTop: "80px", fontFamily: "sans-serif" }}>
   
        <section className="task-section">
            <h2>Task 1: Login Form</h2>
            <Login />
        </section>
        <section className="task-section">
            <h2>Task 2: Fetch Users</h2>
            <UserFetch />
        </section>

        <section className="task-section">
            <h2>Task 3: Todo List</h2>
            <TodoList />
        </section>
    </div>
  );
}

export default App;