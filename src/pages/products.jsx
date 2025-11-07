// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Search, Filter, Grid, List, Zap, Shield, Cpu, Battery } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
export default function Products(props) {
  const {
    $w
  } = props;
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = [{
    id: 'all',
    name: '全部产品',
    icon: <Grid className="h-5 w-5" />
  }, {
    id: 'gan',
    name: '氮化镓器件',
    icon: <Zap className="h-5 w-5" />
  }, {
    id: 'sic',
    name: '碳化硅器件',
    icon: <Shield className="h-5 w-5" />
  }, {
    id: 'modules',
    name: '功率模块',
    icon: <Cpu className="h-5 w-5" />
  }, {
    id: 'solutions',
    name: '解决方案',
    icon: <Battery className="h-5 w-5" />
  }];
  const products = [{
    id: 1,
    name: 'GHN1000 GaN HEMT',
    category: 'gan',
    description: '1000V氮化镓功率器件，具有极低的导通电阻和开关损耗，适用于高效电源转换应用',
    image: 'https://picsum.photos/seed/gan-hemt-1000/400/300.jpg',
    features: ['1000V耐压', '25mΩ导通电阻', '1MHz开关频率', 'TO-247封装'],
    applications: ['服务器电源', '工业电源', '新能源汽车充电桩', '太阳能逆变器'],
    datasheet: 'GHN1000-datasheet.pdf'
  }, {
    id: 2,
    name: 'GHN650 GaN HEMT',
    category: 'gan',
    description: '650V氮化镓功率器件，专为快充电源和适配器优化设计',
    image: 'https://picsum.photos/seed/gan-hemt-650/400/300.jpg',
    features: ['650V耐压', '18mΩ导通电阻', '2MHz开关频率', 'DFN8x8封装'],
    applications: ['快充电源', 'LED驱动', 'Class-D音频功放', '无线充电'],
    datasheet: 'GHN650-datasheet.pdf'
  }, {
    id: 3,
    name: 'SIC1200 SiC MOSFET',
    category: 'sic',
    description: '1200V碳化硅MOSFET，适用于高功率、高温度应用场景',
    image: 'https://picsum.photos/seed/sic-mosfet-1200/400/300.jpg',
    features: ['1200V耐压', '40mΩ导通电阻', '500kHz开关频率', 'TO-247封装'],
    applications: ['电动汽车', '工业变频器', '轨道交通', '智能电网'],
    datasheet: 'SIC1200-datasheet.pdf'
  }, {
    id: 4,
    name: 'SIC1700 SiC MOSFET',
    category: 'sic',
    description: '1700V碳化硅MOSFET，专为高压工业应用设计',
    image: 'https://picsum.photos/seed/sic-mosfet-1700/400/300.jpg',
    features: ['1700V耐压', '80mΩ导通电阻', '200kHz开关频率', 'TO-247封装'],
    applications: ['光伏逆变器', 'UPS系统', '电机驱动', '工业电源'],
    datasheet: 'SIC1700-datasheet.pdf'
  }, {
    id: 5,
    name: 'GPM500 智能功率模块',
    category: 'modules',
    description: '集成化智能功率模块，内置驱动和保护电路',
    image: 'https://picsum.photos/seed/power-module-500/400/300.jpg',
    features: ['1200V/50A', '内置驱动', '过温保护', '紧凑设计'],
    applications: ['变频空调', '工业洗衣机', '泵类驱动', '风机控制'],
    datasheet: 'GPM500-datasheet.pdf'
  }, {
    id: 6,
    name: 'GPM700 三电平模块',
    category: 'modules',
    description: '三电平功率模块，提供更高的效率和更低的谐波',
    image: 'https://picsum.photos/seed/power-module-700/400/300.jpg',
    features: ['1200V/100A', '三电平拓扑', '低EMI', '高效率'],
    applications: ['太阳能逆变器', 'UPS系统', '电动汽车充电', '储能系统'],
    datasheet: 'GPM700-datasheet.pdf'
  }];
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
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
    "@type": "CollectionPage",
    "name": "功率半导体产品 - 江苏镓宏半导体有限公司",
    "description": "专业提供氮化镓(GaN)、碳化硅(SiC)功率器件和智能功率模块，广泛应用于新能源汽车、5G通信、工业电源等领域",
    "url": "https://www.ganhonor.com/products",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredProducts.map((product, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": product.name,
        "description": product.description,
        "category": categories.find(cat => cat.id === product.category)?.name,
        "image": product.image
      }))
    }
  };
  return <div className="min-h-screen bg-gray-50">
          {/* 结构化数据 */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(structuredData)
    }} />
          
          <Navigation currentPage="products" onNavigate={handleNavigate} />
          
          {/* Hero Section */}
          <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">产品中心</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  专业的氮化镓(GaN)和碳化硅(SiC)功率器件制造商，为全球客户提供高性能、高可靠性的功率半导体解决方案
                </p>
              </div>
            </div>
          </header>

          {/* Filters Section */}
          <section className="py-8 bg-white border-b" aria-labelledby="filter-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="filter-heading" className="sr-only">产品筛选</h2>
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input type="text" placeholder="搜索产品名称或描述..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" aria-label="搜索产品" />
                </div>

                {/* Categories */}
                <nav className="flex flex-wrap gap-2" aria-label="产品分类">
                  {categories.map(category => <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} aria-label={`筛选${category.name}`}>
                      {category.icon}
                      {category.name}
                    </button>)}
                </nav>

                {/* View Mode */}
                <div className="flex gap-2" role="tablist" aria-label="视图模式">
                  <button onClick={() => setViewMode('grid')} className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`} role="tab" aria-selected={viewMode === 'grid'} aria-label="网格视图">
                    <Grid className="h-5 w-5" />
                  </button>
                  <button onClick={() => setViewMode('list')} className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`} role="tab" aria-selected={viewMode === 'list'} aria-label="列表视图">
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <main className="py-16" aria-labelledby="products-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 id="products-heading" className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? '全部产品' : categories.find(cat => cat.id === selectedCategory)?.name}
                  <span className="text-gray-500 font-normal ml-2">({filteredProducts.length} 个产品)</span>
                </h2>
              </div>

              {filteredProducts.length === 0 ? <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">未找到相关产品</h3>
                  <p className="text-gray-600 mb-4">请尝试其他搜索词或筛选条件</p>
                  <Button onClick={() => {
            setSearchTerm('');
            setSelectedCategory('all');
          }} variant="outline">
                    重置筛选
                  </Button>
                </div> : <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                  {filteredProducts.map(product => viewMode === 'grid' ? <article key={product.id} className="group">
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-6">
                            <div className="relative mb-4 overflow-hidden rounded-lg">
                              <img src={product.image} alt={`${product.name} - ${product.description}`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width="400" height="300" />
                              <div className="absolute top-4 left-4">
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                  {categories.find(cat => cat.id === product.category)?.name}
                                </span>
                              </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {product.name}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                              {product.description}
                            </p>
                            <div className="space-y-2 mb-4">
                              {product.features.slice(0, 2).map((feature, idx) => <div key={idx} className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                                  {feature}
                                </div>)}
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" onClick={() => handleNavigate('productDetail', {
                    productId: product.id.toString()
                  })}>
                                查看详情
                              </Button>
                              <Button variant="outline" size="sm">
                                下载规格书
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </article> : <article key={product.id} className="group">
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-6">
                            <div className="flex gap-6">
                              <div className="flex-shrink-0">
                                <img src={product.image} alt={`${product.name} - ${product.description}`} className="w-32 h-32 object-cover rounded-lg" loading="lazy" width="128" height="128" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mb-2">
                                      {categories.find(cat => cat.id === product.category)?.name}
                                    </span>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                      {product.name}
                                    </h3>
                                  </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                  {product.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {product.features.map((feature, idx) => <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                                      {feature}
                                    </span>)}
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" onClick={() => handleNavigate('productDetail', {
                        productId: product.id.toString()
                      })}>
                                    查看详情
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    下载规格书
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </article>)}
                </div>}
            </div>
          </main>

          <Footer />
        </div>;
}