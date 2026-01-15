
import React from 'react';
import { AppView } from '../types';
import { Home, LayoutGrid, Heart, User, Sparkles } from 'lucide-react';

interface BottomNavProps {
  activeView: AppView;
  onViewChange: (view: AppView) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onViewChange }) => {
  const navItems = [
    { view: AppView.HOME, label: '홈', icon: <Home size={24} /> },
    { view: AppView.CATEGORY, label: '쇼핑', icon: <LayoutGrid size={24} /> },
    { view: AppView.DESIGN_LAB, label: '디자인랩', icon: <Sparkles size={24} /> },
    { view: AppView.COMMUNITY, label: '커뮤니티', icon: <Heart size={24} /> },
    { view: AppView.MY, label: '마이', icon: <User size={24} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-xl border-t border-gray-100 flex justify-around py-3 px-2 z-50">
      {navItems.map((item) => (
        <button
          key={item.view}
          onClick={() => onViewChange(item.view)}
          className={`flex flex-col items-center gap-1 transition-all duration-300 relative group px-4 py-1 rounded-2xl ${
            activeView === item.view ? 'text-orange-500' : 'text-gray-300'
          }`}
        >
          <div className={`transition-transform duration-300 ${activeView === item.view ? 'scale-110' : 'scale-100'}`}>
            {item.icon}
          </div>
          <span className={`text-[9px] font-black tracking-tighter transition-opacity ${activeView === item.view ? 'opacity-100' : 'opacity-70'}`}>
            {item.label}
          </span>
          {activeView === item.view && (
              <div className="absolute top-0 w-1 h-1 bg-orange-500 rounded-full" />
          )}
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
