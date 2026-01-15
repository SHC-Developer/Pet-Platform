
import React from 'react';
import { User, Settings, Package, Heart, Bell, ShieldCheck, ChevronRight, Gift } from 'lucide-react';

const MyView: React.FC = () => {
  return (
    <div className="p-6 animate-fadeIn pb-24">
      <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-gray-900">마이페이지</h2>
          <button className="p-2 bg-gray-50 rounded-full text-gray-400"><Settings size={20} /></button>
      </div>

      <div className="flex items-center gap-5 mb-8 bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-3xl border border-yellow-100 shadow-sm">
        <div className="relative">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg p-1">
                <img src="https://picsum.photos/seed/user1/200/200" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-orange-500 text-white w-7 h-7 rounded-full border-4 border-white flex items-center justify-center text-[10px] font-black">5</div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-black text-gray-900">꼬미 집사님 <span className="text-orange-500">Lv.Gold</span></h3>
          <p className="text-xs text-gray-500 font-bold mt-1">다음 레벨까지 5,000P 남았어요!</p>
          <div className="w-full h-1.5 bg-white rounded-full mt-2 overflow-hidden border border-orange-100">
              <div className="w-3/4 h-full bg-orange-400 rounded-full" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="bg-white border-2 border-orange-50 p-5 rounded-3xl shadow-sm flex flex-col items-center gap-2 hover:bg-orange-50 transition-colors group">
              <Package className="text-orange-500 group-hover:scale-110 transition-transform" size={28} />
              <span className="text-xs font-black text-gray-800">주문/배송</span>
              <span className="text-[10px] text-orange-600 font-black bg-orange-100 px-2 py-0.5 rounded-full">2건</span>
          </button>
          <button className="bg-white border-2 border-yellow-50 p-5 rounded-3xl shadow-sm flex flex-col items-center gap-2 hover:bg-yellow-50 transition-colors group">
              <Gift className="text-yellow-500 group-hover:scale-110 transition-transform" size={28} />
              <span className="text-xs font-black text-gray-800">보유쿠폰</span>
              <span className="text-[10px] text-yellow-600 font-black bg-yellow-100 px-2 py-0.5 rounded-full">4장</span>
          </button>
      </div>

      <div className="space-y-4">
          <h4 className="font-black text-sm text-gray-400 px-2">나의 활동</h4>
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden divide-y divide-gray-50">
              {[
                  { icon: <Heart size={18} className="text-orange-400"/>, name: '좋아요 누른 상품' },
                  { icon: <User size={18} className="text-yellow-400"/>, name: '내 반려동물 프로필' },
                  { icon: <Bell size={18} className="text-gray-400"/>, name: '알림 히스토리' },
                  { icon: <ShieldCheck size={18} className="text-green-400"/>, name: '고객센터 / 공지사항' }
              ].map((item, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                          {item.icon}
                          <span className="text-sm font-black text-gray-800">{item.name}</span>
                      </div>
                      <ChevronRight size={18} className="text-gray-300" />
                  </button>
              ))}
          </div>
      </div>

      <div className="mt-12 text-center pb-8">
          <button className="text-xs text-gray-400 font-bold hover:underline">회원탈퇴</button>
          <span className="mx-3 text-gray-200">|</span>
          <button className="text-xs text-gray-400 font-bold hover:underline">로그아웃</button>
      </div>
    </div>
  );
};

export default MyView;
