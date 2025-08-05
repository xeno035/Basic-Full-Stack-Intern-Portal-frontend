import React from "react";
import { FaCheckCircle, FaUser, FaCode, FaMoneyBillWave, FaGift } from 'react-icons/fa';

const Dashboard = ({ user, leaderboard }) => {
  // Static rewards data
  const rewards = [
    "Intern Badge",
    "Free Swag",
    "Certificate",
    "Exclusive Webinar Access"
  ];

  // Calculate user's actual rank from leaderboard
  const getUserRank = () => {
    if (!user || !leaderboard) return { rank: '-', total: 0 };
    
    const userIndex = leaderboard.findIndex(u => u.referral === user.referral);
    return {
      rank: userIndex !== -1 ? userIndex + 1 : '-',
      total: leaderboard.length
    };
  };

  const { rank, total } = getUserRank();

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-6">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Dashboard</h2>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* User Profile Card */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Welcome, {user?.name || 'User'}</h2>
            <p className="text-gray-400">Intern Portal Dashboard</p>
          </div>

          {/* User Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Referral Code */}
            <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
              <div className="flex items-center space-x-3 mb-3">
                <FaCode className="text-blue-400 text-xl" />
                <h3 className="text-lg font-semibold text-white">Referral Code</h3>
              </div>
              <p className="text-2xl font-bold text-blue-400">{user?.referral || 'N/A'}</p>
              <p className="text-sm text-gray-400 mt-2">Share this code with friends</p>
            </div>

            {/* Total Donations */}
            <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
              <div className="flex items-center space-x-3 mb-3">
                <FaMoneyBillWave className="text-green-400 text-xl" />
                <h3 className="text-lg font-semibold text-white">Total Donations</h3>
              </div>
              <p className="text-2xl font-bold text-green-400">₹{user?.donations?.toLocaleString() || 0}</p>
              <p className="text-sm text-gray-400 mt-2">Your contribution so far</p>
            </div>

            {/* Current Rank */}
            <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
              <div className="flex items-center space-x-3 mb-3">
                <FaUser className="text-purple-400 text-xl" />
                <h3 className="text-lg font-semibold text-white">Current Rank</h3>
              </div>
              <p className="text-2xl font-bold text-purple-400">#{rank}</p>
              <p className="text-sm text-gray-400 mt-2">Out of {total} users</p>
            </div>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <FaGift className="text-yellow-400 text-2xl" />
            <h3 className="text-2xl font-bold text-white">Rewards & Unlockables</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rewards.map((reward, index) => (
              <div key={index} className="bg-gray-700 border border-gray-600 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-600 transition-colors">
                <FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">{reward}</span>
                  <p className="text-sm text-gray-400 mt-1">Unlocked at ₹1000 donations</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
