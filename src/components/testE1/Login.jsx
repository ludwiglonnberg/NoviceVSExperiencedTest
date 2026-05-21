import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!email) {
            setError("Email is required.");
            return;
        }

        if (!password) {
            setError("Password is required.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Simulate successful login
        alert("Login successful!");
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
            <h2>Login</h2>
            {error && <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem" }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#007BFF",
                        color: "white",
                        padding: "0.5rem 1rem",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;