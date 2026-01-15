
import React from 'react';
import { Post } from '../types';
import { MessageCircle, Heart, Share2, MoreHorizontal, Camera } from 'lucide-react';

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
    <div className="animate-fadeIn">
        <div className="sticky top-0 bg-white z-40">
            <div className="flex gap-4 px-4 py-4 overflow-x-auto no-scrollbar border-b border-gray-50">
                {['전체', '질문있어요', '자랑하기', '동네친구', '이벤트', '중고마켓'].map((tag, i) => (
                    <button key={tag} className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-black ${i === 0 ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                        {tag}
                    </button>
                ))}
            </div>
        </div>

      {MOCK_POSTS.map(post => (
        <article key={post.id} className="mb-4 border-b-8 border-gray-50">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={post.authorImage} className="w-12 h-12 rounded-full border-2 border-orange-100 object-cover p-0.5" />
                <div className="absolute -bottom-1 -right-1 bg-yellow-400 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold">✨</div>
              </div>
              <div>
                <p className="text-sm font-black text-gray-900">{post.author}</p>
                <p className="text-[10px] font-bold text-gray-400">{post.petInfo} • {post.date}</p>
              </div>
            </div>
            <button className="bg-orange-50 text-orange-600 px-3 py-1.5 rounded-lg text-[11px] font-black">팔로우</button>
          </div>

          <div className="px-4 mb-4">
            <p className="text-sm text-gray-800 leading-relaxed font-medium">{post.content}</p>
            <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs text-orange-500 font-bold">#산책꿀팁</span>
                <span className="text-xs text-orange-500 font-bold">#가을소풍</span>
            </div>
          </div>

          <div className="px-4">
            <div className="rounded-2xl overflow-hidden mb-4 shadow-sm">
                <img src={post.mainImage} className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>

          <div className="px-4 pb-6 flex items-center gap-6 text-gray-400">
            <button className="flex items-center gap-1.5 hover:text-orange-500 transition-colors">
                <Heart size={22} className="fill-transparent hover:fill-orange-500" />
                <span className="text-xs font-black">{post.likes}</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-orange-500 transition-colors">
                <MessageCircle size={22} />
                <span className="text-xs font-black">{post.comments}</span>
            </button>
            <button className="flex items-center gap-1.5 ml-auto">
                <Share2 size={22} />
            </button>
          </div>
        </article>
      ))}

      {/* Floating Post Button */}
      <button className="fixed bottom-24 right-4 w-14 h-14 bg-gradient-to-tr from-orange-600 to-orange-400 text-white rounded-full shadow-xl flex items-center justify-center ring-4 ring-orange-100">
          <Camera size={24} />
      </button>
    </div>
  );
};

export default CommunityView;
