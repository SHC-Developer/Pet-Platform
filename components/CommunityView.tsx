
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Post } from '../types';
import { MessageCircle, Heart, Share2, MoreHorizontal, Camera } from 'lucide-react-native';

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    author: '집사 미민',
    authorImage: 'https://picsum.photos/seed/author1/100/100',
    date: '30분 전',
    petInfo: '포메라니안 · 3살',
    title: '댕댕이와 함께하는 가을 소풍 🍂',
    content: '날씨가 너무 좋아서 근처 공원으로 소풍 다녀왔어요! 낙엽 밟는 소리를 너무 좋아하네요 ㅎㅎ 가을철 진드기 조심하시고 다들 즐거운 산책 되세요!',
    mainImage: 'https://picsum.photos/seed/post1/600/600',
    images: ['https://picsum.photos/seed/post1a/400/400', 'https://picsum.photos/seed/post1b/400/400'],
    likes: 342,
    comments: 58
  }
];

const CommunityView: React.FC = () => {
  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-white">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row px-4 py-4 border-b border-gray-50">
            {['전체', '질문있어요', '자랑하기', '동네친구', '이벤트', '중고마켓'].map((tag, i) => (
              <TouchableOpacity key={tag} className={`px-4 py-2 rounded-full mr-2 ${i === 0 ? 'bg-orange-500' : 'bg-gray-100'}`}>
                <Text className={`text-xs font-black ${i === 0 ? 'text-white' : 'text-gray-400'}`}>
                  {tag}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {MOCK_POSTS.map(post => (
          <View key={post.id} className="mb-4 border-b-8 border-gray-50">
            <View className="p-4 flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="relative">
                  <Image source={{ uri: post.authorImage }} className="w-12 h-12 rounded-full border-2 border-orange-100" />
                  <View className="absolute -bottom-1 -right-1 bg-yellow-400 w-4 h-4 rounded-full border-2 border-white items-center justify-center">
                    <Text className="text-[8px] font-bold">✨</Text>
                  </View>
                </View>
                <View>
                  <Text className="text-sm font-black text-gray-900">{post.author}</Text>
                  <Text className="text-[10px] font-bold text-gray-400">{post.petInfo} • {post.date}</Text>
                </View>
              </View>
              <TouchableOpacity className="bg-orange-50 px-3 py-1.5 rounded-lg">
                <Text className="text-orange-600 text-[11px] font-black">팔로우</Text>
              </TouchableOpacity>
            </View>

            <View className="px-4 mb-4">
              <Text className="text-sm text-gray-800 leading-relaxed font-medium">{post.content}</Text>
              <View className="flex-row flex-wrap gap-2 mt-3">
                <Text className="text-xs text-orange-500 font-bold">#산책꿀팁</Text>
                <Text className="text-xs text-orange-500 font-bold">#가을소풍</Text>
              </View>
            </View>

            <View className="px-4">
              <View className="rounded-2xl overflow-hidden mb-4 shadow-sm">
                <Image source={{ uri: post.mainImage }} className="w-full aspect-[4/3]" />
              </View>
            </View>

            <View className="px-4 pb-6 flex-row items-center gap-6">
              <TouchableOpacity className="flex-row items-center gap-1.5">
                <Heart size={22} color="#d1d5db" />
                <Text className="text-xs font-black text-gray-400">{post.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center gap-1.5">
                <MessageCircle size={22} color="#d1d5db" />
                <Text className="text-xs font-black text-gray-400">{post.comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity className="ml-auto">
                <Share2 size={22} color="#d1d5db" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Post Button */}
      <TouchableOpacity className="absolute bottom-24 right-4 w-14 h-14 bg-orange-500 rounded-full shadow-xl items-center justify-center ring-4 ring-orange-100">
        <Camera size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default CommunityView;

export default CommunityView;
