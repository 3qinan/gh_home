// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { ArrowRight, Play, CheckCircle, Globe, Users, Award, TrendingUp, ArrowUp } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';

// 将 HomeContent 拆分为独立组件，确保在 LanguageProvider 内部
function HomeContent({
  $w
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const {
    t
  } = useLanguage();
  const heroSlides = [{
    title: t('home.hero.title'),
    subtitle: t('home.hero.subtitle'),
    image: 'https://picsum.photos/seed/semiconductor-factory/1920/600.jpg',
    cta: t('home.hero.learnMore')
  }, {
    title: '技术创新引领未来',
    subtitle: '专注GaN和SiC功率器件研发，推动半导体产业升级',
    image: 'https://picsum.photos/seed/technology-innovation/1920/600.jpg',
    cta: '了解技术'
  }, {
    title: '全球合作伙伴',
    subtitle: '与世界领先企业合作，共同推进功率半导体技术发展',
    image: 'https://picsum.photos/seed/global-partnership/1920/600.jpg',
    cta: '合作伙伴'
  }];
  const products = [{
    id: 1,
    name: 'GHN1000 GaN HEMT',
    category: '氮化镓器件',
    description: '1000V氮化镓功率器件，具有极低的导通电阻和开关损耗',
    image: 'https://picsum.photos/seed/gan-hemt/400/300.jpg',
    features: ['高效率', '低损耗', '高频工作']
  }, {
    id: 2,
    name: 'SIC1200 SiC MOSFET',
    category: '碳化硅器件',
    description: '1200V碳化硅MOSFET，适用于高功率应用',
    image: 'https://picsum.photos/seed/sic-mosfet/400/300.jpg',
    features: ['高电压', '低导通电阻', '快速开关']
  }, {
    id: 3,
    name: 'GPM500 功率模块',
    category: '功率模块',
    description: '集成化功率模块，简化系统设计',
    image: 'https://picsum.photos/seed/power-module/400/300.jpg',
    features: ['高集成度', '易设计', '高可靠性']
  }];
  const solutions = [{
    id: 1,
    title: '新能源汽车',
    description: '为电动汽车提供高效功率解决方案',
    icon: '🚗',
    image: 'https://picsum.photos/seed/electric-vehicle/400/250.jpg'
  }, {
    id: 2,
    title: '5G通信',
    description: '支持5G基站和通信设备的高效供电',
    icon: '📡',
    image: 'https://picsum.photos/seed/5g-communication/400/250.jpg'
  }, {
    id: 3,
    title: '工业电源',
    description: '工业级电源系统的核心器件',
    icon: '⚡',
    image: 'https://picsum.photos/seed/industrial-power/400/250.jpg'
  }, {
    id: 4,
    title: '数据中心',
    description: '数据中心高效供电解决方案',
    icon: '🖥️',
    image: 'https://picsum.photos/seed/data-center/400/250.jpg'
  }];
  const news = [{
    id: 1,
    title: '江苏镓宏半导体荣获2024年度创新企业奖',
    summary: '在2024年中国半导体创新大会上，江苏镓宏半导体凭借在GaN和SiC功率器件领域的创新突破，荣获年度创新企业奖。',
    date: '2024-03-15',
    category: '公司动态',
    image: 'https://picsum.photos/seed/news-award/400/250.jpg'
  }, {
    id: 2,
    title: '新一代GaN功率器件正式发布',
    summary: '镓宏半导体发布新一代GHN1000系列氮化镓功率器件，效率提升30%，体积减小50%，引领行业技术革新。',
    date: '2024-03-10',
    category: '产品发布',
    image: 'https://picsum.photos/seed/news-gan/400/250.jpg'
  }, {
    id: 3,
    title: '碳化硅器件在工业应用中的优势',
    summary: '随着工业4.0的推进，碳化硅器件在工业应用中的优势日益凸显，为工业电源系统带来革命性变化。',
    date: '2024-03-05',
    category: '行业资讯',
    image: 'https://picsum.photos/seed/news-sic/400/250.jpg'
  }];
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="home" onNavigate={handleNavigate} />
      
      {/* Hero Section */}
      <div className="relative h-96 md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
            </div>)}
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-delay">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex justify-center gap-4 animate-fade-in-delay-2">
                <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3" onClick={() => handleNavigate('about')}>
                  {t('home.hero.learnMore')}
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3" onClick={() => handleNavigate('contact')}>
                  {t('home.hero.contactUs')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`} />)}
        </div>

        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Products Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('home.products.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('home.products.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map(product => <Card key={product.id} className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleNavigate('productDetail', {
            productId: product.id
          })}>
                <CardContent className="p-6">
                  <div className="aspect-w-16 aspect-h-12 mb-4">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>)}
                  </div>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                    <span className="text-sm font-medium">{t('home.products.viewAll')}</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => handleNavigate('products')}>
              {t('home.products.viewAll')}
            </Button>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('home.solutions.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('home.solutions.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map(solution => <Card key={solution.id} className="group hover:shadow-lg transition-all cursor-pointer" onClick={() => handleNavigate('solutions')}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <img src={solution.image} alt={solution.title} className="w-full h-32 object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                  <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700">
                    <span className="text-sm font-medium">{t('home.solutions.learnMore')}</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('home.news.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('home.news.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map(item => <Card key={item.id} className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleNavigate('newsDetail', {
            newsId: item.id
          })}>
                <CardContent className="p-6">
                  <div className="aspect-w-16 aspect-h-12 mb-4">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                      <span className="text-sm font-medium">{t('home.news.readMore')}</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" onClick={() => handleNavigate('news')}>
              {t('home.news.viewAll')}
            </Button>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.advantages.title')}</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t('home.advantages.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.advantages.items.technology.title')}</h3>
              <p className="text-blue-100">{t('home.advantages.items.technology.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.advantages.items.quality.title')}</h3>
              <p className="text-blue-100">{t('home.advantages.items.quality.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.advantages.items.service.title')}</h3>
              <p className="text-blue-100">{t('home.advantages.items.service.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.advantages.items.capacity.title')}</h3>
              <p className="text-blue-100">{t('home.advantages.items.capacity.description')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            准备好开始合作了吗？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            联系我们的专业团队，获取定制化的功率半导体解决方案
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3" onClick={() => handleNavigate('contact')}>
              {t('home.hero.contactUs')}
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3" onClick={() => handleNavigate('products')}>
              {t('home.products.viewAll')}
            </Button>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50">
          <ArrowUp className="h-6 w-6" />
        </button>}

      <Footer />
    </div>;
}
export default function Home(props) {
  const {
    $w
  } = props;
  return <LanguageProvider>
      <HomeContent $w={$w} />
    </LanguageProvider>;
}