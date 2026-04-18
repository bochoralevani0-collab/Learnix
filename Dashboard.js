// src/pages/Dashboard.js
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Dashboard({ user }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome 👋</h1>
      <p>{user.email}</p>

      <button onClick={() => signOut(auth)}>
        Logout
      </button>

      <hr />

      <h2>📚 School Hub</h2>
      <ul>
        <li>Conspets (soon)</li>
        <li>Q&A (soon)</li>
        <li>AI Helper (soon)</li>
        <li>Files (soon)</li>
      </ul>
    </div>
  );
}

export default Dashboard;