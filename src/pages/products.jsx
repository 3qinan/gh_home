// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Search, Filter, Download, Eye } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
export default function Products(props) {
  const {
    $w
  } = props;
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['全部', '功率器件', '射频产品', '驱动芯片'];
  const products = [{
    id: 1,
    name: 'GHN1000 GaN HEMT',
    category: '功率器件',
    description: '1000V氮化镓功率器件，具有极低的导通电阻和开关损耗',
    features: ['高效率', '低损耗', '高频工作', '温度稳定性好'],
    image: 'https://picsum.photos/seed/gan-hemt/400/300.jpg',
    datasheet: 'GHN1000-datasheet.pdf'
  }, {
    id: 2,
    name: 'SIC1200 SiC MOSFET',
    category: '功率器件',
    description: '1200V碳化硅MOSFET，适用于高功率应用',
    features: ['高电压', '低导通电阻', '快速开关', '高温工作'],
    image: 'https://picsum.photos/seed/sic-mosfet/400/300.jpg',
    datasheet: 'SIC1200-datasheet.pdf'
  }, {
    id: 3,
    name: 'RFA2000 射频放大器',
    category: '射频产品',
    description: '2GHz射频功率放大器，适用于5G通信基站',
    features: ['高增益', '线性度好', '高效率', '宽带宽'],
    image: 'https://picsum.photos/seed/rf-amp/400/300.jpg',
    datasheet: 'RFA2000-datasheet.pdf'
  }, {
    id: 4,
    name: 'DRV500 驱动芯片',
    category: '驱动芯片',
    description: '智能栅极驱动芯片，支持多种功率器件',
    features: ['智能保护', '可编程', '高可靠性', '低功耗'],
    image: 'https://picsum.photos/seed/driver-ic/400/300.jpg',
    datasheet: 'DRV500-datasheet.pdf'
  }, {
    id: 5,
    name: 'GHN650 GaN器件',
    category: '功率器件',
    description: '650V氮化镓功率器件，适用于消费电子',
    features: ['小型化', '高效率', '低成本', '易驱动'],
    image: 'https://picsum.photos/seed/gan650/400/300.jpg',
    datasheet: 'GHN650-datasheet.pdf'
  }, {
    id: 6,
    name: 'RFA3500 射频模块',
    category: '射频产品',
    description: '3.5GHz射频前端模块，集成多频段支持',
    features: ['多频段', '高集成度', '小尺寸', '低功耗'],
    image: 'https://picsum.photos/seed/rf-module/400/300.jpg',
    datasheet: 'RFA3500-datasheet.pdf'
  }];
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === '全部' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const handleProductClick = productId => {
    handleNavigate('productDetail', {
      productId
    });
  };
  return <div className="min-h-screen bg-gray-50">
          <Navigation currentPage="products" onNavigate={handleNavigate} />
          
          <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-900 mb-4">产品中心</h1>
                <p className="text-lg text-gray-600">探索我们的创新半导体产品解决方案</p>
              </div>

              {/* Search and Filter */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input type="text" placeholder="搜索产品名称或描述..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-gray-500" />
                    <div className="flex gap-2">
                      {categories.map(category => <Button key={category} variant={selectedCategory === category ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}>
                          {category}
                        </Button>)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                          {product.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">主要特性：</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.features.map((feature, index) => <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                {feature}
                              </span>)}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={() => handleProductClick(product.id)}>
                            <Eye className="h-4 w-4 mr-2" />
                            查看详情
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>

              {filteredProducts.length === 0 && <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">未找到匹配的产品</p>
                </div>}
            </div>
          </div>

          <Footer />
        </div>;
}