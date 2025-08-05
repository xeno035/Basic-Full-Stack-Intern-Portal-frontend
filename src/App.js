import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import LeaderBoard from "./components/LeaderBoard";

function App() {
  const [user, setUser] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');

  useEffect(() => {
    fetchUserData();
    fetchLeaderboard();
    setLoading(false);
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/user');
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      // Handle error silently
    }
  };

  const fetchLeaderboard = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/leaderboard');
      if (response.ok) {
        const data = await response.json();
        setLeaderboard(data);
      }
    } catch (error) {
      // Handle error silently
    }
  };

  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar with dark theme */}
      <nav className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Intern Portal</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavigate('dashboard')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'dashboard'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <span>Dashboard</span>
              </button>
              
              <button
                onClick={() => handleNavigate('leaderboard')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === 'leaderboard'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <span>Leaderboard</span>
              </button>
            </div>

            {/* User Info */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <span>Welcome, {user?.name || 'User'}</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setActiveSection(activeSection === 'dashboard' ? 'leaderboard' : 'dashboard')}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              >
                <span className="text-sm font-medium">
                  {activeSection === 'dashboard' ? 'Leaderboard' : 'Dashboard'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {activeSection === 'dashboard' ? (
        <Dashboard user={user} leaderboard={leaderboard} />
      ) : (
        <LeaderBoard leaderboard={leaderboard} currentUser={user} />
      )}
    </div>
  );
}

export default App;
