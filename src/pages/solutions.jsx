// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Download, BookOpen, Lightbulb, Cpu, Zap, Radio } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
export default function Solutions(props) {
  const {
    $w
  } = props;
  const [activeTab, setActiveTab] = useState('solutions');
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const solutions = [{
    id: 1,
    title: '新能源汽车电源解决方案',
    category: '汽车电子',
    description: '为新能源汽车提供高效、可靠的电源管理解决方案，包括车载充电器、DC-DC转换器等',
    image: 'https://picsum.photos/seed/ev-solution/400/250.jpg',
    features: ['高效率', '高可靠性', '小型化', '低成本'],
    products: ['GHN1000 GaN HEMT', 'SIC1200 SiC MOSFET', 'DRV500 驱动芯片']
  }, {
    id: 2,
    title: '5G基站射频解决方案',
    category: '通信设备',
    description: '针对5G通信基站的射频前端解决方案，提供高性能的功率放大器和射频器件',
    image: 'https://picsum.photos/seed/5g-solution/400/250.jpg',
    features: ['高线性度', '高效率', '宽带宽', '热稳定性好'],
    products: ['RFA2000 射频放大器', 'RFA3500 射频模块']
  }, {
    id: 3,
    title: '工业电源解决方案',
    category: '工业应用',
    description: '为工业设备提供稳定可靠的电源解决方案，适用于变频器、UPS等应用',
    image: 'https://picsum.photos/seed/industrial-solution/400/250.jpg',
    features: ['高功率密度', '高可靠性', '长寿命', '易维护'],
    products: ['SIC1200 SiC MOSFET', 'GHN650 GaN器件']
  }, {
    id: 4,
    title: '数据中心电源解决方案',
    category: '数据中心',
    description: '为数据中心服务器提供高效电源解决方案，显著降低能耗和运营成本',
    image: 'https://picsum.photos/seed/datacenter-solution/400/250.jpg',
    features: ['超高效率', '高功率密度', '智能管理', '热优化'],
    products: ['GHN1000 GaN HEMT', 'DRV500 驱动芯片']
  }];
  const whitepapers = [{
    id: 1,
    title: 'GaN技术在新能源汽车中的应用',
    author: '技术团队',
    date: '2024-03-01',
    category: '技术白皮书',
    description: '深入分析氮化镓技术在新能源汽车电源系统中的优势和应用前景',
    downloadUrl: 'gan-ev-whitepaper.pdf'
  }, {
    id: 2,
    title: '5G射频前端技术发展趋势',
    author: '研发中心',
    date: '2024-02-15',
    category: '行业报告',
    description: '探讨5G通信对射频前端技术的要求及未来发展方向',
    downloadUrl: '5g-rf-report.pdf'
  }, {
    id: 3,
    title: '碳化硅器件在工业应用中的优势',
    author: '应用工程部',
    date: '2024-02-01',
    category: '技术白皮书',
    description: '详细分析SiC MOSFET在工业变频器中的应用优势',
    downloadUrl: 'sic-industrial-whitepaper.pdf'
  }];
  const designTools = [{
    id: 1,
    name: 'GaN设计工具包',
    description: '包含GaN器件选型指南、PCB布局建议、热设计工具等',
    icon: <Cpu className="h-8 w-8 text-blue-600" />,
    features: ['器件选型', 'PCB设计', '热仿真', 'EMI分析']
  }, {
    id: 2,
    name: '射频设计套件',
    description: '射频电路设计工具，包括阻抗匹配、功率计算等',
    icon: <Radio className="h-8 w-8 text-blue-600" />,
    features: ['阻抗匹配', '功率计算', '谐波分析', '稳定性分析']
  }, {
    id: 3,
    name: '电源仿真工具',
    description: '电源电路仿真软件，支持多种拓扑结构分析',
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    features: ['电路仿真', '效率分析', '热分析', 'EMC分析']
  }];
  return <div className="min-h-screen bg-gray-50">
          <Navigation currentPage="solutions" onNavigate={handleNavigate} />
          
          <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-900 mb-4">技术方案</h1>
                <p className="text-lg text-gray-600">专业的技术解决方案和设计工具，助力您的产品开发</p>
              </div>

              {/* Tabs */}
              <div className="flex justify-center mb-8">
                <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
                  <button onClick={() => setActiveTab('solutions')} className={`px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'solutions' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    <Lightbulb className="inline h-4 w-4 mr-2" />
                    应用解决方案
                  </button>
                  <button onClick={() => setActiveTab('whitepapers')} className={`px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'whitepapers' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    <BookOpen className="inline h-4 w-4 mr-2" />
                    技术白皮书
                  </button>
                  <button onClick={() => setActiveTab('tools')} className={`px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'tools' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    <Cpu className="inline h-4 w-4 mr-2" />
                    设计工具
                  </button>
                </div>
              </div>

              {/* Solutions Tab */}
              {activeTab === 'solutions' && <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {solutions.map(solution => <Card key={solution.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <img src={solution.image} alt={solution.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              {solution.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                          <p className="text-gray-600 mb-4">{solution.description}</p>
                          
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">核心优势：</h4>
                            <div className="flex flex-wrap gap-2">
                              {solution.features.map((feature, index) => <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                  {feature}
                                </span>)}
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">相关产品：</h4>
                            <div className="flex flex-wrap gap-2">
                              {solution.products.map((product, index) => <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                                  {product}
                                </span>)}
                            </div>
                          </div>

                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            了解详情
                          </Button>
                        </div>
                      </CardContent>
                    </Card>)}
                </div>}

              {/* Whitepapers Tab */}
              {activeTab === 'whitepapers' && <div className="space-y-6">
                  {whitepapers.map(paper => <Card key={paper.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                {paper.category}
                              </span>
                              <span className="text-gray-500 text-sm">{paper.date}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{paper.title}</h3>
                            <p className="text-gray-600 mb-3">{paper.description}</p>
                            <p className="text-sm text-gray-500 mb-4">作者: {paper.author}</p>
                            <Button variant="outline" className="text-blue-600 border-blue-600">
                              <Download className="h-4 w-4 mr-2" />
                              下载PDF
                            </Button>
                          </div>
                          <div className="ml-6">
                            <BookOpen className="h-12 w-12 text-gray-400" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>)}
                </div>}

              {/* Design Tools Tab */}
              {activeTab === 'tools' && <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {designTools.map(tool => <Card key={tool.id} className="hover:shadow-lg transition-shadow text-center">
                      <CardContent className="p-6">
                        <div className="flex justify-center mb-4">
                          {tool.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.name}</h3>
                        <p className="text-gray-600 mb-6">{tool.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-700 mb-3">功能特性：</h4>
                          <div className="space-y-2">
                            {tool.features.map((feature, index) => <div key={index} className="flex items-center justify-center">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>)}
                          </div>
                        </div>

                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          立即使用
                        </Button>
                      </CardContent>
                    </Card>)}
                </div>}
            </div>
          </div>

          <Footer />
        </div>;
}