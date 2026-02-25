import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { supabase } from "../../supabaseClient";

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        navigate("/");
      }
    };

    checkSession();
  }, [navigate]);

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const fetchUser = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .single();

    if (data) {
      console.log(data.full_name);
    }
  };
  

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="logo">IT342</h1>
          <p className="logo-subtitle">Disaster Management</p>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            <span className="nav-icon">📊</span>
            <span className="nav-text">Overview</span>
          </button>

          <button 
            className={`nav-item ${activeTab === "alerts" ? "active" : ""}`}
            onClick={() => setActiveTab("alerts")}
          >
            <span className="nav-icon">🚨</span>
            <span className="nav-text">Active Alerts</span>
          </button>

          <button 
            className={`nav-item ${activeTab === "reports" ? "active" : ""}`}
            onClick={() => setActiveTab("reports")}
          >
            <span className="nav-icon">📝</span>
            <span className="nav-text">Reports</span>
          </button>

          <button 
            className={`nav-item ${activeTab === "resources" ? "active" : ""}`}
            onClick={() => setActiveTab("resources")}
          >
            <span className="nav-icon">🏥</span>
            <span className="nav-text">Resources</span>
          </button>

          <button 
            className={`nav-item ${activeTab === "evacuation" ? "active" : ""}`}
            onClick={() => setActiveTab("evacuation")}
          >
            <span className="nav-icon">🚪</span>
            <span className="nav-text">Evacuation</span>
          </button>

          <button 
            className={`nav-item ${activeTab === "contacts" ? "active" : ""}`}
            onClick={() => setActiveTab("contacts")}
          >
            <span className="nav-icon">👥</span>
            <span className="nav-text">Emergency Contacts</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={logout}>
            <span className="nav-icon">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search locations, disasters, or resources..." 
            />
          </div>

          <div className="top-bar-actions">
            <button className="icon-btn">
              <span>🔔</span>
              <span className="notification-badge">3</span>
            </button>
            <button className="icon-btn">⚙️</button>
            <div className="user-avatar">👤</div>
          </div>
        </div>

        {/* Map Container */}
        <div className="map-container">
          <div className="map-placeholder">
            {/* This is where your Google Maps API will go */}
            <div className="map-overlay-info">
              <h2>🗺️ Interactive Disaster Map</h2>
              <p>Integrate Google Maps API here</p>
              <code>
                {`<GoogleMap
  center={{ lat: 14.5995, lng: 120.9842 }}
  zoom={12}
/>`}
              </code>
            </div>
          </div>

          {/* Map Controls */}
          <div className="map-controls">
            <button className="map-control-btn">
              <span>📍</span>
            </button>
            <button className="map-control-btn">
              <span>➕</span>
            </button>
            <button className="map-control-btn">
              <span>➖</span>
            </button>
            <button className="map-control-btn active">
              <span>🌐</span>
            </button>
          </div>

          {/* Active Disasters Panel */}
          <div className="disasters-panel">
            <h3>Active Disasters</h3>
            <div className="disaster-item critical">
              <div className="disaster-indicator"></div>
              <div className="disaster-info">
                <h4>Flood Alert</h4>
                <p>Manila Bay Area</p>
                <span className="disaster-time">15 mins ago</span>
              </div>
            </div>

            <div className="disaster-item warning">
              <div className="disaster-indicator"></div>
              <div className="disaster-info">
                <h4>Typhoon Warning</h4>
                <p>Eastern Visayas</p>
                <span className="disaster-time">1 hour ago</span>
              </div>
            </div>

            <div className="disaster-item info">
              <div className="disaster-indicator"></div>
              <div className="disaster-info">
                <h4>Earthquake (3.5)</h4>
                <p>Mindanao Region</p>
                <span className="disaster-time">3 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}