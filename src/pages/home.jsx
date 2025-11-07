// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { ArrowRight, Play, CheckCircle, Users, Award, TrendingUp, Globe, Zap, Shield } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageContext';
export default function Home(props) {
  const {
    $w
  } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    t
  } = useLanguage();
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const slides = [{
    title: '引领第三代半导体技术革新',
    subtitle: '专注GaN和SiC功率器件研发与制造',
    image: 'https://picsum.photos/seed/semiconductor-hero/1920/600.jpg',
    cta: '了解产品'
  }, {
    title: '高效节能解决方案',
    subtitle: '为新能源汽车、5G通信、工业电源提供核心器件',
    image: 'https://picsum.photos/seed/energy-solution/1920/600.jpg',
    cta: '查看方案'
  }, {
    title: '技术创新驱动发展',
    subtitle: '持续投入研发，推动功率半导体技术进步',
    image: 'https://picsum.photos/seed/tech-innovation/1920/600.jpg',
    cta: '了解更多'
  }];
  const products = [{
    name: 'GHN1000 GaN HEMT',
    category: '氮化镓器件',
    description: '1000V氮化镓功率器件，高效低损耗',
    image: 'https://picsum.photos/seed/gan-device/300/200.jpg',
    id: '1'
  }, {
    name: 'SIC1200 SiC MOSFET',
    category: '碳化硅器件',
    description: '1200V碳化硅MOSFET，高功率应用',
    image: 'https://picsum.photos/seed/sic-device/300/200.jpg',
    id: '2'
  }, {
    name: 'GHN650 GaN FET',
    category: '氮化镓器件',
    description: '650V氮化镓场效应管，高频应用',
    image: 'https://picsum.photos/seed/gan-fet/300/200.jpg',
    id: '3'
  }, {
    name: 'SIC1700 SiC IGBT',
    category: '碳化硅器件',
    description: '1700V碳化硅IGBT，工业级应用',
    image: 'https://picsum.photos/seed/sic-igbt/300/200.jpg',
    id: '4'
  }];
  const applications = [{
    icon: <Zap className="h-8 w-8" />,
    title: '新能源汽车',
    description: '车载充电器、DC-DC转换器、电机驱动',
    color: 'bg-blue-100 text-blue-600'
  }, {
    icon: <Globe className="h-8 w-8" />,
    title: '5G通信',
    description: '基站电源、射频前端、数据中心',
    color: 'bg-green-100 text-green-600'
  }, {
    icon: <Shield className="h-8 w-8" />,
    title: '工业电源',
    description: '变频器、UPS、伺服驱动、光伏逆变器',
    color: 'bg-purple-100 text-purple-600'
  }, {
    icon: <TrendingUp className="h-8 w-8" />,
    title: '消费电子',
    description: '快充电源、适配器、LED驱动',
    color: 'bg-orange-100 text-orange-600'
  }];
  const advantages = [{
    icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
    title: '技术领先',
    description: '拥有多项核心专利技术，产品性能达到国际先进水平'
  }, {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: '专业团队',
    description: '由海内外知名专家组成的核心研发团队'
  }, {
    icon: <Award className="h-6 w-6 text-blue-600" />,
    title: '品质保证',
    description: '通过ISO9001质量体系认证，产品可靠性高'
  }, {
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    title: '全球服务',
    description: '产品远销全球多个国家和地区，客户满意度高'
  }];
  const news = [{
    title: '江苏镓宏半导体荣获2024年度创新企业奖',
    date: '2024-03-15',
    summary: '在2024年中国半导体创新大会上，江苏镓宏半导体凭借在GaN和SiC功率器件领域的创新突破，荣获年度创新企业奖。',
    image: 'https://picsum.photos/seed/news-award/400/250.jpg',
    id: '1'
  }, {
    title: '新一代GaN功率器件正式发布',
    date: '2024-03-10',
    summary: '镓宏半导体发布新一代GHN1000系列氮化镓功率器件，效率提升30%，体积减小50%，引领行业技术革新。',
    image: 'https://picsum.photos/seed/news-product/400/250.jpg',
    id: '2'
  }, {
    title: '与知名汽车厂商达成战略合作',
    date: '2024-03-05',
    summary: '镓宏半导体与国内知名新能源汽车厂商签署战略合作协议，共同开发下一代车载功率器件解决方案。',
    image: 'https://picsum.photos/seed/news-cooperation/400/250.jpg',
    id: '3'
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  const goToSlide = index => {
    setCurrentSlide(index);
  };
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };
  return <div className="min-h-screen bg-white">
      <Navigation currentPage="home" onNavigate={handleNavigate} />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            </div>)}
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {slides.map((slide, index) => <div key={index} className={`transition-all duration-1000 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  {index === currentSlide && <>
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl text-gray-200 mb-8">
                        {slide.subtitle}
                      </p>
                      <div className="flex gap-4">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4" onClick={() => handleNavigate('products')}>
                          {slide.cta}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4">
                          <Play className="mr-2 h-5 w-5" />
                          观看视频
                        </Button>
                      </div>
                    </>}
                </div>)}
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}></button>)}
        </div>
        
        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">核心产品</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              专注于氮化镓和碳化硅功率器件的研发与制造，为全球客户提供高性能、高可靠性的产品解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleNavigate('productDetail', {
            productId: product.id
          })}>
                <CardContent className="p-6">
                  <div className="aspect-w-16 aspect-h-12 mb-4">
                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
                  </div>
                  <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8" onClick={() => handleNavigate('products')}>
              查看全部产品
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">应用领域</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们的产品广泛应用于新能源汽车、5G通信、工业电源等关键领域，助力产业升级
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => <div key={index} className="text-center">
                <div className={`w-20 h-20 ${app.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">核心优势</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              凭借技术实力、专业团队和优质服务，成为客户信赖的合作伙伴
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{advantage.title}</h3>
                <p className="text-blue-100">{advantage.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">新闻资讯</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              了解最新的公司动态、行业资讯和技术发展
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleNavigate('newsDetail', {
            newsId: item.id
          })}>
                <CardContent className="p-0">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{item.summary}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8" onClick={() => handleNavigate('news')}>
              查看更多新闻
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好开始合作了吗？
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            联系我们的专业团队，获取定制化的解决方案和技术支持
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4" onClick={() => handleNavigate('contact')}>
              联系我们
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4" onClick={() => handleNavigate('solutions')}>
              查看解决方案
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}