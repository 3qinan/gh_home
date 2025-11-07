// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { ArrowRight, Play, CheckCircle, BarChart3, Zap, Shield, Users, Award, TrendingUp } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
export default function Home(props) {
  const {
    $w
  } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    title: '氮化镓(GaN)功率器件',
    subtitle: '高效、低损耗、高可靠性',
    description: '江苏镓宏半导体专注于第三代半导体材料研发，提供国际领先的GaN和SiC功率器件解决方案',
    image: 'https://picsum.photos/seed/gan-power-device/1200/600.jpg',
    cta: '了解产品'
  }, {
    title: '碳化硅(SiC)功率器件',
    subtitle: '高温、高压、高功率',
    description: '采用先进SiC工艺技术，为新能源汽车、工业电源等领域提供高性能功率器件',
    image: 'https://picsum.photos/seed/sic-power-device/1200/600.jpg',
    cta: '查看详情'
  }, {
    title: '功率模块解决方案',
    subtitle: '集成化、模块化、智能化',
    description: '提供完整的功率模块设计和制造服务，满足不同应用场景的定制化需求',
    image: 'https://picsum.photos/seed/power-module/1200/600.jpg',
    cta: '解决方案'
  }];
  const products = [{
    name: 'GHN1000 GaN HEMT',
    category: '氮化镓器件',
    description: '1000V氮化镓功率器件，适用于高效电源转换',
    image: 'https://picsum.photos/seed/gan-hemt-product/300/200.jpg',
    features: ['高效率', '低损耗', '高频工作']
  }, {
    name: 'SIC1200 SiC MOSFET',
    category: '碳化硅器件',
    description: '1200V碳化硅MOSFET，专为高功率应用设计',
    image: 'https://picsum.photos/seed/sic-mosfet-product/300/200.jpg',
    features: ['高电压', '低导通电阻', '高温工作']
  }, {
    name: 'GPM500 功率模块',
    category: '功率模块',
    description: '集成化功率模块，简化系统设计',
    image: 'https://picsum.photos/seed/power-module-product/300/200.jpg',
    features: ['高集成度', '优异散热', '可靠性强']
  }];
  const applications = [{
    name: '新能源汽车',
    description: '车载充电器、DC-DC转换器、电机驱动',
    icon: <Zap className="h-8 w-8" />,
    image: 'https://picsum.photos/seed/electric-vehicle/400/300.jpg'
  }, {
    name: '5G通信',
    description: '基站电源、射频前端、数据中心',
    icon: <BarChart3 className="h-8 w-8" />,
    image: 'https://picsum.photos/seed/5g-communication/400/300.jpg'
  }, {
    name: '工业电源',
    description: '变频器、UPS、伺服驱动、光伏逆变器',
    icon: <Shield className="h-8 w-8" />,
    image: 'https://picsum.photos/seed/industrial-power/400/300.jpg'
  }, {
    name: '消费电子',
    description: '快充电源、适配器、LED驱动',
    icon: <Users className="h-8 w-8" />,
    image: 'https://picsum.photos/seed/consumer-electronics/400/300.jpg'
  }];
  const advantages = [{
    title: '技术领先',
    description: '拥有多项核心专利技术，在GaN和SiC材料应用方面处于行业领先地位',
    icon: <Award className="h-8 w-8 text-blue-600" />
  }, {
    title: '质量可靠',
    description: '严格的质量控制体系，产品通过多项国际认证，确保高可靠性',
    icon: <Shield className="h-8 w-8 text-blue-600" />
  }, {
    title: '服务专业',
    description: '专业的技术支持团队，为客户提供全方位的技术服务和解决方案',
    icon: <Users className="h-8 w-8 text-blue-600" />
  }, {
    title: '持续创新',
    description: '持续投入研发，不断推出新产品，满足市场不断变化的需求',
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />
  }];
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  // 结构化数据
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "江苏镓宏半导体有限公司",
    "url": "https://www.ganhonor.com",
    "logo": "https://picsum.photos/seed/company-logo/200/200.jpg",
    "description": "国际领先的氮化镓(GaN)和碳化硅(SiC)功率器件IDM企业，专注于第三代半导体材料研发和制造",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "徐州市",
      "addressRegion": "江苏省",
      "streetAddress": "徐州经济技术开发区徐海路99号",
      "postalCode": "221000"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "0516-83997988",
      "contactType": "customer service",
      "email": "sales@ganhonor.com"
    },
    "sameAs": ["https://www.linkedin.com/company/ganhonor-semiconductor"]
  };
  return <div className="min-h-screen bg-gray-50">
          {/* 结构化数据 */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(structuredData)
    }} />
          
          <Navigation currentPage="home" onNavigate={handleNavigate} />
          
          {/* Hero Section */}
          <header className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                  <img src={slide.image} alt={`${slide.title} - ${slide.subtitle}`} className="w-full h-full object-cover" loading={index === 0 ? "eager" : "lazy"} width="1200" height="600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
                </div>)}
            </div>
            
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-50">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4" onClick={() => handleNavigate('products')}>
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4" onClick={() => handleNavigate('contact')}>
                  联系我们
                </Button>
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`} aria-label={`Go to slide ${index + 1}`}></button>)}
            </div>
          </header>

          {/* Products Section */}
          <section className="py-20 bg-white" aria-labelledby="products-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="products-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  核心产品
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  专注于氮化镓(GaN)和碳化硅(SiC)功率器件的研发与制造，为全球客户提供高性能、高可靠性的功率半导体解决方案
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => <article key={index} className="group">
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="relative mb-4 overflow-hidden rounded-lg">
                          <img src={product.image} alt={`${product.name} - ${product.description}`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width="300" height="200" />
                          <div className="absolute top-4 left-4">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {product.category}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {product.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          {product.features.map((feature, idx) => <div key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>)}
                        </div>
                        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" onClick={() => handleNavigate('productDetail', {
                  productId: (index + 1).toString()
                })}>
                          了解详情
                        </Button>
                      </CardContent>
                    </Card>
                  </article>)}
              </div>
              
              <div className="text-center mt-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3" onClick={() => handleNavigate('products')}>
                  查看全部产品
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>

          {/* Applications Section */}
          <section className="py-20 bg-gray-50" aria-labelledby="applications-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="applications-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  应用领域
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  我们的功率半导体产品广泛应用于新能源汽车、5G通信、工业电源等关键领域，助力产业升级和技术创新
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {applications.map((app, index) => <article key={index} className="group">
                    <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => handleNavigate('solutions')}>
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          {app.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {app.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {app.description}
                        </p>
                      </CardContent>
                    </Card>
                  </article>)}
              </div>
            </div>
          </section>

          {/* Advantages Section */}
          <section className="py-20 bg-white" aria-labelledby="advantages-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="advantages-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  为什么选择镓宏半导体
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  作为国内领先的第三代半导体企业，我们致力于为客户提供最优质的产品和服务
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {advantages.map((advantage, index) => <article key={index} className="text-center">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </article>)}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
                准备好开始合作了吗？
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                联系我们的技术团队，获取专业的功率半导体解决方案
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4" onClick={() => handleNavigate('contact')}>
                  联系我们
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4" onClick={() => handleNavigate('products')}>
                  查看产品
                </Button>
              </div>
            </div>
          </section>

          <Footer />
        </div>;
}