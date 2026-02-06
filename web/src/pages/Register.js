import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/auth/register", form);
    alert("Registered successfully!");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>

        <div className="link">
          <Link to="/">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
}
