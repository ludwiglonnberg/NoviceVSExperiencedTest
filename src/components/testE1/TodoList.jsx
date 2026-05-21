import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() === "") return;
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo("");
    };

    const handleToggleTodo = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleRemoveTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
            <h2>Todo List</h2>
            <div style={{ display: "flex", marginBottom: "1rem" }}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                    style={{ flex: 1, padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                />
                <button
                    onClick={handleAddTodo}
                    style={{
                        marginLeft: "0.5rem",
                        padding: "0.5rem 1rem",
                        backgroundColor: "#007BFF",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Add
                </button>
            </div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0.5rem",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            marginBottom: "0.5rem",
                            textDecoration: todo.completed ? "line-through" : "none",
                        }}
                    >
                        <span
                            onClick={() => handleToggleTodo(index)}
                            style={{ cursor: "pointer" }}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => handleRemoveTodo(index)}
                            style={{
                                backgroundColor: "#FF4D4D",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                                padding: "0.25rem 0.5rem",
                            }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;