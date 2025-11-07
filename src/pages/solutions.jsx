// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { ArrowRight, Zap, Globe, Shield, Cpu, Car, Wifi, Factory, Server } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageContext';
export default function Solutions(props) {
  const {
    $w
  } = props;
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const industries = [{
    id: 'automotive',
    name: '新能源汽车',
    icon: <Car className="h-8 w-8" />,
    description: '车载充电器、DC-DC转换器、电机驱动等应用',
    color: 'bg-blue-100 text-blue-600',
    image: 'https://picsum.photos/seed/automotive-solution/600/400.jpg',
    solutions: [{
      title: '车载充电器(OBC)',
      description: '高效率GaN器件实现更快的充电速度和更小的体积',
      benefits: ['效率提升至95%+', '体积减小40%', '重量减轻30%']
    }, {
      title: 'DC-DC转换器',
      description: 'SiC器件提供高电压转换和优异的温度性能',
      benefits: ['工作温度-40°C~150°C', '功率密度提升50%', '可靠性显著提高']
    }, {
      title: '电机驱动器',
      description: '高性能功率器件提升电机效率和响应速度',
      benefits: ['开关频率提升2倍', '效率提升3-5%', 'EMI性能改善']
    }]
  }, {
    id: 'telecom',
    name: '5G通信',
    icon: <Wifi className="h-8 w-8" />,
    description: '基站电源、射频前端、数据中心供电系统',
    color: 'bg-green-100 text-green-600',
    image: 'https://picsum.photos/seed/telecom-solution/600/400.jpg',
    solutions: [{
      title: '基站电源',
      description: '高效率GaN器件降低基站能耗，提升整体效率',
      benefits: ['效率提升至96%+', '功耗降低15%', '散热需求减少']
    }, {
      title: '射频前端',
      description: 'GaN RF器件提供高功率和高频率性能',
      benefits: ['输出功率提升20%', '频率覆盖更广', '线性度优异']
    }, {
      title: '数据中心电源',
      description: '高密度电源解决方案，提升数据中心能效',
      benefits: ['功率密度提升60%', 'PUE降低0.1', 'TCO降低20%']
    }]
  }, {
    id: 'industrial',
    name: '工业电源',
    icon: <Factory className="h-8 w-8" />,
    description: '变频器、UPS、伺服驱动、光伏逆变器等',
    color: 'bg-purple-100 text-purple-600',
    image: 'https://picsum.photos/seed/industrial-solution/600/400.jpg',
    solutions: [{
      title: '工业变频器',
      description: 'SiC器件实现高效率和高可靠性电机控制',
      benefits: ['效率提升至98%+', '开关频率提升3倍', '体积减小50%']
    }, {
      title: 'UPS系统',
      description: '高可靠性功率器件确保不间断电源供应',
      benefits: ['转换效率提升2%', '体积减小30%', 'MTBF提升50%']
    }, {
      title: '光伏逆变器',
      description: '高效率器件提升太阳能转换效率',
      benefits: ['系统效率提升1.5%', '功率密度提升40%', '成本降低15%']
    }]
  }, {
    id: 'datacenter',
    name: '数据中心',
    icon: <Server className="h-8 w-8" />,
    description: '服务器电源、GPU供电、存储系统等',
    color: 'bg-orange-100 text-orange-600',
    image: 'https://picsum.photos/seed/datacenter-solution/600/400.jpg',
    solutions: [{
      title: '服务器电源',
      description: '高效率GaN器件满足80 PLUS钛金认证要求',
      benefits: ['效率达96%+', '功率密度翻倍', '散热成本降低']
    }, {
      title: 'GPU供电',
      description: '高电流密度器件支持AI计算需求',
      benefits: ['电流密度提升50%', '响应速度提升2倍', '纹波降低30%']
    }, {
      title: '存储系统',
      description: '高可靠性器件确保数据安全存储',
      benefits: ['MTBF提升100%', '功耗降低20%', '体积减小25%']
    }]
  }];
  const benefits = [{
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    title: '高效率',
    description: '功率器件效率提升30%以上，显著降低系统能耗'
  }, {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: '高可靠性',
    description: '严格的质量控制，产品MTBF超过100万小时'
  }, {
    icon: <Cpu className="h-6 w-6 text-blue-600" />,
    title: '高功率密度',
    description: '先进封装技术，功率密度提升50%以上'
  }, {
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    title: '全球服务',
    description: '24小时技术支持，全球供应链保障'
  }];
  const selectedIndustryData = industries.find(ind => ind.id === selectedIndustry) || industries[0];
  return <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation currentPage="solutions" onNavigate={handleNavigate} />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">解决方案</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                为不同行业提供专业的功率器件解决方案，助力客户产品升级
              </p>
            </div>
          </div>
        </div>

        {/* Industry Selection */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">选择行业</h2>
              <p className="text-lg text-gray-600">点击下方行业图标，查看对应的解决方案</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map(industry => <button key={industry.id} onClick={() => setSelectedIndustry(industry.id)} className={`p-6 rounded-lg border-2 transition-all ${selectedIndustry === industry.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                  <div className={`${industry.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </button>)}
            </div>
          </div>
        </div>

        {/* Selected Industry Solutions */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`${selectedIndustryData.color} w-20 h-20 rounded-full flex items-center justify-center mb-6`}>
                  {selectedIndustryData.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedIndustryData.name}解决方案</h2>
                <p className="text-lg text-gray-600 mb-8">{selectedIndustryData.description}</p>
                
                <div className="space-y-6">
                  {selectedIndustryData.solutions.map((solution, index) => <div key={index} className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-gray-600 mb-3">{solution.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {solution.benefits.map((benefit, benefitIndex) => <span key={benefitIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {benefit}
                          </span>)}
                      </div>
                    </div>)}
                </div>
              </div>
              
              <div>
                <img src={selectedIndustryData.image} alt={selectedIndustryData.name} className="w-full h-96 object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">核心优势</h2>
              <p className="text-lg text-gray-600">我们的解决方案为客户带来的价值</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>)}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">需要定制化解决方案？</h2>
            <p className="text-xl text-blue-100 mb-8">
              我们的专业团队可以根据您的具体需求，提供定制化的功率器件解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4" onClick={() => handleNavigate('contact')}>
                联系我们
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4" onClick={() => handleNavigate('products')}>
                查看产品
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </LanguageProvider>;
}