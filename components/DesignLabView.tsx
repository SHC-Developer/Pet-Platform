
import React, { useState } from 'react';
import { generatePetConceptImage } from '../services/gemini';
import { Sparkles, Image as ImageIcon, Loader2, Wand2 } from 'lucide-react';

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
    <div className="p-6 animate-fadeIn pb-24">
      <div className="mb-8">
        <h2 className="text-2xl font-black flex items-center gap-2 text-gray-900">
            AI Design Lab <Sparkles className="text-yellow-500" />
        </h2>
        <p className="text-gray-400 text-sm mt-1 font-medium italic">당신의 상상이 현실이 되는 공간</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-3xl border-2 border-yellow-200 p-5 shadow-xl shadow-yellow-50">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">💡</div>
                <span className="text-xs font-black text-gray-700">무엇을 그려볼까요?</span>
            </div>
            <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="예: 해바라기 모양의 노란색 푹신한 강아지 침대"
                className="w-full h-32 resize-none text-sm focus:outline-none placeholder:text-gray-300 font-medium"
            />
            <div className="flex flex-wrap gap-2 mt-4">
                {suggestions.map(s => (
                    <button 
                        key={s} 
                        onClick={() => setPrompt(s)}
                        className="text-[10px] bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-full hover:bg-yellow-400 hover:text-white transition-all font-bold"
                    >
                        #{s}
                    </button>
                ))}
            </div>
            <button 
                onClick={handleGenerate}
                disabled={isLoading || !prompt.trim()}
                className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-orange-100"
            >
                {isLoading ? <Loader2 className="animate-spin" /> : <Wand2 size={20} />}
                {isLoading ? '캔버스 준비 중...' : '디자인 생성하기'}
            </button>
        </div>

        {generatedImage ? (
            <div className="space-y-4 pt-4">
                <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-square flex items-center justify-center relative">
                    <img src={generatedImage} alt="Generated Design" className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[10px] font-bold">Petmoa AI</div>
                </div>
                <div className="flex gap-3">
                    <button className="flex-1 bg-gray-900 text-white py-3 rounded-2xl text-xs font-black shadow-lg">저장하기</button>
                    <button className="flex-1 border border-gray-200 py-3 rounded-2xl text-xs font-black">새로 만들기</button>
                </div>
            </div>
        ) : (
            <div className="aspect-square bg-yellow-50/50 rounded-3xl border-4 border-dashed border-yellow-100 flex flex-col items-center justify-center text-yellow-300 p-8 text-center transition-all">
                <ImageIcon size={64} strokeWidth={1} className="mb-4 opacity-50" />
                <p className="text-sm font-black text-yellow-600/40">생성된 이미지가 이곳에 나타납니다.</p>
            </div>
        )}
      </div>

      <div className="mt-12 bg-gray-50 rounded-3xl p-6 border border-gray-100">
          <h4 className="text-gray-900 font-black text-sm mb-3">Today's Pick 🏆</h4>
          <div className="flex gap-3 items-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm overflow-hidden flex-shrink-0">
                  <img src="https://picsum.photos/seed/pick/200/200" className="w-full h-full object-cover" />
              </div>
              <div>
                  <p className="text-xs font-black text-gray-800">"우주 테마의 캣타워"</p>
                  <p className="text-[10px] text-gray-400 mt-1">@집사_초코 님이 생성함</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default DesignLabView;
