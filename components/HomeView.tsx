
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Product } from '../types';

const categories = [
  { name: '사료', icon: '🥣', color: 'bg-yellow-100' },
  { name: '간식', icon: '🦴', color: 'bg-orange-100' },
  { name: '영양제', icon: '💊', color: 'bg-yellow-50' },
  { name: '미용', icon: '✂️', color: 'bg-orange-50' },
  { name: '산책', icon: '🦮', color: 'bg-yellow-100' },
  { name: '장난감', icon: '🎾', color: 'bg-orange-100' },
  { name: '식기', icon: '🍽️', color: 'bg-yellow-50' },
  { name: '전체', icon: '📂', color: 'bg-orange-50' },
];

const MOCK_BEST: Product[] = [
  {
    id: 'b1',
    name: '[특가] 프리미엄 연어 사료 2kg',
    brand: '고나우',
    price: 18900,
    discountRate: 15,
    originalPrice: 22000,
    rating: 4.9,
    reviews: 120,
    imageUrl: 'https://picsum.photos/seed/food1/300/300',
    badge: 'BEST'
  },
  {
    id: 'b2',
    name: '천연 소가죽 개껌 10P',
    brand: '펫츄',
    price: 9900,
    discountRate: 30,
    originalPrice: 14200,
    rating: 4.7,
    reviews: 850,
    imageUrl: 'https://picsum.photos/seed/treat1/300/300'
  }
];

interface HomeViewProps {
  onProductClick: (product: Product) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onProductClick }) => {
  return (
    <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
      {/* Search Bar - Visual only */}
      <View className="px-4 py-2">
        <View className="bg-gray-100 rounded-full flex-row items-center px-4 py-2.5 gap-2">
          <Text className="text-gray-400 text-sm">어떤 상품을 찾으시나요?</Text>
        </View>
      </View>

      {/* Main Banner */}
      <View className="px-4 py-2">
        <View className="relative w-full h-48 bg-orange-400 rounded-2xl overflow-hidden shadow-lg">
          <ImageBackground 
            source={{ uri: "https://picsum.photos/seed/banner2/800/400" }}
            className="w-full h-full"
            imageStyle={{ opacity: 0.8, backgroundColor: '#fb923c' }}
          >
            <View className="flex-1 p-6 justify-center">
              <View className="bg-white/20 self-start px-2 py-0.5 rounded mb-2">
                <Text className="text-[10px] font-bold text-white uppercase tracking-wider">Autumn Event</Text>
              </View>
              <Text className="text-2xl font-black text-white leading-tight">
                가을 맞이 펫캉스{"\n"}준비물 최대 60%
              </Text>
              <Text className="text-white/80 text-xs mt-2 font-medium">인기 산책용품 기획전 보러가기</Text>
            </View>
          </ImageBackground>
        </View>
      </View>

      {/* Categories Grid */}
      <View className="flex-row flex-wrap px-4 py-6">
        {categories.map((cat, i) => (
          <View key={i} className="w-1/4 items-center mb-6">
            <View className={`w-14 h-14 ${cat.color} rounded-2xl items-center justify-center shadow-sm mb-1`}>
              <Text className="text-2xl">{cat.icon}</Text>
            </View>
            <Text className="text-xs font-semibold text-gray-700">{cat.name}</Text>
          </View>
        ))}
      </View>

      {/* Scrolling Sections */}
      <View className="mt-4">
        <View className="px-4 flex-row items-center justify-between mb-4">
          <Text className="text-lg font-black text-gray-900">오늘만 이 가격! 🔥</Text>
          <Text className="text-xs font-bold text-orange-500">04:22:11 남음</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4 pb-4">
          {MOCK_BEST.map(p => (
            <TouchableOpacity key={p.id} onPress={() => onProductClick(p)} className="mr-4 w-40">
              <View className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-2">
                <Image source={{ uri: p.imageUrl }} className="w-full h-full" />
                <View className="absolute top-2 left-2 bg-orange-500 px-2 py-0.5 rounded">
                  <Text className="text-white text-[10px] font-black">TIME SALE</Text>
                </View>
              </View>
              <Text className="text-[11px] text-gray-400 font-bold mb-0.5">{p.brand}</Text>
              <Text className="text-xs font-medium text-gray-800 h-8" numberOfLines={2}>{p.name}</Text>
              <View className="flex-row items-center gap-1.5 mt-1">
                <Text className="text-orange-600 font-black text-sm">{p.discountRate}%</Text>
                <Text className="font-black text-sm text-gray-900">{p.price.toLocaleString()}원</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Ad Section */}
      <View className="px-4 py-6">
        <View className="bg-yellow-50 rounded-2xl p-4 flex-row items-center justify-between border border-yellow-100">
          <View>
            <Text className="text-[10px] font-bold text-yellow-600 uppercase">New Arrival</Text>
            <Text className="text-sm font-bold text-gray-800">우리아이 건강을 위한{"\n"}커스텀 영양제 론칭</Text>
          </View>
          <Text className="text-2xl">✨</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeView;
