
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Product } from '../types';
import { Star, ChevronDown, Filter } from 'lucide-react-native';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: '프리미엄 원터치 슬리커 브러쉬',
    brand: '그루밍랩',
    price: 12900,
    discountRate: 35,
    originalPrice: 19900,
    rating: 4.8,
    reviews: 3479,
    imageUrl: 'https://picsum.photos/seed/brush1/400/400',
    badge: '판매1위'
  },
  {
    id: '2',
    name: '무소음 LED 반려동물 발톱깎이',
    brand: '도기독',
    price: 8900,
    discountRate: 20,
    originalPrice: 11000,
    rating: 4.7,
    reviews: 4540,
    imageUrl: 'https://picsum.photos/seed/nail1/400/400'
  },
  {
    id: '3',
    name: '대용량 먼지제거 돌돌이 3P',
    brand: '클린펫',
    price: 15900,
    discountRate: 15,
    originalPrice: 18700,
    rating: 4.9,
    reviews: 1280,
    imageUrl: 'https://picsum.photos/seed/brush2/400/400'
  },
  {
    id: '4',
    name: 'USB 충전식 휴대용 바리깡',
    brand: '정글몬스터',
    price: 34900,
    discountRate: 10,
    originalPrice: 38900,
    rating: 4.6,
    reviews: 890,
    imageUrl: 'https://picsum.photos/seed/trimmer1/400/400'
  }
];

interface CategoryViewProps {
  onProductClick: (product: Product) => void;
}

const CategoryView: React.FC<CategoryViewProps> = ({ onProductClick }) => {
  return (
    <ScrollView className="flex-1 bg-white p-4" showsVerticalScrollIndicator={false}>
      <Text className="text-xl font-black mb-4">미용/관리</Text>
      
      {/* Filters */}
      <View className="mb-6">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-2">
          <TouchableOpacity className="flex-row items-center px-4 py-2 bg-orange-500 rounded-full mr-2">
            <Filter size={14} color="#fff" />
            <Text className="text-white text-xs font-bold ml-1">필터</Text>
          </TouchableOpacity>
          {['브랜드', '가격대', '평점', '배송방식'].map(f => (
            <TouchableOpacity key={f} className="flex-row items-center px-4 py-2 border border-gray-200 rounded-full mr-2">
              <Text className="text-xs text-gray-600 font-medium">{f}</Text>
              <ChevronDown size={14} color="#9ca3af" style={{ marginLeft: 4, opacity: 0.4 }} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-xs text-gray-500"><Text className="text-gray-900 font-bold">574</Text>개의 아이템</Text>
        <TouchableOpacity className="flex-row items-center gap-1">
          <Text className="text-xs font-bold text-gray-700">추천순</Text>
          <ChevronDown size={14} color="#374151" />
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
      <View className="flex-row flex-wrap justify-between">
        {MOCK_PRODUCTS.map((p) => (
          <TouchableOpacity 
            key={p.id} 
            onPress={() => onProductClick(p)} 
            className="w-[48%] mb-10"
          >
            <View className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3 shadow-sm">
              <Image source={{ uri: p.imageUrl }} className="w-full h-full" />
              {p.badge && (
                <View className="absolute top-0 left-0 bg-yellow-400 px-2 py-1 rounded-br-xl">
                  <Text className="text-yellow-900 text-[10px] font-black">{p.badge}</Text>
                </View>
              )}
            </View>
            <View className="space-y-1">
              <Text className="text-[10px] text-gray-400 font-bold">{p.brand}</Text>
              <Text className="text-xs font-semibold leading-tight h-8 text-gray-800" numberOfLines={2}>{p.name}</Text>
              <View className="flex-row items-center gap-2 mt-1">
                <Text className="text-orange-500 font-black text-base">{p.discountRate}%</Text>
                <Text className="text-base font-black text-gray-900">{p.price.toLocaleString()}원</Text>
              </View>
              <View className="flex-row items-center gap-1 mt-1">
                <Star size={10} color="#FFB800" fill="#FFB800" />
                <Text className="text-[10px] font-bold text-gray-900">{p.rating}</Text>
                <Text className="text-[10px] text-gray-300">({p.reviews.toLocaleString()})</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoryView;

export default CategoryView;
