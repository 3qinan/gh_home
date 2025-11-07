// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Calendar, User, Tag, Search, Filter, Clock } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
export default function News(props) {
  const {
    $w
  } = props;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = [{
    id: 'all',
    name: '全部',
    count: 12
  }, {
    id: 'company',
    name: '公司动态',
    count: 4
  }, {
    id: 'product',
    name: '产品发布',
    count: 3
  }, {
    id: 'industry',
    name: '行业资讯',
    count: 3
  }, {
    id: 'technology',
    name: '技术文章',
    count: 2
  }];
  const newsItems = [{
    id: 1,
    title: '江苏镓宏半导体荣获2024年度创新企业奖',
    summary: '在2024年中国半导体创新大会上，江苏镓宏半导体凭借在GaN和SiC功率器件领域的创新突破，荣获年度创新企业奖。',
    content: '江苏镓宏半导体有限公司在2024年中国半导体创新大会上荣获年度创新企业奖。公司凭借在氮化镓(GaN)和碳化硅(SiC)功率器件领域的创新突破，得到了业界专家和客户的高度认可。',
    category: 'company',
    categoryName: '公司动态',
    date: '2024-03-15',
    author: '市场部',
    image: 'https://picsum.photos/seed/news-award-2024/400/250.jpg',
    tags: ['获奖', '创新', 'GaN', 'SiC', '年度奖项'],
    readTime: '5分钟'
  }, {
    id: 2,
    title: '新一代GaN功率器件正式发布',
    summary: '镓宏半导体发布新一代GHN1000系列氮化镓功率器件，效率提升30%，体积减小50%，引领行业技术革新。',
    content: '镓宏半导体今日正式发布新一代GHN1000系列氮化镓功率器件。该系列产品采用先进的GaN-on-SiC工艺，在效率、功率密度和可靠性方面都有显著提升。',
    category: 'product',
    categoryName: '产品发布',
    date: '2024-03-10',
    author: '产品部',
    image: 'https://picsum.photos/seed/news-gan-release/400/250.jpg',
    tags: ['GaN', '新产品', '功率器件', '技术发布'],
    readTime: '3分钟'
  }, {
    id: 3,
    title: '碳化硅器件在新能源汽车中的应用前景',
    summary: '随着新能源汽车市场的快速发展，碳化硅功率器件因其优异的性能特性，在电动汽车领域展现出巨大的应用潜力。',
    content: '碳化硅(SiC)功率器件凭借其高电压、高频率、高效率等特性，正在成为新能源汽车领域的关键技术。本文深入分析SiC器件在电动汽车中的应用现状和发展趋势。',
    category: 'technology',
    categoryName: '技术文章',
    date: '2024-03-05',
    author: '技术部',
    image: 'https://picsum.photos/seed/news-sic-ev/400/250.jpg',
    tags: ['SiC', '新能源汽车', '技术分析', '应用前景'],
    readTime: '8分钟'
  }, {
    id: 4,
    title: '镓宏半导体参加2024年国际功率半导体展会',
    summary: '公司携最新GaN和SiC功率器件产品参加2024年国际功率半导体展会，展示最新的技术成果和产品解决方案。',
    content: '2024年国际功率半导体展会在上海成功举办，江苏镓宏半导体携最新产品亮相展会，吸引了众多国内外客户和合作伙伴的关注。',
    category: 'company',
    categoryName: '公司动态',
    date: '2024-02-28',
    author: '市场部',
    image: 'https://picsum.photos/seed/news-expo-2024/400/250.jpg',
    tags: ['展会', '国际交流', '产品展示', '合作伙伴'],
    readTime: '4分钟'
  }, {
    id: 5,
    title: '第三代半导体产业发展趋势分析',
    summary: '随着5G通信、新能源汽车等新兴应用的快速发展，第三代半导体产业迎来前所未有的发展机遇。',
    content: '第三代半导体材料主要包括氮化镓(GaN)和碳化硅(SiC)，相比传统硅材料，具有更宽的禁带宽度、更高的击穿电场、更高的热导率等优势。',
    category: 'industry',
    categoryName: '行业资讯',
    date: '2024-02-20',
    author: '行业分析师',
    image: 'https://picsum.photos/seed/news-industry-trend/400/250.jpg',
    tags: ['行业趋势', '第三代半导体', '市场分析', '发展机遇'],
    readTime: '6分钟'
  }, {
    id: 6,
    title: 'GaN功率器件在5G基站电源中的应用',
    summary: '5G基站的快速发展对电源系统提出了更高要求，GaN功率器件凭借其高频特性成为理想选择。',
    content: '5G通信网络的部署对电源系统的小型化、高效化提出了更高要求。氮化镓(GaN)功率器件凭借其高开关频率、高效率等特性，在5G基站电源中展现出独特优势。',
    category: 'technology',
    categoryName: '技术文章',
    date: '2024-02-15',
    author: '技术部',
    image: 'https://picsum.photos/seed/news-5g-gan/400/250.jpg',
    tags: ['GaN', '5G通信', '基站电源', '技术应用'],
    readTime: '7分钟'
  }];
  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.summary.toLowerCase().includes(searchTerm.toLowerCase()) || item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  // 结构化数据
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "新闻资讯 - 江苏镓宏半导体有限公司",
    "description": "了解江苏镓宏半导体的最新动态、产品发布、技术文章和行业资讯，掌握第三代半导体产业发展趋势",
    "url": "https://www.ganhonor.com/news",
    "publisher": {
      "@type": "Organization",
      "name": "江苏镓宏半导体有限公司",
      "logo": {
        "@type": "ImageObject",
        "url": "https://picsum.photos/seed/company-logo/200/200.jpg"
      }
    },
    "blogPost": filteredNews.map(item => ({
      "@type": "BlogPosting",
      "headline": item.title,
      "description": item.summary,
      "datePublished": item.date,
      "author": {
        "@type": "Person",
        "name": item.author
      },
      "image": item.image,
      "url": `https://www.ganhonor.com/news/${item.id}`
    }))
  };
  return <div className="min-h-screen bg-gray-50">
          {/* 结构化数据 */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(structuredData)
    }} />
          
          <Navigation currentPage="news" onNavigate={handleNavigate} />
          
          {/* Hero Section */}
          <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">新闻资讯</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  了解江苏镓宏半导体的最新动态、产品发布、技术文章和行业资讯，掌握第三代半导体产业发展趋势
                </p>
              </div>
            </div>
          </header>

          {/* Filters Section */}
          <section className="py-8 bg-white border-b" aria-labelledby="news-filter-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="news-filter-heading" className="sr-only">新闻筛选</h2>
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input type="text" placeholder="搜索新闻标题或关键词..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" aria-label="搜索新闻" />
                </div>

                {/* Categories */}
                <nav className="flex flex-wrap gap-2" aria-label="新闻分类">
                  {categories.map(category => <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} aria-label={`筛选${category.name}新闻`}>
                      {category.name}
                      <span className="ml-2 text-sm opacity-75">({category.count})</span>
                    </button>)}
                </nav>
              </div>
            </div>
          </section>

          {/* News List */}
          <main className="py-16" aria-labelledby="news-list-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 id="news-list-heading" className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? '全部新闻' : categories.find(cat => cat.id === selectedCategory)?.name}
                  <span className="text-gray-500 font-normal ml-2">({filteredNews.length} 篇文章)</span>
                </h2>
              </div>

              {filteredNews.length === 0 ? <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">未找到相关新闻</h3>
                  <p className="text-gray-600 mb-4">请尝试其他搜索词或筛选条件</p>
                  <Button onClick={() => {
            setSearchTerm('');
            setSelectedCategory('all');
          }} variant="outline">
                    重置筛选
                  </Button>
                </div> : <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main News */}
                  <div className="lg:col-span-2 space-y-8">
                    {filteredNews.slice(0, 3).map(item => <article key={item.id} className="group">
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                              <div className="md:w-1/3">
                                <img src={item.image} alt={item.title} className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none group-hover:scale-105 transition-transform duration-300" loading="lazy" width="400" height="250" />
                              </div>
                              <div className="md:w-2/3 p-6">
                                <div className="flex items-center gap-4 mb-3">
                                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {item.categoryName}
                                  </span>
                                  <div className="flex items-center text-gray-500 text-sm">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    {item.date}
                                  </div>
                                  <div className="flex items-center text-gray-500 text-sm">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {item.readTime}
                                  </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors cursor-pointer" onClick={() => handleNavigate('newsDetail', {
                        newsId: item.id.toString()
                      })}>
                                  {item.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">
                                  {item.summary}
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center text-gray-500 text-sm">
                                    <User className="h-4 w-4 mr-1" />
                                    {item.author}
                                  </div>
                                  <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0" onClick={() => handleNavigate('newsDetail', {
                          newsId: item.id.toString()
                        })}>
                                    阅读更多
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </article>)}
                  </div>

                  {/* Sidebar */}
                  <aside className="space-y-8">
                    {/* Recent News */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">最新文章</h3>
                        <div className="space-y-4">
                          {filteredNews.slice(0, 5).map(item => <article key={item.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                              <h4 className="font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer" onClick={() => handleNavigate('newsDetail', {
                      newsId: item.id.toString()
                    })}>
                                {item.title}
                              </h4>
                              <div className="flex items-center text-gray-500 text-sm">
                                <Calendar className="h-3 w-3 mr-1" />
                                {item.date}
                              </div>
                            </article>)}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Popular Tags */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">热门标签</h3>
                        <div className="flex flex-wrap gap-2">
                          {['GaN', 'SiC', '功率器件', '新能源汽车', '5G通信', '技术创新', '行业动态', '产品发布'].map(tag => <button key={tag} onClick={() => setSearchTerm(tag)} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors">
                              {tag}
                            </button>)}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Newsletter */}
                    <Card className="bg-blue-50">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">订阅资讯</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          获取最新的产品信息和技术文章
                        </p>
                        <div className="space-y-3">
                          <input type="email" placeholder="输入您的邮箱" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            订阅
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </aside>
                </div>}

              {/* More News */}
              {filteredNews.length > 3 && <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">更多文章</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNews.slice(3).map(item => <article key={item.id} className="group">
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-0">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300" loading="lazy" width="400" height="250" />
                            <div className="p-6">
                              <div className="flex items-center gap-4 mb-3">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                                  {item.categoryName}
                                </span>
                                <div className="flex items-center text-gray-500 text-sm">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {item.date}
                                </div>
                              </div>
                              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer" onClick={() => handleNavigate('newsDetail', {
                      newsId: item.id.toString()
                    })}>
                                {item.title}
                              </h4>
                              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                {item.summary}
                              </p>
                              <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 text-sm" onClick={() => handleNavigate('newsDetail', {
                      newsId: item.id.toString()
                    })}>
                                阅读更多
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </article>)}
                  </div>
                </div>}
            </div>
          </main>

          <Footer />
        </div>;
}