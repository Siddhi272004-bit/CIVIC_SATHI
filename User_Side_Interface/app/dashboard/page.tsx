import React, { useState } from 'react';
import { Map, FileText, Trophy, Coins, CheckCircle, ChevronRight, Award, Lock } from 'lucide-react';

interface UserStats {
  reportsIssued: number;
  reportsResolved: number;
  coins: number;
  level: number;
}

interface Certification {
  id: number;
  title: string;
  description: string;
  threshold: number; // Coins or reports needed
  achieved: boolean;
  iconColor: string;
}

const CommunityDashboard: React.FC = () => {
  // Mock State
  const [stats, setStats] = useState<UserStats>({
    reportsIssued: 247,
    reportsResolved: 189,
    coins: 1250,
    level: 3
  });

  // Mock Certifications Data
  const certifications: Certification[] = [
    { 
      id: 1, 
      title: "Civic Observer", 
      description: "Report your first 10 issues", 
      threshold: 10, 
      achieved: true,
      iconColor: "text-blue-500"
    },
    { 
      id: 2, 
      title: "Neighborhood Watch", 
      description: "Earn 1000 Coins", 
      threshold: 1000, 
      achieved: true,
      iconColor: "text-green-500"
    },
    { 
      id: 3, 
      title: "Community Guardian", 
      description: "Reach Level 5", 
      threshold: 5, // Target Level
      achieved: false,
      iconColor: "text-purple-500"
    },
    { 
      id: 4, 
      title: "City Hero", 
      description: "Resolve 500 Issues", 
      threshold: 500, 
      achieved: false,
      iconColor: "text-orange-500"
    }
  ];

  const nextLevelThreshold = 2000;
  const progressPercentage = (stats.coins / nextLevelThreshold) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans text-slate-800">
      <div className="max-w-md mx-auto space-y-6">
        
        {/* Header / Progress Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-500 font-medium">Your Balance</p>
              <div className="flex items-center gap-2">
                <Coins className="text-yellow-500" size={20} />
                <span className="text-2xl font-bold">{stats.coins.toLocaleString()}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                LEVEL {stats.level}
              </span>
            </div>
          </div>

          {/* Reward Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium">
              <span>Progress to Certification</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
              <div className="bg-green-500 h-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}/>
            </div>
            <p className="text-[10px] text-gray-400 italic">
              Earn {nextLevelThreshold - stats.coins} more coins for your 'Community Guardian' Certificate
            </p>
          </div>
        </div>

        {/* --- NEW SECTION: Certifications Tracker --- */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className="text-purple-600" size={20} />
              <h3 className="text-lg font-bold">Certifications</h3>
            </div>
            <span className="text-xs text-gray-400">{certifications.filter(c => c.achieved).length}/{certifications.length} Earned</span>
          </div>

          <div className="space-y-3">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                  cert.achieved 
                    ? 'bg-green-50 border-green-100' 
                    : 'bg-white border-gray-100 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${cert.achieved ? 'bg-white shadow-sm' : 'bg-gray-100'}`}>
                    {cert.achieved ? (
                      <Award size={18} className={cert.iconColor} />
                    ) : (
                      <Lock size={18} className="text-gray-400" />
                    )}
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${cert.achieved ? 'text-gray-800' : 'text-gray-500'}`}>
                      {cert.title}
                    </p>
                    <p className="text-[10px] text-gray-500">{cert.description}</p>
                  </div>
                </div>
                
                {cert.achieved && (
                  <CheckCircle size={16} className="text-green-500" />
                )}
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 text-xs font-semibold text-purple-600 hover:text-purple-700 transition-colors">
            View All Achievements
          </button>
        </div>
        {/* ------------------------------------------- */}

        {/* Action Buttons */}
        <button className="w-full bg-[#E8F3F1] text-[#2D5A53] py-4 rounded-xl font-semibold hover:bg-opacity-80 transition-all">
          View My Reports
        </button>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#E8F3F1] p-3 rounded-xl">
              <Map className="text-[#2D5A53]" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold">Community Map</h3>
              <p className="text-gray-500 text-sm">See reported issues in your area</p>
            </div>
          </div>
          
          <button className="w-full border border-gray-200 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
            View Map
          </button>
        </div>

        {/* Impact Stats */}
        <div className="bg-[#F0F7FF] p-6 rounded-2xl border border-[#DCEBFA]">
          <div className="flex items-center gap-2 mb-6 text-[#1E3A8A]">
            <FileText size={18} />
            <span className="font-semibold text-sm uppercase tracking-wider">Community Impact</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="border-r border-blue-100">
              <p className="text-3xl font-bold text-[#0D47A1]">{stats.reportsIssued}</p>
              <p className="text-xs text-gray-500 mt-1">Issues Reported</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#B0BEC5]">{stats.reportsResolved}</p>
              <p className="text-xs text-gray-500 mt-1">Issues Resolved</p>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center px-6">
          <p className="text-gray-500 text-sm leading-relaxed">
            Together we can make our community better, one report at a time.
          </p>
        </div>

        {/* Reward Card */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 rounded-xl flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <Trophy className="text-yellow-400" size={24} />
            <div>
              <p className="text-sm font-bold">Available Rewards</p>
              <p className="text-[10px] text-gray-400">Redeem coins for local vouchers</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

      </div>
    </div>
  );
};

export default CommunityDashboard;
