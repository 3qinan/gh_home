// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
export default function News(props) {
  const {
    $w
  } = props;
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['全部', '公司动态', '产品发布', '行业新闻', '媒体报道'];
  const news = [{
    id: 1,
    title: '江苏镓宏半导体荣获2024年度创新企业奖',
    summary: '在2024年中国半导体创新大会上，江苏镓宏半导体凭借在GaN和SiC功率器件领域的创新突破，荣获年度创新企业奖。',
    content: '江苏镓宏半导体有限公司在2024年中国半导体创新大会上荣获年度创新企业奖。公司凭借在氮化镓(GaN)和碳化硅(SiC)功率器件领域的创新突破，得到了业界专家和客户的高度认可...',
    date: '2024-03-15',
    category: '公司动态',
    author: '市场部',
    image: 'https://picsum.photos/seed/news-award/800/400.jpg',
    tags: ['获奖', '创新', 'GaN', 'SiC']
  }, {
    id: 2,
    title: '新一代GaN功率器件正式发布',
    summary: '镓宏半导体发布新一代GHN1000系列氮化镓功率器件，效率提升30%，体积减小50%，引领行业技术革新。',
    content: '镓宏半导体今日正式发布新一代GHN1000系列氮化镓功率器件。该系列产品采用先进的GaN-on-SiC工艺，在效率、功率密度和可靠性方面都有显著提升...',
    date: '2024-03-10',
    category: '产品发布',
    author: '产品部',
    image: 'https://picsum.photos/seed/news-gan/800/400.jpg',
    tags: ['GaN', '新产品', '功率器件']
  }, {
    id: 3,
    title: '镓宏半导体参加国际半导体展览会',
    summary: '公司参加2024年国际半导体展览会，展示最新产品和技术解决方案，与全球客户深入交流合作。',
    content: '2024年国际半导体展览会在上海新国际博览中心隆重举行。江苏镓宏半导体作为国内领先的功率半导体企业，携最新产品和技术解决方案精彩亮相...',
    date: '2024-03-05',
    category: '行业新闻',
    author: '市场部',
    image: 'https://picsum.photos/seed/news-expo/800/400.jpg',
    tags: ['展会', '国际合作', '展览']
  }, {
    id: 4,
    title: '与知名汽车厂商达成战略合作',
    summary: '镓宏半导体与国内知名新能源汽车厂商签署战略合作协议，共同开发车载电源解决方案。',
    content: '江苏镓宏半导体有限公司与国内知名新能源汽车厂商今日签署战略合作协议。双方将共同开发高效、可靠的车载电源解决方案，推动新能源汽车产业发展...',
    date: '2024-02-28',
    category: '公司动态',
    author: '商务部',
    image: 'https://picsum.photos/seed/news-cooperation/800/400.jpg',
    tags: ['合作', '汽车电子', '战略合作']
  }, {
    id: 5,
    title: '行业媒体专访：GaN技术的未来发展趋势',
    summary: '接受《半导体技术》杂志专访，深入探讨GaN技术在功率电子领域的发展前景和技术挑战。',
    content: '《半导体技术》杂志近日对江苏镓宏半导体CTO进行了专访，深入探讨了GaN技术在功率电子领域的发展前景、技术挑战以及市场机遇...',
    date: '2024-02-20',
    category: '媒体报道',
    author: '技术部',
    image: 'https://picsum.photos/seed/news-interview/800/400.jpg',
    tags: ['专访', 'GaN技术', '行业趋势']
  }, {
    id: 6,
    title: '公司通过ISO9001质量管理体系认证',
    summary: '镓宏半导体成功通过ISO9001:2015质量管理体系认证，产品质量管理水平达到国际标准。',
    content: '江苏镓宏半导体有限公司近日成功通过ISO9001:2015质量管理体系认证。这标志着公司在质量管理方面已达到国际先进水平...',
    date: '2024-02-15',
    category: '公司动态',
    author: '质量部',
    image: 'https://picsum.photos/seed/news-iso/800/400.jpg',
    tags: ['认证', '质量管理', 'ISO9001']
  }];
  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === '全部' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const handleNewsClick = newsId => {
    handleNavigate('newsDetail', {
      newsId
    });
  };
  return <div className="min-h-screen bg-gray-50">
          <Navigation currentPage="news" onNavigate={handleNavigate} />
          
          <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-900 mb-4">新闻资讯</h1>
                <p className="text-lg text-gray-600">了解最新的公司动态和行业资讯</p>
              </div>

              {/* Search and Filter */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input type="text" placeholder="搜索新闻标题或内容..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      {categories.map(category => <Button key={category} variant={selectedCategory === category ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}>
                          {category}
                        </Button>)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured News */}
              {filteredNews.length > 0 && <div className="mb-12">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <img src={filteredNews[0].image} alt={filteredNews[0].title} className="w-full h-64 md:h-full object-cover" />
                        </div>
                        <div className="md:w-1/2 p-8">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              {filteredNews[0].category}
                            </span>
                            <span className="text-gray-500 text-sm">{filteredNews[0].date}</span>
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-4">{filteredNews[0].title}</h2>
                          <p className="text-gray-600 mb-6 line-clamp-3">{filteredNews[0].summary}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500">
                              <User className="h-4 w-4 mr-1" />
                              {filteredNews[0].author}
                            </div>
                            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => handleNewsClick(filteredNews[0].id)}>
                              阅读全文 <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>}

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.slice(1).map(item => <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-0">
                      <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {item.category}
                          </span>
                          <span className="text-gray-500 text-xs">{item.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.summary}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-gray-500">
                            <User className="h-3 w-3 mr-1" />
                            {item.author}
                          </div>
                          <Button variant="link" className="p-0 h-auto text-blue-600 text-sm" onClick={() => handleNewsClick(item.id)}>
                            阅读更多 <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>

              {filteredNews.length === 0 && <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">未找到匹配的新闻</p>
                </div>}
            </div>
          </div>

          <Footer />
        </div>;
}