
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { User, Settings, Package, Heart, Bell, ShieldCheck, ChevronRight, Gift } from 'lucide-react-native';

const MyView: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-white p-6 pb-24" showsVerticalScrollIndicator={false}>
      <View className="flex-row items-center justify-between mb-8">
          <Text className="text-2xl font-black text-gray-900">마이페이지</Text>
          <TouchableOpacity className="p-2 bg-gray-50 rounded-full">
            <Settings size={20} color="#9ca3af" />
          </TouchableOpacity>
      </View>

      <View className="flex-row items-center gap-5 mb-8 bg-orange-50 p-6 rounded-3xl border border-yellow-100">
        <View className="relative">
            <View className="w-20 h-20 bg-white rounded-full items-center justify-center shadow-lg p-1">
                <Image source={{ uri: "https://picsum.photos/seed/user1/200/200" }} className="w-full h-full rounded-full" />
            </View>
            <View className="absolute -bottom-1 -right-1 bg-orange-500 w-7 h-7 rounded-full border-4 border-white items-center justify-center">
              <Text className="text-white text-[10px] font-black">5</Text>
            </View>
        </View>
        <View className="flex-1">
          <Text className="text-lg font-black text-gray-900">꼬미 집사님 <Text className="text-orange-500">Lv.Gold</Text></Text>
          <Text className="text-xs text-gray-500 font-bold mt-1">다음 레벨까지 5,000P 남았어요!</Text>
          <View className="w-full h-1.5 bg-white rounded-full mt-2 overflow-hidden border border-orange-100">
              <View className="w-3/4 h-full bg-orange-400 rounded-full" />
          </View>
        </View>
      </View>

      <View className="flex-row gap-4 mb-8">
          <TouchableOpacity className="flex-1 bg-white border-2 border-orange-50 p-5 rounded-3xl items-center gap-2">
              <Package color="#f97316" size={28} />
              <Text className="text-xs font-black text-gray-800">주문/배송</Text>
              <View className="bg-orange-100 px-2 py-0.5 rounded-full">
                <Text className="text-[10px] text-orange-600 font-black">2건</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-white border-2 border-yellow-50 p-5 rounded-3xl items-center gap-2">
              <Gift color="#eab308" size={28} />
              <Text className="text-xs font-black text-gray-800">보유쿠폰</Text>
              <View className="bg-yellow-100 px-2 py-0.5 rounded-full">
                <Text className="text-[10px] text-yellow-600 font-black">4장</Text>
              </View>
          </TouchableOpacity>
      </View>

      <View className="space-y-4">
          <Text className="font-black text-sm text-gray-400 px-2 mb-2">나의 활동</Text>
          <View className="bg-white border border-gray-100 rounded-3xl overflow-hidden">
              {[
                  { icon: <Heart size={18} color="#fb923c" />, name: '좋아요 누른 상품' },
                  { icon: <User size={18} color="#facc15" />, name: '내 반려동물 프로필' },
                  { icon: <Bell size={18} color="#9ca3af" />, name: '알림 히스토리' },
                  { icon: <ShieldCheck size={18} color="#4ade80" />, name: '고객센터 / 공지사항' }
              ].map((item, i) => (
                  <TouchableOpacity key={i} className={`flex-row items-center justify-between p-5 border-b border-gray-50 ${i === 3 ? 'border-b-0' : ''}`}>
                      <View className="flex-row items-center gap-4">
                          {item.icon}
                          <Text className="text-sm font-black text-gray-800">{item.name}</Text>
                      </View>
                      <ChevronRight size={18} color="#d1d5db" />
                  </TouchableOpacity>
              ))}
          </View>
      </View>

      <View className="mt-12 flex-row justify-center pb-24">
          <TouchableOpacity><Text className="text-xs text-gray-400 font-bold">회원탈퇴</Text></TouchableOpacity>
          <Text className="mx-3 text-gray-200">|</Text>
          <TouchableOpacity><Text className="text-xs text-gray-400 font-bold">로그아웃</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MyView;

export default MyView;
