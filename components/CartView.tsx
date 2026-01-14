
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Trash2, Plus, Minus } from 'lucide-react-native';

const CartView: React.FC<{onBack: () => void}> = ({onBack}) => {
  const [count, setCount] = useState(1);

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="bg-gray-50 p-4 flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                  <View className="w-4 h-4 rounded border border-orange-500 bg-orange-500 items-center justify-center">
                    <Text className="text-white text-[10px]">✓</Text>
                  </View>
                  <Text className="text-sm font-bold">전체 선택 (1/1)</Text>
              </View>
              <TouchableOpacity><Text className="text-xs text-gray-400">선택 삭제</Text></TouchableOpacity>
          </View>

          <View className="p-4 border-b border-gray-50">
              <View className="flex-row gap-4">
                  <View className="mt-2 w-4 h-4 rounded border border-orange-500 bg-orange-500 items-center justify-center">
                    <Text className="text-white text-[10px]">✓</Text>
                  </View>
                  <View className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
                      <Image source={{ uri: "https://picsum.photos/seed/brush1/300/300" }} className="w-full h-full" />
                  </View>
                  <View className="flex-1 justify-between">
                      <View>
                          <View className="flex-row justify-between items-start">
                              <Text className="text-sm font-bold text-gray-800 flex-1 mr-2" numberOfLines={2}>프리미엄 원터치 슬리커 브러쉬</Text>
                              <TouchableOpacity><Trash2 size={16} color="#d1d5db" /></TouchableOpacity>
                          </View>
                          <Text className="text-xs text-gray-400 mt-1">옵션: 화이트/소형</Text>
                      </View>
                      <View className="flex-row justify-between items-center">
                          <Text className="font-black text-gray-900">12,900원</Text>
                          <View className="flex-row items-center border border-gray-200 rounded-lg">
                              <TouchableOpacity onPress={() => setCount(Math.max(1, count - 1))} className="px-2 py-1"><Minus size={14} color="#374151" /></TouchableOpacity>
                              <Text className="px-3 py-1 text-xs font-bold border-x border-gray-200">{count}</Text>
                              <TouchableOpacity onPress={() => setCount(count + 1)} className="px-2 py-1"><Plus size={14} color="#374151" /></TouchableOpacity>
                          </View>
                      </View>
                  </View>
              </View>
          </View>

          <View className="p-6 bg-white gap-4">
              <Text className="font-black text-gray-900">결제 정보</Text>
              <View className="gap-2">
                  <View className="flex-row justify-between items-center">
                      <Text className="text-sm text-gray-500">상품금액</Text>
                      <Text className="text-sm font-bold">12,900원</Text>
                  </View>
                  <View className="flex-row justify-between items-center">
                      <Text className="text-sm text-gray-500">배송비</Text>
                      <Text className="text-sm font-bold">0원</Text>
                  </View>
                  <View className="flex-row justify-between items-center">
                      <Text className="text-sm text-gray-500">할인금액</Text>
                      <Text className="text-sm font-bold text-orange-500">-0원</Text>
                  </View>
                  <View className="pt-2 border-t border-gray-100 flex-row justify-between items-center">
                      <Text className="font-black text-gray-900">최종 결제금액</Text>
                      <Text className="text-xl font-black text-orange-600">12,900원</Text>
                  </View>
              </View>
          </View>
          <View className="h-32" />
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-white border-t border-gray-100 pb-8">
          <TouchableOpacity className="w-full bg-orange-500 py-4 rounded-2xl shadow-xl shadow-orange-100 items-center">
              <Text className="text-white font-black">12,900원 결제하기</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartView;

export default CartView;
