// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { ArrowRight, Users, Award, Target, Globe, CheckCircle } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CompanyOverview } from '@/components/CompanyOverview';
import { CompanyTimeline } from '@/components/CompanyTimeline';
import { ManagementTeam } from '@/components/ManagementTeam';
import { LanguageProvider } from '@/components/LanguageContext';
export default function About(props) {
  const {
    $w
  } = props;
  const [activeTab, setActiveTab] = useState('overview');
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const tabs = [{
    id: 'overview',
    name: '企业概况',
    icon: <Globe className="h-5 w-5" />
  }, {
    id: 'timeline',
    name: '发展历程',
    icon: <Target className="h-5 w-5" />
  }, {
    id: 'team',
    name: '管理团队',
    icon: <Users className="h-5 w-5" />
  }];
  const stats = [{
    number: '50+',
    label: '核心专利',
    description: '功率器件领域核心技术'
  }, {
    number: '1000+',
    label: '客户数量',
    description: '遍布全球多个国家和地区'
  }, {
    number: '99.9%',
    label: '产品可靠性',
    description: '严格的质量控制体系'
  }, {
    number: '24/7',
    label: '技术支持',
    description: '全天候客户服务保障'
  }];
  const values = [{
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: '使命',
    description: '成为全球领先的功率器件供应商，推动绿色能源革命'
  }, {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: '愿景',
    description: '以技术创新驱动发展，为客户创造最大价值'
  }, {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: '价值观',
    description: '诚信、创新、卓越、合作、责任'
  }];
  const partners = [{
    name: '华为技术',
    logo: 'https://picsum.photos/seed/partner-huawei/200/100.jpg',
    description: '战略合作伙伴'
  }, {
    name: '比亚迪',
    logo: 'https://picsum.photos/seed/partner-byd/200/100.jpg',
    description: '汽车领域合作'
  }, {
    name: '中兴通讯',
    logo: 'https://picsum.photos/seed/partner-zte/200/100.jpg',
    description: '通信领域合作'
  }, {
    name: '国家电网',
    logo: 'https://picsum.photos/seed/partner-grid/200/100.jpg',
    description: '能源领域合作'
  }, {
    name: '中科院',
    logo: 'https://picsum.photos/seed/partner-cas/200/100.jpg',
    description: '技术合作'
  }, {
    name: '清华大学',
    logo: 'https://picsum.photos/seed/partner-tsinghua/200/100.jpg',
    description: '产学研合作'
  }];
  return <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation currentPage="about" onNavigate={handleNavigate} />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">关于我们</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                江苏镓宏半导体有限公司 - 国际领先的氮化镓功率器件IDM企业
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center px-1 py-4 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                  {tab.icon}
                  <span className="ml-2">{tab.name}</span>
                </button>)}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'overview' && <CompanyOverview />}
            {activeTab === 'timeline' && <CompanyTimeline />}
            {activeTab === 'team' && <ManagementTeam />}
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">企业实力</h2>
              <p className="text-lg text-gray-600">用数据说话，展现我们的专业实力</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-gray-600">{stat.description}</div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">使命愿景价值观</h2>
              <p className="text-lg text-gray-600">指导我们前进的方向和原则</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">合作伙伴</h2>
              <p className="text-lg text-gray-600">与行业领先企业建立战略合作关系</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <img src={partner.logo} alt={partner.name} className="h-16 mx-auto mb-4 object-contain" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>)}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">加入我们，共创未来</h2>
            <p className="text-xl text-blue-100 mb-8">
              我们正在寻找有激情、有才华的人才，一起推动功率半导体技术的发展
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4" onClick={() => handleNavigate('careers')}>
                查看职位
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4" onClick={() => handleNavigate('contact')}>
                联系我们
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </LanguageProvider>;
}