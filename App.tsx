
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Platform } from 'react-native';
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
import { Search, ShoppingBag, ChevronDown, ChevronLeft } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.HOME);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [history, setHistory] = useState<AppView[]>([]);

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

  const isPlainView = [AppView.PRODUCT_DETAIL, AppView.CART, AppView.SEARCH].includes(activeView);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />
      <View className="flex-1 max-w-md mx-auto w-full bg-white relative overflow-hidden">
        {/* Dynamic Header */}
        {!isPlainView ? (
          <View className="bg-white border-b border-gray-100 p-4 flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <TouchableOpacity className="flex-row items-center">
                <Text className="text-lg font-bold text-gray-800">강아지</Text>
                <ChevronDown size={18} color="#f97316" style={{ marginLeft: 4 }} />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                <Text className="text-xs text-gray-400">반포동 123-45</Text>
                <ChevronDown size={12} color="#fb923c" style={{ marginLeft: 4 }} />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center gap-4">
              <TouchableOpacity onPress={() => navigateTo(AppView.SEARCH)}>
                <Search size={22} color="#374151" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateTo(AppView.CART)}>
                <ShoppingBag size={22} color="#374151" />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
           activeView !== AppView.SEARCH && (
             <View className="bg-white border-b border-gray-100 p-4 flex-row items-center justify-between">
              <TouchableOpacity onPress={goBack}>
                <ChevronLeft size={24} color="#000" />
              </TouchableOpacity>
              <Text className="text-sm font-bold text-gray-800">
                {activeView === AppView.PRODUCT_DETAIL ? '상품 상세' : '장바구니'}
              </Text>
              <View style={{ width: 24 }} />
            </View>
           )
        )}

        {/* Main Content Area */}
        <View className="flex-1">
          {renderView()}
        </View>

        {/* Bottom Navigation */}
        {!isPlainView && <BottomNav activeView={activeView} onViewChange={setActiveView} />}
      </View>
    </SafeAreaView>
  );
};

export default App;

export default App;
