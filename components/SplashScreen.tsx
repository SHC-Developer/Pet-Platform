import React, { useEffect } from 'react';
const logo = new URL('../assets/logo.png', import.meta.url).href;
const hero = new URL('../assets/dog and cat.png', import.meta.url).href;

type SplashScreenProps = {
  onFinish: () => void;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = window.setTimeout(onFinish, 5000);
    return () => window.clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col items-center justify-between bg-gradient-to-b from-[#F26B1D] via-[#FF8C00] to-[#FFA042] px-6 pb-8 pt-10 text-[#2a1400]"
      onClick={onFinish}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          onFinish();
        }
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <img
          src={logo}
          alt="애들이랑 로고"
          className="h-auto w-64 drop-shadow-[0_6px_16px_rgba(0,0,0,0.25)]"
        />
        <p className="text-center text-base text-[#2a1400]/80 font-medium">
          반려동물과 보호자를 위한 올인원 플랫폼
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-white/15 blur-3xl" />
          <img
            src={hero}
            alt="강아지와 고양이 일러스트"
            className="relative w-80 max-w-[85vw] drop-shadow-[0_12px_28px_rgba(0,0,0,0.3)]"
          />
        </div>
        <div className="mt-6 text-center">
          <h1 className="text-2xl font-semibold">애들이랑</h1>
          <p className="mt-2 text-sm text-[#2a1400]/70">
            쇼핑, 커뮤니티, 맞춤 디자인까지 한 번에
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-[#2a1400]/80">
            <span className="rounded-full bg-white/50 px-3 py-1">맞춤 상품 추천</span>
            <span className="rounded-full bg-white/50 px-3 py-1">반려인 소통</span>
            <span className="rounded-full bg-white/50 px-3 py-1">디자인랩</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onFinish();
        }}
        className="w-full rounded-2xl bg-[#2a1400] px-6 py-3 text-base font-semibold text-white shadow-lg"
      >
        시작하기
      </button>
    </div>
  );
};

export default SplashScreen;

