
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Search, ChevronLeft, X } from 'lucide-react-native';

const SearchView: React.FC<{onBack: () => void}> = ({onBack}) => {
  return (
    <View className="flex-1 bg-white">
        <View className="p-4 flex-row items-center gap-3 border-b border-gray-50">
            <TouchableOpacity onPress={onBack}><ChevronLeft size={24} color="#000" /></TouchableOpacity>
            <View className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex-row items-center gap-2">
                <Search size={18} color="#9ca3af" />
                <TextInput 
                    autoFocus 
                    placeholder="우리아이 맞춤 사료 찾기" 
                    className="bg-transparent text-sm flex-1 p-0" 
                />
                <TouchableOpacity><X size={16} color="#d1d5db" /></TouchableOpacity>
            </View>
        </View>

        <ScrollView className="flex-1 p-6" showsVerticalScrollIndicator={false}>
            <View className="flex-row justify-between items-center mb-4">
                <Text className="font-black text-sm text-gray-900">최근 검색어</Text>
                <TouchableOpacity><Text className="text-xs text-gray-400">전체 삭제</Text></TouchableOpacity>
            </View>
            <View className="flex-row flex-wrap gap-2 mb-8">
                {['연어 사료', '슬리커', '개껌', '산책 가슴줄'].map(word => (
                    <View key={word} className="flex-row items-center gap-1 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full mr-2 mb-2">
                        <Text className="text-xs text-gray-600">{word}</Text>
                        <X size={12} color="#d1d5db" />
                    </View>
                ))}
            </View>

            <Text className="font-black text-sm text-gray-900 mb-4">인기 급상승 키워드 📈</Text>
            <View className="flex-row flex-wrap">
                {[
                    { rank: 1, text: '동결건조 간식', up: true },
                    { rank: 2, text: '노견 사료 추천', up: true },
                    { rank: 3, text: '강아지 매트', up: false },
                    { rank: 4, text: '배변 패드', up: true },
                    { rank: 5, text: '치석 제거 껌', up: true },
                    { rank: 6, text: '자동 급식기', up: false },
                ].map((item) => (
                    <View key={item.rank} className="w-1/2 flex-row items-center gap-3 mb-4">
                        <Text className={`font-black italic text-lg ${item.rank <= 3 ? 'text-orange-500' : 'text-gray-300'}`}>{item.rank}</Text>
                        <Text className="text-sm font-medium text-gray-700">{item.text}</Text>
                        {item.up && <Text className="text-[10px] text-red-500 font-bold">↑</Text>}
                    </View>
                ))}
            </View>
        </ScrollView>
    </View>
  );
};

export default SearchView;

export default SearchView;
