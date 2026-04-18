// src/pages/Login.js
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>School Hub Login</h2>

      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Login;