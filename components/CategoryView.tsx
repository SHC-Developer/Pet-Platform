
import React from 'react';
import { Product } from '../types';
import { Star, ChevronDown, Filter } from 'lucide-react';

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
    <div className="p-4 animate-fadeIn">
      <h2 className="text-xl font-black mb-4">미용/관리</h2>
      
      {/* Filters */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button className="flex items-center whitespace-nowrap px-4 py-2 bg-orange-500 text-white rounded-full text-xs font-bold">
                <Filter size={14} className="mr-1" /> 필터
            </button>
            {['브랜드', '가격대', '평점', '배송방식'].map(f => (
                <button key={f} className="flex items-center whitespace-nowrap px-4 py-2 border border-gray-200 rounded-full text-xs text-gray-600 font-medium">
                    {f} <ChevronDown size={14} className="ml-1 opacity-40" />
                </button>
            ))}
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
          <span className="text-xs text-gray-500"><strong className="text-gray-900">574</strong>개의 아이템</span>
          <button className="text-xs font-bold flex items-center gap-1 text-gray-700">추천순 <ChevronDown size={14} /></button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-10">
        {MOCK_PRODUCTS.map((p) => (
          <div key={p.id} onClick={() => onProductClick(p)} className="group cursor-pointer">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3 shadow-sm">
              <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              {p.badge && (
                  <div className="absolute top-0 left-0 bg-yellow-400 text-yellow-900 text-[10px] font-black px-2 py-1 rounded-br-xl">
                      {p.badge}
                  </div>
              )}
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-gray-400 font-bold">{p.brand}</p>
              <h3 className="text-xs font-semibold leading-tight h-8 line-clamp-2 text-gray-800">{p.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-orange-500 font-black text-base">{p.discountRate}%</span>
                <span className="text-base font-black text-gray-900">{p.price.toLocaleString()}원</span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <Star size={10} fill="#FFB800" className="text-yellow-400" />
                <span className="text-[10px] font-bold text-gray-900">{p.rating}</span>
                <span className="text-[10px] text-gray-300">({p.reviews.toLocaleString()})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryView;
