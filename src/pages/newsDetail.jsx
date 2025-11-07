// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Calendar, User, Share2, ArrowLeft, Tag } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
export default function NewsDetail(props) {
  const {
    $w,
    page
  } = props;
  // 安全获取新闻ID
  const newsId = page?.dataset?.params?.newsId || '1';
  const newsData = {
    1: {
      title: '江苏镓宏半导体荣获2024年度创新企业奖',
      summary: '在2024年中国半导体创新大会上，江苏镓宏半导体凭借在GaN和SiC功率器件领域的创新突破，荣获年度创新企业奖。',
      content: `
            <p>江苏镓宏半导体有限公司在2024年中国半导体创新大会上荣获年度创新企业奖。公司凭借在氮化镓(GaN)和碳化硅(SiC)功率器件领域的创新突破，得到了业界专家和客户的高度认可。</p>
            
            <h3>创新技术引领行业发展</h3>
            <p>作为国内领先的功率半导体企业，江苏镓宏半导体始终坚持技术创新驱动发展。公司在GaN和SiC材料应用、器件结构设计、制造工艺等方面取得了多项突破性进展。</p>
            
            <p>其中，公司自主研发的GHN1000系列氮化镓功率器件，采用先进的GaN-on-SiC工艺，实现了1000V高压下的优异性能表现。该系列产品在效率、功率密度和可靠性方面都达到了国际先进水平。</p>
            
            <h3>市场表现获得认可</h3>
            <p>凭借卓越的产品性能和可靠的质量保证，江苏镓宏半导体的产品已广泛应用于新能源汽车、5G通信、工业电源、数据中心等关键领域。</p>
            
            <p>特别是在新能源汽车市场，公司的GaN功率器件已成功应用于多家知名汽车厂商的车型中，为提升整车效率和降低能耗做出了重要贡献。</p>
            
            <h3>未来发展规划</h3>
            <p>获得年度创新企业奖是对江苏镓宏半导体过去努力的肯定，更是对未来的鞭策。公司将继续加大研发投入，深化与产业链上下游的合作，推动功率半导体技术的持续创新。</p>
            
            <p>同时，公司还将积极拓展国际市场，提升品牌影响力，努力成为全球功率半导体领域的领军企业。</p>
          `,
      date: '2024-03-15',
      category: '公司动态',
      author: '市场部',
      image: 'https://picsum.photos/seed/news-award/1200/600.jpg',
      tags: ['获奖', '创新', 'GaN', 'SiC', '年度奖项']
    },
    2: {
      title: '新一代GaN功率器件正式发布',
      summary: '镓宏半导体发布新一代GHN1000系列氮化镓功率器件，效率提升30%，体积减小50%，引领行业技术革新。',
      content: `
            <p>镓宏半导体今日正式发布新一代GHN1000系列氮化镓功率器件。该系列产品采用先进的GaN-on-SiC工艺，在效率、功率密度和可靠性方面都有显著提升。</p>
            
            <h3>技术突破</h3>
            <p>新一代GHN1000系列器件在多个关键技术指标上实现了突破：</p>
            <ul>
              <li>导通电阻降低25%，显著减少导通损耗</li>
              <li>开关速度提升40%，支持更高频率应用</li>
              <li>工作温度范围扩展至-55°C至150°C</li>
              <li>功率密度提升50%，助力设备小型化</li>
            </ul>
            
            <h3>应用领域</h3>
            <p>该系列产品主要应用于以下领域：</p>
            <ul>
              <li>新能源汽车：车载充电器、DC-DC转换器</li>
              <li>5G通信：基站电源、射频前端</li>
              <li>工业电源：变频器、UPS、伺服驱动</li>
              <li>数据中心：服务器电源、GPU供电</li>
            </ul>
            
            <h3>市场前景</h3>
            <p>随着新能源汽车和5G通信的快速发展，对高效功率器件的需求持续增长。GHN1000系列的推出将进一步推动相关产业的技术升级。</p>
          `,
      date: '2024-03-10',
      category: '产品发布',
      author: '产品部',
      image: 'https://picsum.photos/seed/news-gan/1200/600.jpg',
      tags: ['GaN', '新产品', '功率器件', '技术发布']
    }
  };
  const news = newsData[newsId] || newsData[1];
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const handleShare = () => {
    console.log('分享新闻:', news.title);
  };
  return <div className="min-h-screen bg-gray-50">
          <Navigation currentPage="news" onNavigate={handleNavigate} />
          
          <div className="pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Breadcrumb */}
              <div className="mb-6">
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-2">
                    <li>
                      <button onClick={() => handleNavigate('home')} className="text-gray-500 hover:text-gray-700">
                        首页
                      </button>
                    </li>
                    <li className="flex items-center">
                      <span className="mx-2 text-gray-400">/</span>
                      <button onClick={() => handleNavigate('news')} className="text-gray-500 hover:text-gray-700">
                        新闻资讯
                      </button>
                    </li>
                    <li className="flex items-center">
                      <span className="mx-2 text-gray-400">/</span>
                      <span className="text-gray-900">{news.title}</span>
                    </li>
                  </ol>
                </nav>
              </div>

              {/* Article Header */}
              <Card className="mb-8">
                <CardContent className="p-0">
                  <img src={news.image} alt={news.title} className="w-full h-64 md:h-96 object-cover rounded-t-lg" />
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {news.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {news.date}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <User className="h-4 w-4 mr-1" />
                        {news.author}
                      </div>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{news.title}</h1>
                    <p className="text-lg text-gray-600 mb-6">{news.summary}</p>
                    
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {news.tags.map((tag, index) => <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>)}
                      </div>
                      <Button variant="outline" onClick={handleShare}>
                        <Share2 className="h-4 w-4 mr-2" />
                        分享
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Article Content */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{
              __html: news.content
            }} />
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">相关文章</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <img src="https://picsum.photos/seed/related1/150/100.jpg" alt="相关文章1" className="w-24 h-16 object-cover rounded" />
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1 line-clamp-2">
                          碳化硅器件在工业应用中的优势
                        </h4>
                        <p className="text-sm text-gray-500">2024-02-28</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <img src="https://picsum.photos/seed/related2/150/100.jpg" alt="相关文章2" className="w-24 h-16 object-cover rounded" />
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1 line-clamp-2">
                          5G射频前端技术发展趋势
                        </h4>
                        <p className="text-sm text-gray-500">2024-02-20</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Back Button */}
              <div className="mt-8 text-center">
                <Button variant="outline" onClick={() => handleNavigate('news')} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  返回新闻列表
                </Button>
              </div>
            </div>
          </div>

          <Footer />
        </div>;
}