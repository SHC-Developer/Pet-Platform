
import React from 'react';
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
    <div className="animate-fadeIn">
      {/* Search Bar - Visual only */}
      <div className="px-4 py-2">
        <div className="bg-gray-100 rounded-full flex items-center px-4 py-2.5 gap-2 text-gray-400 text-sm">
          <span>어떤 상품을 찾으시나요?</span>
        </div>
      </div>

      {/* Main Banner */}
      <div className="px-4 py-2">
        <div className="relative w-full h-48 bg-orange-400 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://picsum.photos/seed/banner2/800/400" 
            alt="Banner" 
            className="w-full h-full object-cover mix-blend-overlay opacity-80"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
            <span className="text-[10px] font-bold bg-white/20 w-fit px-2 py-0.5 rounded backdrop-blur-sm mb-2 uppercase tracking-wider">Autumn Event</span>
            <h2 className="text-2xl font-black leading-tight">
              가을 맞이 펫캉스<br />준비물 최대 60%
            </h2>
            <p className="text-white/80 text-xs mt-2 font-medium">인기 산책용품 기획전 보러가기</p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-4 gap-y-6 px-4 py-6">
        {categories.map((cat, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-2xl mb-1 shadow-sm`}>
              {cat.icon}
            </div>
            <span className="text-xs font-semibold text-gray-700">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Scrolling Sections */}
      <section className="mt-4">
        <div className="px-4 flex items-center justify-between mb-4">
          <h3 className="text-lg font-black text-gray-900">오늘만 이 가격! 🔥</h3>
          <span className="text-xs font-bold text-orange-500">04:22:11 남음</span>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar">
          {MOCK_BEST.map(p => (
            <div key={p.id} onClick={() => onProductClick(p)} className="min-w-[160px] cursor-pointer group">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-2">
                <img src={p.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded">TIME SALE</div>
              </div>
              <p className="text-[11px] text-gray-400 font-bold mb-0.5">{p.brand}</p>
              <h4 className="text-xs font-medium text-gray-800 line-clamp-2 h-8">{p.name}</h4>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-orange-600 font-black text-sm">{p.discountRate}%</span>
                <span className="font-black text-sm text-gray-900">{p.price.toLocaleString()}원</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Section */}
      <div className="px-4 py-6">
        <div className="bg-yellow-50 rounded-2xl p-4 flex items-center justify-between border border-yellow-100">
          <div>
            <p className="text-[10px] font-bold text-yellow-600">NEW ARRIVAL</p>
            <h4 className="text-sm font-bold text-gray-800">우리아이 건강을 위한<br/>커스텀 영양제 론칭</h4>
          </div>
          <span className="text-2xl">✨</span>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
