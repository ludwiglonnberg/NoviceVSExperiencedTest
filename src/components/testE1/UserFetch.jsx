import { useEffect, useState } from "react";

function UserFetch() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch users.");
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div style={{ color: "red" }}>{error}</div>;
    }

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
            <h2>User List</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {users.map((user) => (
                    <div
                        key={user.id}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            padding: "1rem",
                        }}
                    >
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserFetch;