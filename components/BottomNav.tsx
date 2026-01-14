
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppView } from '../types';
import { Home, LayoutGrid, Heart, User, Sparkles } from 'lucide-react-native';

interface BottomNavProps {
  activeView: AppView;
  onViewChange: (view: AppView) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onViewChange }) => {
  const navItems = [
    { view: AppView.HOME, label: '홈', icon: (props: any) => <Home {...props} /> },
    { view: AppView.CATEGORY, label: '쇼핑', icon: (props: any) => <LayoutGrid {...props} /> },
    { view: AppView.DESIGN_LAB, label: '디자인랩', icon: (props: any) => <Sparkles {...props} /> },
    { view: AppView.COMMUNITY, label: '커뮤니티', icon: (props: any) => <Heart {...props} /> },
    { view: AppView.MY, label: '마이', icon: (props: any) => <User {...props} /> },
  ];

  return (
    <View className="absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 flex-row justify-around py-3 px-2 z-50">
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.view}
          onPress={() => onViewChange(item.view)}
          className="flex-col items-center gap-1 relative px-4 py-1"
        >
          <View className={activeView === item.view ? 'scale-110' : 'scale-100'}>
            {item.icon({
              size: 24,
              color: activeView === item.view ? '#f97316' : '#d1d5db'
            })}
          </View>
          <Text className={`text-[9px] font-bold tracking-tighter ${activeView === item.view ? 'text-orange-500 opacity-100' : 'text-gray-300 opacity-70'}`}>
            {item.label}
          </Text>
          {activeView === item.view && (
            <View className="absolute top-0 w-1 h-1 bg-orange-500 rounded-full" />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;

export default BottomNav;
