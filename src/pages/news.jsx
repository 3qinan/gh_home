// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Calendar, User, Search, Filter, ChevronDown, ArrowRight } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageContext';
export default function News(props) {
  const {
    $w
  } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const newsData = [{
    id: '1',
    title: '江苏镓宏半导体荣获2024年度创新企业奖',
    summary: '在2024年中国半导体创新大会上，江苏镓宏半导体凭借在GaN和SiC功率器件领域的创新突破，荣获年度创新企业奖。',
    content: '江苏镓宏半导体有限公司在2024年中国半导体创新大会上荣获年度创新企业奖。公司凭借在氮化镓(GaN)和碳化硅(SiC)功率器件领域的创新突破，得到了业界专家和客户的高度认可。',
    date: '2024-03-15',
    category: 'company',
    author: '市场部',
    image: 'https://picsum.photos/seed/news-award/800/400.jpg',
    tags: ['获奖', '创新', 'GaN', 'SiC']
  }, {
    id: '2',
    title: '新一代GaN功率器件正式发布',
    summary: '镓宏半导体发布新一代GHN1000系列氮化镓功率器件，效率提升30%，体积减小50%，引领行业技术革新。',
    content: '镓宏半导体今日正式发布新一代GHN1000系列氮化镓功率器件。该系列产品采用先进的GaN-on-SiC工艺，在效率、功率密度和可靠性方面都有显著提升。',
    date: '2024-03-10',
    category: 'product',
    author: '产品部',
    image: 'https://picsum.photos/seed/news-gan/800/400.jpg',
    tags: ['GaN', '新产品', '功率器件']
  }, {
    id: '3',
    title: '与知名汽车厂商达成战略合作',
    summary: '镓宏半导体与国内知名新能源汽车厂商签署战略合作协议，共同开发下一代车载功率器件解决方案。',
    content: '镓宏半导体与国内知名新能源汽车厂商正式签署战略合作协议。双方将共同开发适用于新能源汽车的下一代功率器件解决方案，推动车载电源系统的技术升级。',
    date: '2024-03-05',
    category: 'company',
    author: '商务部',
    image: 'https://picsum.photos/seed/news-cooperation/800/400.jpg',
    tags: ['合作', '汽车', 'GaN']
  }, {
    id: '4',
    title: '碳化硅器件在工业应用中的优势',
    summary: '随着工业4.0的推进，碳化硅功率器件在工业应用中展现出巨大潜力，助力工业设备升级换代。',
    content: '随着工业4.0和智能制造的快速发展，碳化硅功率器件在工业应用中展现出巨大潜力。SiC器件的高效率、高频率和高可靠性特点，为工业设备升级换代提供了理想选择。',
    date: '2024-02-28',
    category: 'industry',
    author: '技术部',
    image: 'https://picsum.photos/seed/news-sic-industrial/800/400.jpg',
    tags: ['SiC', '工业应用', '技术趋势']
  }, {
    id: '5',
    title: '5G射频前端技术发展趋势',
    summary: '5G通信的快速发展对射频前端技术提出了更高要求，GaN器件在高频应用中优势明显。',
    content: '5G通信的快速发展对射频前端技术提出了更高要求。GaN器件凭借其高频率、高功率和高效率特性，在5G射频前端应用中展现出明显优势，成为推动5G技术发展的关键器件。',
    date: '2024-02-20',
    category: 'industry',
    author: '技术部',
    image: 'https://picsum.photos/seed/news-5g-rf/800/400.jpg',
    tags: ['5G', '射频', 'GaN', '通信']
  }, {
    id: '6',
    title: '公司通过ISO9001质量管理体系认证',
    summary: '江苏镓宏半导体顺利通过ISO9001:2015质量管理体系认证，产品质量管理达到国际标准。',
    content: '江苏镓宏半导体有限公司顺利通过ISO9001:2015质量管理体系认证。这标志着公司在质量管理方面达到了国际标准，为客户提供更加可靠的产品和服务。',
    date: '2024-02-15',
    category: 'company',
    author: '质量部',
    image: 'https://picsum.photos/seed/news-iso9001/800/400.jpg',
    tags: ['认证', '质量', 'ISO9001']
  }];
  const categories = [{
    id: 'all',
    name: '全部',
    count: newsData.length
  }, {
    id: 'company',
    name: '公司动态',
    count: newsData.filter(n => n.category === 'company').length
  }, {
    id: 'industry',
    name: '行业资讯',
    count: newsData.filter(n => n.category === 'industry').length
  }, {
    id: 'product',
    name: '产品发布',
    count: newsData.filter(n => n.category === 'product').length
  }];
  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) || news.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const handleNewsClick = newsId => {
    handleNavigate('newsDetail', {
      newsId
    });
  };
  const getCategoryName = categoryId => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  };
  const getCategoryColor = categoryId => {
    const colors = {
      company: 'bg-blue-100 text-blue-800',
      industry: 'bg-green-100 text-green-800',
      product: 'bg-purple-100 text-purple-800'
    };
    return colors[categoryId] || 'bg-gray-100 text-gray-800';
  };
  return <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation currentPage="news" onNavigate={handleNavigate} />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">新闻资讯</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                了解最新的行业动态和公司新闻，把握功率半导体发展趋势
              </p>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input type="text" placeholder="搜索新闻标题或内容..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>
                
                {/* Filter Toggle */}
                <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:w-auto">
                  <Filter className="h-4 w-4 mr-2" />
                  筛选分类
                  <ChevronDown className={`h-4 w-4 ml-2 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </Button>
              </div>
              
              {/* Category Filters */}
              {showFilters && <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                        {category.name} ({category.count})
                      </button>)}
                  </div>
                </div>}
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                找到 {filteredNews.length} 篇新闻
              </p>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map(news => <Card key={news.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => handleNewsClick(news.id)}>
                  <CardContent className="p-0">
                    <div className="relative">
                      <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded-t-lg" />
                      <div className="absolute top-4 left-4">
                        <span className={`${getCategoryColor(news.category)} px-3 py-1 rounded-full text-sm font-medium`}>
                          {getCategoryName(news.category)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {news.date}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {news.author}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {news.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">{news.summary}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {news.tags.slice(0, 3).map((tag, index) => <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>)}
                        {news.tags.length > 3 && <span className="text-gray-500 text-xs">+{news.tags.length - 3}</span>}
                      </div>
                      
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto">
                        阅读更多
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {/* No Results */}
            {filteredNews.length === 0 && <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">未找到匹配的新闻</h3>
                <p className="text-gray-600 mb-4">请尝试调整搜索条件或筛选器</p>
                <Button onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}>
                  重置筛选
                </Button>
              </div>}
          </div>
        </div>

        <Footer />
      </div>
    </LanguageProvider>;
}