import { useState } from "react";
import "./Register.css";
import { supabase } from "../../supabaseClient";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          username: form.username,
        },
      },
    });

    if (data.user) {
      const { error: insertError } = await supabase.from("users").insert([
        {
          id: data.user.id,
          full_name: form.username,
          role: "user"
        }
      ]);

      if (insertError) {
        alert(insertError.message);
      }
    }

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for confirmation!");
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>IT342</h1>
        <p>
          Create your account to access the secure dashboard system.
        </p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
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

          <div className="auth-link">
            <Link to="/">Already have an account? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}