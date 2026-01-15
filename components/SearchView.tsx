
import React from 'react';
import { Search, ChevronLeft, X } from 'lucide-react';

const SearchView: React.FC<{onBack: () => void}> = ({onBack}) => {
  return (
    <div className="animate-fadeIn h-full bg-white flex flex-col">
        <header className="p-4 flex items-center gap-3 border-b border-gray-50">
            <button onClick={onBack}><ChevronLeft size={24}/></button>
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
                <Search size={18} className="text-gray-400" />
                <input 
                    autoFocus 
                    placeholder="우리아이 맞춤 사료 찾기" 
                    className="bg-transparent border-none outline-none text-sm w-full" 
                />
                <button className="text-gray-300"><X size={16} /></button>
            </div>
        </header>

        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-black text-sm text-gray-900">최근 검색어</h4>
                <button className="text-xs text-gray-400">전체 삭제</button>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
                {['연어 사료', '슬리커', '개껌', '산책 가슴줄'].map(word => (
                    <div key={word} className="flex items-center gap-1 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full text-xs text-gray-600">
                        {word} <X size={12} className="opacity-40" />
                    </div>
                ))}
            </div>

            <h4 className="font-black text-sm text-gray-900 mb-4">인기 급상승 키워드 📈</h4>
            <div className="grid grid-cols-2 gap-y-4">
                {[
                    { rank: 1, text: '동결건조 간식', up: true },
                    { rank: 2, text: '노견 사료 추천', up: true },
                    { rank: 3, text: '강아지 매트', up: false },
                    { rank: 4, text: '배변 패드', up: true },
                    { rank: 5, text: '치석 제거 껌', up: true },
                    { rank: 6, text: '자동 급식기', up: false },
                ].map((item) => (
                    <div key={item.rank} className="flex items-center gap-3">
                        <span className={`font-black italic text-lg ${item.rank <= 3 ? 'text-orange-500' : 'text-gray-300'}`}>{item.rank}</span>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                        {item.up && <span className="text-[10px] text-red-500 font-bold">↑</span>}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default SearchView;
