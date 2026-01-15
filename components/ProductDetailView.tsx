
import React from 'react';
import { Product } from '../types';
import { Star, Share2, Heart, ShoppingCart } from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, onAddToCart }) => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Image */}
      <div className="w-full aspect-square bg-gray-100">
        <img src={product.imageUrl} className="w-full h-full object-cover" alt={product.name} />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <span className="text-xs font-black text-orange-500 underline decoration-orange-200 decoration-2 underline-offset-2">{product.brand}</span>
            <h2 className="text-xl font-black text-gray-900 leading-tight">{product.name}</h2>
          </div>
          <div className="flex gap-4">
            <button className="text-gray-400"><Share2 size={20} /></button>
            <button className="text-gray-400"><Heart size={20} /></button>
          </div>
        </div>

        <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill={i <= Math.floor(product.rating) ? 'currentColor' : 'none'} />)}
            </div>
            <span className="text-sm font-black text-gray-900">{product.rating}</span>
            <span className="text-sm text-gray-400 underline">{product.reviews.toLocaleString()}개의 후기</span>
        </div>

        <div className="pt-4 border-t border-gray-50">
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400 line-through">{product.originalPrice.toLocaleString()}원</span>
                <span className="bg-orange-100 text-orange-600 text-[10px] font-black px-1.5 py-0.5 rounded">최대 할인중</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-orange-600">{product.discountRate}%</span>
                <span className="text-3xl font-black text-gray-900">{product.price.toLocaleString()}원</span>
            </div>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-4 space-y-2">
            <div className="flex justify-between text-xs">
                <span className="text-gray-500">배송방법</span>
                <span className="font-bold text-gray-800">무료배송 / 오늘출발 (오후 3시전)</span>
            </div>
            <div className="flex justify-between text-xs">
                <span className="text-gray-500">적립포인트</span>
                <span className="font-bold text-gray-800">최대 1,290P 적립</span>
            </div>
        </div>
      </div>

      {/* Tabs Placeholder */}
      <div className="border-t border-gray-100 flex">
          {['상품상세', '후기', '문의', '배송정보'].map((tab, i) => (
              <button key={tab} className={`flex-1 py-4 text-xs font-black ${i === 0 ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-400'}`}>
                  {tab}
              </button>
          ))}
      </div>

      <div className="h-48 bg-gray-50 p-6 text-center flex flex-col items-center justify-center gap-2">
          <p className="text-xs text-gray-400 font-medium">상세 페이지 이미지 영역</p>
          <div className="w-12 h-1 bg-gray-200 rounded-full" />
      </div>

      {/* Bottom Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 p-4 flex gap-4 z-50">
          <button className="w-14 h-14 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-600">
              <Heart size={24} />
          </button>
          <button 
            onClick={onAddToCart}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-black py-4 rounded-2xl transition-colors shadow-lg shadow-yellow-100 flex items-center justify-center gap-2"
          >
              <ShoppingCart size={20} /> 장바구니 담기
          </button>
      </div>
    </div>
  );
};

export default ProductDetailView;
