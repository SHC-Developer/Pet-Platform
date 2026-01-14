
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Product } from '../types';
import { Star, Share2, Heart, ShoppingCart } from 'lucide-react-native';

interface ProductDetailViewProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, onAddToCart }) => {
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <View className="w-full aspect-square bg-gray-100">
          <Image source={{ uri: product.imageUrl }} className="w-full h-full" />
        </View>

        <View className="p-6 space-y-4">
          <View className="flex-row justify-between items-start">
            <View className="flex-1 mr-4">
              <Text className="text-xs font-black text-orange-500 underline decoration-orange-200">{product.brand}</Text>
              <Text className="text-xl font-black text-gray-900 leading-tight mt-1">{product.name}</Text>
            </View>
            <View className="flex-row gap-4">
              <TouchableOpacity><Share2 size={20} color="#9ca3af" /></TouchableOpacity>
              <TouchableOpacity><Heart size={20} color="#9ca3af" /></TouchableOpacity>
            </View>
          </View>

          <View className="flex-row items-center gap-2">
              <View className="flex-row gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Star 
                      key={i} 
                      size={14} 
                      color="#facc15" 
                      fill={i <= Math.floor(product.rating) ? '#facc15' : 'transparent'} 
                    />
                  ))}
              </View>
              <Text className="text-sm font-black text-gray-900">{product.rating}</Text>
              <Text className="text-sm text-gray-400 underline">{product.reviews.toLocaleString()}개의 후기</Text>
          </View>

          <View className="pt-4 border-t border-gray-50">
              <View className="flex-row items-center gap-2 mb-1">
                  <Text className="text-sm text-gray-400 line-through">{product.originalPrice.toLocaleString()}원</Text>
                  <View className="bg-orange-100 px-1.5 py-0.5 rounded">
                    <Text className="text-orange-600 text-[10px] font-black">최대 할인중</Text>
                  </View>
              </View>
              <View className="flex-row items-center gap-3">
                  <Text className="text-3xl font-black text-orange-600">{product.discountRate}%</Text>
                  <Text className="text-3xl font-black text-gray-900">{product.price.toLocaleString()}원</Text>
              </View>
          </View>

          <View className="bg-yellow-50 rounded-2xl p-4 gap-2">
              <View className="flex-row justify-between">
                  <Text className="text-xs text-gray-500">배송방법</Text>
                  <Text className="text-xs font-bold text-gray-800">무료배송 / 오늘출발 (오후 3시전)</Text>
              </View>
              <View className="flex-row justify-between">
                  <Text className="text-xs text-gray-500">적립포인트</Text>
                  <Text className="text-xs font-bold text-gray-800">최대 1,290P 적립</Text>
              </View>
          </View>
        </View>

        {/* Tabs Placeholder */}
        <View className="border-t border-gray-100 flex-row mt-4">
            {['상품상세', '후기', '문의', '배송정보'].map((tab, i) => (
                <TouchableOpacity key={tab} className={`flex-1 py-4 items-center ${i === 0 ? 'border-b-2 border-gray-900' : ''}`}>
                    <Text className={`text-xs font-black ${i === 0 ? 'text-gray-900' : 'text-gray-400'}`}>
                        {tab}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>

        <View className="h-48 bg-gray-50 items-center justify-center gap-2 p-6">
            <Text className="text-xs text-gray-400 font-medium">상세 페이지 이미지 영역</Text>
            <View className="w-12 h-1 bg-gray-200 rounded-full" />
        </View>
        <View className="h-24" />
      </ScrollView>

      {/* Bottom Action Buttons */}
      <View className="absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 p-4 flex-row gap-4 z-50 pb-8">
          <TouchableOpacity className="w-14 h-14 border border-gray-200 rounded-2xl items-center justify-center">
              <Heart size={24} color="#4b5563" />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={onAddToCart}
            className="flex-1 bg-yellow-400 py-4 rounded-2xl items-center justify-center flex-row gap-2 shadow-lg shadow-yellow-100"
          >
              <ShoppingCart size={20} color="#422006" />
              <Text className="text-yellow-900 font-black">장바구니 담기</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailView;

export default ProductDetailView;
