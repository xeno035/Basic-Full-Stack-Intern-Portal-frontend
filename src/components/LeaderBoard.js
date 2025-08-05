import React from 'react';
import { FaTrophy, FaCrown, FaMedal, FaGem } from 'react-icons/fa';

const LeaderBoard = ({ leaderboard, currentUser }) => {
  // Get top 3 users
  const top3 = leaderboard.slice(0, 3);
  const restUsers = leaderboard.slice(3);

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <FaCrown className="text-yellow-400 text-2xl" />;
      case 2:
        return <FaMedal className="text-gray-300 text-xl" />;
      case 3:
        return <FaMedal className="text-amber-600 text-xl" />;
      default:
        return <span className="text-gray-400 font-bold">{rank}</span>;
    }
  };

  const getTop3Style = (rank) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-yellow-400/30";
      case 2:
        return "bg-gradient-to-br from-gray-300/20 to-gray-500/20 border-gray-300/30";
      case 3:
        return "bg-gradient-to-br from-amber-600/20 to-amber-800/20 border-amber-600/30";
      default:
        return "";
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-6">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Leaderboard</h2>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Top 3 Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {top3.map((user, index) => {
            const rank = index + 1;
            const isCurrentUser = currentUser && user.referral === currentUser.referral;
            
            return (
              <div
                key={index}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${getTop3Style(rank)} ${
                  isCurrentUser ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                {/* Rank Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-600">
                  {getRankIcon(rank)}
                </div>

                {/* Avatar */}
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                {/* User Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">{user.name}</h3>
                  <p className="text-sm text-gray-400 mb-3 font-bold">{user.referral}</p>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <FaTrophy className="text-yellow-400" />
                    <span className="text-sm text-gray-300">Total Donations: ₹{user.donations}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <FaGem className="text-blue-400" />
                    <span className="text-sm font-medium">1 Prize</span>
                  </div>
                  
                  {isCurrentUser && (
                    <div className="mt-2">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">You</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* User Stats */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <div className="text-center">
            <span className="text-gray-300">
              You had donation of ₹{currentUser?.donations || 0} today and ranked {leaderboard.findIndex(u => u.referral === currentUser?.referral) + 1 || '-'} out of {leaderboard.length} users
            </span>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">User name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Referral Code</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Total Donations</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Reward</th>
                </tr>
              </thead>
              <tbody>
                {restUsers.map((user, index) => {
                  const rank = index + 4;
                  const isCurrentUser = currentUser && user.referral === currentUser.referral;
                  
                  return (
                    <tr
                      key={index}
                      className={`border-b border-gray-700 hover:bg-gray-700/50 transition-colors ${
                        isCurrentUser ? 'bg-blue-900/20' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center">
                          {getRankIcon(rank)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-medium text-white">{user.name}</div>
                          </div>
                          {isCurrentUser && (
                            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">You</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300 font-bold">{user.referral}</td>
                      <td className="px-6 py-4 text-gray-300">₹{user.donations.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <FaGem className="text-blue-400" />
                          <span className="text-gray-300">1</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
