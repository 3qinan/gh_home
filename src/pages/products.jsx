// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Search, Filter, Download, Eye, ChevronDown } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageContext';
export default function Products(props) {
  const {
    $w,
    page
  } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);
  const category = page?.dataset?.params?.category || 'all';
  if (category !== 'all') {
    setSelectedCategory(category);
  }
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const products = [{
    id: '1',
    name: 'GHN1000 GaN HEMT',
    category: 'gan',
    description: '1000V氮化镓功率器件，具有极低的导通电阻和开关损耗，适用于高频应用',
    image: 'https://picsum.photos/seed/gan-hemt/400/300.jpg',
    specifications: {
      voltage: '1000V',
      current: '30A',
      rdsOn: '25mΩ',
      package: 'TO-247'
    },
    features: ['高效率', '低损耗', '高频工作', '温度稳定性好'],
    applications: ['服务器电源', '工业电源', '新能源汽车充电桩', '太阳能逆变器'],
    datasheet: 'GHN1000-datasheet.pdf'
  }, {
    id: '2',
    name: 'SIC1200 SiC MOSFET',
    category: 'sic',
    description: '1200V碳化硅MOSFET，适用于高功率应用，具有优异的高温性能',
    image: 'https://picsum.photos/seed/sic-mosfet/400/300.jpg',
    specifications: {
      voltage: '1200V',
      current: '40A',
      rdsOn: '40mΩ',
      package: 'TO-247'
    },
    features: ['高电压', '低导通电阻', '快速开关', '高温工作'],
    applications: ['电动汽车', '工业变频器', '轨道交通', '智能电网'],
    datasheet: 'SIC1200-datasheet.pdf'
  }, {
    id: '3',
    name: 'GHN650 GaN FET',
    category: 'gan',
    description: '650V氮化镓场效应管，专为快充电源和适配器设计',
    image: 'https://picsum.photos/seed/gan-fet/400/300.jpg',
    specifications: {
      voltage: '650V',
      current: '20A',
      rdsOn: '18mΩ',
      package: 'DFN8x8'
    },
    features: ['超低导通电阻', '快速开关', '小尺寸封装', '高效率'],
    applications: ['快充电源', 'LED驱动', '适配器', '无人机'],
    datasheet: 'GHN650-datasheet.pdf'
  }, {
    id: '4',
    name: 'SIC1700 SiC IGBT',
    category: 'sic',
    description: '1700V碳化硅IGBT，工业级高功率应用解决方案',
    image: 'https://picsum.photos/seed/sic-igbt/400/300.jpg',
    specifications: {
      voltage: '1700V',
      current: '60A',
      vceSat: '2.5V',
      package: 'TO-247'
    },
    features: ['高电压等级', '低开关损耗', '高可靠性', '工业级温度'],
    applications: ['工业变频器', '风力发电', 'UPS系统', '轨道交通'],
    datasheet: 'SIC1700-datasheet.pdf'
  }, {
    id: '5',
    name: 'GPM500 功率模块',
    category: 'modules',
    description: '集成化功率模块，包含GaN器件和驱动电路',
    image: 'https://picsum.photos/seed/power-module/400/300.jpg',
    specifications: {
      voltage: '500V',
      current: '50A',
      power: '25kW',
      package: 'Module'
    },
    features: ['集成设计', '高功率密度', '易于使用', '完整解决方案'],
    applications: ['电机驱动', '电源系统', '新能源发电', '工业自动化'],
    datasheet: 'GPM500-datasheet.pdf'
  }, {
    id: '6',
    name: 'GHN300 GaN HEMT',
    category: 'gan',
    description: '300V氮化镓功率器件，适用于中低压应用',
    image: 'https://picsum.photos/seed/gan-300/400/300.jpg',
    specifications: {
      voltage: '300V',
      current: '15A',
      rdsOn: '12mΩ',
      package: 'QFN6x6'
    },
    features: ['低压应用', '超低电阻', '高频性能', '小尺寸'],
    applications: ['DC-DC转换器', 'LED照明', '音频放大器', '便携设备'],
    datasheet: 'GHN300-datasheet.pdf'
  }];
  const categories = [{
    id: 'all',
    name: '全部产品',
    count: products.length
  }, {
    id: 'gan',
    name: '氮化镓器件',
    count: products.filter(p => p.category === 'gan').length
  }, {
    id: 'sic',
    name: '碳化硅器件',
    count: products.filter(p => p.category === 'sic').length
  }, {
    id: 'modules',
    name: '功率模块',
    count: products.filter(p => p.category === 'modules').length
  }];
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'voltage':
        return parseInt(b.specifications.voltage) - parseInt(a.specifications.voltage);
      case 'current':
        return parseInt(b.specifications.current) - parseInt(a.specifications.current);
      default:
        return 0;
    }
  });
  const handleProductClick = productId => {
    handleNavigate('productDetail', {
      productId
    });
  };
  const handleDownload = datasheet => {
    console.log('下载规格书:', datasheet);
  };
  return <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation currentPage="products" onNavigate={handleNavigate} />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">产品中心</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                高性能功率器件产品系列，为您的应用提供最优解决方案
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
                    <input type="text" placeholder="搜索产品名称或描述..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>
                
                {/* Sort */}
                <div className="lg:w-48">
                  <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="name">按名称排序</option>
                    <option value="voltage">按电压排序</option>
                    <option value="current">按电流排序</option>
                  </select>
                </div>
                
                {/* Filter Toggle */}
                <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:w-auto">
                  <Filter className="h-4 w-4 mr-2" />
                  筛选
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
                找到 {sortedProducts.length} 个产品
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map(product => <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {categories.find(c => c.id === product.category)?.name}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                      
                      {/* Key Specifications */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => <div key={key} className="text-sm">
                            <span className="text-gray-500">{key}:</span>
                            <span className="font-medium text-gray-900 ml-1">{value}</span>
                          </div>)}
                      </div>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.features.slice(0, 3).map((feature, index) => <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>)}
                        {product.features.length > 3 && <span className="text-gray-500 text-xs">+{product.features.length - 3}</span>}
                      </div>
                      
                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button className="flex-1" onClick={() => handleProductClick(product.id)}>
                          <Eye className="h-4 w-4 mr-2" />
                          查看详情
                        </Button>
                        <Button variant="outline" onClick={() => handleDownload(product.datasheet)}>
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {/* No Results */}
            {sortedProducts.length === 0 && <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">未找到匹配的产品</h3>
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