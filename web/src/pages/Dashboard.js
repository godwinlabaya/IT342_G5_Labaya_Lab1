import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    axios.get("http://localhost:8080/api/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Dashboard</h2>
        <p style={{ textAlign: "center" }}>
          Welcome! You are logged in.
        </p>

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
