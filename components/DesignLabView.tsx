
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { generatePetConceptImage } from '../services/gemini';
import { Sparkles, Image as ImageIcon, Wand2 } from 'lucide-react-native';

const DesignLabView: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    const result = await generatePetConceptImage(prompt);
    setGeneratedImage(result);
    setIsLoading(false);
  };

  const suggestions = [
      "Cozy sunflower dog bed",
      "Yellow rain coat for golden retriever",
      "Modern orange cat tree",
      "Pet friendly camper van interior"
  ];

  return (
    <ScrollView className="flex-1 bg-white p-6 pb-24" showsVerticalScrollIndicator={false}>
      <View className="mb-8">
        <View className="flex-row items-center gap-2">
          <Text className="text-2xl font-black text-gray-900">AI Design Lab</Text>
          <Sparkles size={24} color="#eab308" />
        </View>
        <Text className="text-gray-400 text-sm mt-1 font-medium italic">당신의 상상이 현실이 되는 공간</Text>
      </View>

      <View className="space-y-6">
        <View className="bg-white rounded-3xl border-2 border-yellow-200 p-5 shadow-xl">
            <View className="flex-row items-center gap-2 mb-3">
                <Text className="w-8 h-8 bg-yellow-100 rounded-full text-center leading-8 text-yellow-600">💡</Text>
                <Text className="text-xs font-black text-gray-700">무엇을 그려볼까요?</Text>
            </View>
            <TextInput 
                value={prompt}
                onChangeText={setPrompt}
                placeholder="예: 해바라기 모양의 노란색 푹신한 강아지 침대"
                multiline
                numberOfLines={4}
                className="w-full h-32 text-sm text-gray-800 font-medium"
                textAlignVertical="top"
            />
            <View className="flex-row flex-wrap gap-2 mt-4">
                {suggestions.map(s => (
                    <TouchableOpacity 
                        key={s} 
                        onPress={() => setPrompt(s)}
                        className="bg-yellow-50 px-3 py-1.5 rounded-full mr-2 mb-2"
                    >
                        <Text className="text-[10px] text-yellow-700 font-bold">#{s}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity 
                onPress={handleGenerate}
                disabled={isLoading || !prompt.trim()}
                className="w-full mt-6 bg-orange-500 py-4 rounded-2xl flex-row items-center justify-center gap-2 opacity-100 disabled:opacity-50 shadow-lg shadow-orange-100"
            >
                {isLoading ? <ActivityIndicator color="#fff" /> : <Wand2 size={20} color="#fff" />}
                <Text className="text-white font-black">{isLoading ? '캔버스 준비 중...' : '디자인 생성하기'}</Text>
            </TouchableOpacity>
        </View>

        {generatedImage ? (
            <View className="space-y-4 pt-4">
                <View className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-square relative items-center justify-center">
                    <Image source={{ uri: generatedImage }} className="w-full h-full" />
                    <View className="absolute bottom-4 right-4 bg-black/30 px-3 py-1.5 rounded-full">
                        <Text className="text-white text-[10px] font-bold">Petmoa AI</Text>
                    </View>
                </View>
                <View className="flex-row gap-3">
                    <TouchableOpacity className="flex-1 bg-gray-900 py-3 rounded-2xl items-center shadow-lg">
                        <Text className="text-white text-xs font-black">저장하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 border border-gray-200 py-3 rounded-2xl items-center" onPress={() => setGeneratedImage(null)}>
                        <Text className="text-gray-900 text-xs font-black">새로 만들기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ) : (
            <View className="aspect-square bg-yellow-50/50 rounded-3xl border-4 border-dashed border-yellow-100 items-center justify-center p-8">
                <ImageIcon size={64} color="#fde047" style={{ marginBottom: 16, opacity: 0.5 }} />
                <Text className="text-sm font-black text-yellow-600 opacity-40">생성된 이미지가 이곳에 나타납니다.</Text>
            </View>
        )}
      </View>

      <View className="mt-12 bg-gray-50 rounded-3xl p-6 border border-gray-100">
          <Text className="text-gray-900 font-black text-sm mb-3">Today's Pick 🏆</Text>
          <View className="flex-row gap-3 items-center">
              <View className="w-16 h-16 bg-white rounded-xl shadow-sm overflow-hidden">
                  <Image source={{ uri: "https://picsum.photos/seed/pick/200/200" }} className="w-full h-full" />
              </View>
              <View>
                  <Text className="text-xs font-black text-gray-800">"우주 테마의 캣타워"</Text>
                  <Text className="text-[10px] text-gray-400 mt-1">@집사_초코 님이 생성함</Text>
              </View>
          </View>
      </View>
      <View className="h-20" />
    </ScrollView>
  );
};

export default DesignLabView;

export default DesignLabView;
