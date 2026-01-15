
import React, { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartView: React.FC<{onBack: () => void}> = ({onBack}) => {
  const [count, setCount] = useState(1);

  return (
    <div className="animate-fadeIn pb-32">
        <div className="bg-gray-50 p-4 flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm font-bold">
                <input type="checkbox" checked className="w-4 h-4 accent-orange-500" readOnly />
                전체 선택 (1/1)
            </label>
            <button className="text-xs text-gray-400">선택 삭제</button>
        </div>

        <div className="p-4 border-b border-gray-50">
            <div className="flex gap-4">
                <input type="checkbox" checked className="mt-2 accent-orange-500" readOnly />
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
                    <img src="https://picsum.photos/seed/brush1/300/300" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start">
                            <h4 className="text-sm font-bold text-gray-800 leading-tight">프리미엄 원터치 슬리커 브러쉬</h4>
                            <button className="text-gray-300"><Trash2 size={16} /></button>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">옵션: 화이트/소형</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-black text-gray-900">12,900원</span>
                        <div className="flex items-center border border-gray-200 rounded-lg">
                            <button onClick={() => setCount(Math.max(1, count - 1))} className="px-2 py-1"><Minus size={14} /></button>
                            <span className="px-3 py-1 text-xs font-bold border-x border-gray-200">{count}</span>
                            <button onClick={() => setCount(count + 1)} className="px-2 py-1"><Plus size={14} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-6 bg-white space-y-4">
            <h4 className="font-black text-gray-900">결제 정보</h4>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">상품금액</span>
                    <span className="font-bold">12,900원</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">배송비</span>
                    <span className="font-bold">0원</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">할인금액</span>
                    <span className="font-bold text-orange-500">-0원</span>
                </div>
                <div className="pt-2 border-t border-gray-100 flex justify-between">
                    <span className="font-black text-gray-900">최종 결제금액</span>
                    <span className="text-xl font-black text-orange-600">12,900원</span>
                </div>
            </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-white border-t border-gray-100">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-orange-100">
                12,900원 결제하기
            </button>
        </div>
    </div>
  );
};

export default CartView;
