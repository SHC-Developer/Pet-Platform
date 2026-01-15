
import React, { useState, useEffect } from 'react';
import { AppView, Product } from './types';
import HomeView from './components/HomeView';
import CategoryView from './components/CategoryView';
import CommunityView from './components/CommunityView';
import DesignLabView from './components/DesignLabView';
import MyView from './components/MyView';
import ProductDetailView from './components/ProductDetailView';
import CartView from './components/CartView';
import SearchView from './components/SearchView';
import BottomNav from './components/BottomNav';
import SplashScreen from './components/SplashScreen';
import { Search, ShoppingBag, ChevronDown, ChevronLeft } from 'lucide-react';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [history, setHistory] = useState<AppView[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Check if viewing on a mobile device to adjust layout behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  const navigateTo = (view: AppView, product?: Product) => {
    setHistory([...history, activeView]);
    setActiveView(view);
    if (product) setSelectedProduct(product);
  };

  const goBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setActiveView(prev);
    } else {
      setActiveView(AppView.HOME);
    }
  };

  const renderView = () => {
    switch (activeView) {
      case AppView.HOME:
        return <HomeView onProductClick={(p) => navigateTo(AppView.PRODUCT_DETAIL, p)} />;
      case AppView.CATEGORY:
        return <CategoryView onProductClick={(p) => navigateTo(AppView.PRODUCT_DETAIL, p)} />;
      case AppView.COMMUNITY:
        return <CommunityView />;
      case AppView.DESIGN_LAB:
        return <DesignLabView />;
      case AppView.MY:
        return <MyView />;
      case AppView.PRODUCT_DETAIL:
        return selectedProduct ? <ProductDetailView product={selectedProduct} onAddToCart={() => navigateTo(AppView.CART)} /> : <HomeView />;
      case AppView.CART:
        return <CartView onBack={goBack} />;
      case AppView.SEARCH:
        return <SearchView onBack={goBack} />;
      default:
        return <HomeView />;
    }
  };

  // Hide header and nav for some views if necessary
  const isPlainView = [AppView.PRODUCT_DETAIL, AppView.CART, AppView.SEARCH].includes(activeView);

  // Layout Wrapper:
  // If desktop (Vercel deployment view), show centered mobile frame.
  // If mobile, show full screen.
  // 스플래시 화면이 표시 중이면 스플래시만 렌더링
  if (showSplash) {
    return (
      <div className="flex justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-[430px] h-[100dvh] bg-white shadow-2xl relative overflow-hidden flex flex-col">
          <SplashScreen onFinish={handleSplashFinish} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[430px] h-[100dvh] bg-white shadow-2xl relative overflow-hidden flex flex-col">
        
        {/* Dynamic Header */}
        {!isPlainView ? (
          <header className="sticky top-0 z-50 bg-white border-b border-gray-100 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="flex items-center text-lg font-bold text-gray-800">
                강아지 <ChevronDown size={18} className="ml-1 text-orange-500" />
              </button>
              <button className="flex items-center text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                반포동 123-45 <ChevronDown size={12} className="ml-1 text-orange-400" />
              </button>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <button onClick={() => navigateTo(AppView.SEARCH)}><Search size={22} /></button>
              <button onClick={() => navigateTo(AppView.CART)}><ShoppingBag size={22} /></button>
            </div>
          </header>
        ) : (
           activeView !== AppView.SEARCH && (
             <header className="sticky top-0 z-50 bg-white border-b border-gray-100 p-4 flex items-center justify-between">
              <button onClick={goBack}><ChevronLeft size={24} /></button>
              <h1 className="text-sm font-bold">
                {activeView === AppView.PRODUCT_DETAIL ? '상품 상세' : '장바구니'}
              </h1>
              <div className="w-6" />
            </header>
           )
        )}
  
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto pb-20 scroll-smooth">
          {renderView()}
        </main>
  
        {/* Bottom Navigation */}
        {!isPlainView && <BottomNav activeView={activeView} onViewChange={setActiveView} />}
      </div>
    </div>
  );
};

export default App;
