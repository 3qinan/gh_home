// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { ChevronLeft, ChevronRight, Download, Share2, Mail, Phone } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
export default function ProductDetail(props) {
  const {
    $w,
    page
  } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 安全获取产品ID
  const productId = page?.dataset?.params?.productId || '1';
  const productData = {
    1: {
      name: 'GHN1000 GaN HEMT',
      category: '功率器件',
      description: '1000V氮化镓功率器件，具有极低的导通电阻和开关损耗',
      images: ['https://picsum.photos/seed/gan-hemt1/600/400.jpg', 'https://picsum.photos/seed/gan-hemt2/600/400.jpg', 'https://picsum.photos/seed/gan-hemt3/600/400.jpg', 'https://picsum.photos/seed/gan-hemt4/600/400.jpg'],
      features: ['高效率', '低损耗', '高频工作', '温度稳定性好'],
      specifications: {
        '最大电压': '1000V',
        '最大电流': '30A',
        '导通电阻': '25mΩ',
        '开关频率': '1MHz',
        '工作温度': '-55°C to 150°C',
        '封装': 'TO-247'
      },
      applications: ['服务器电源', '工业电源', '新能源汽车充电桩', '太阳能逆变器'],
      datasheet: 'GHN1000-datasheet.pdf'
    },
    2: {
      name: 'SIC1200 SiC MOSFET',
      category: '功率器件',
      description: '1200V碳化硅MOSFET，适用于高功率应用',
      images: ['https://picsum.photos/seed/sic-mosfet1/600/400.jpg', 'https://picsum.photos/seed/sic-mosfet2/600/400.jpg', 'https://picsum.photos/seed/sic-mosfet3/600/400.jpg'],
      features: ['高电压', '低导通电阻', '快速开关', '高温工作'],
      specifications: {
        '最大电压': '1200V',
        '最大电流': '40A',
        '导通电阻': '40mΩ',
        '开关频率': '500kHz',
        '工作温度': '-55°C to 175°C',
        '封装': 'TO-247'
      },
      applications: ['电动汽车', '工业变频器', '轨道交通', '智能电网'],
      datasheet: 'SIC1200-datasheet.pdf'
    }
  };
  const product = productData[productId] || productData[1];
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % product.images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + product.images.length) % product.images.length);
  };
  const handleDownload = () => {
    // 模拟下载规格书
    console.log('下载规格书:', product.datasheet);
  };
  const handleShare = () => {
    // 模拟分享功能
    console.log('分享产品:', product.name);
  };
  return <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="products" onNavigate={handleNavigate} />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <button onClick={() => handleNavigate('products')} className="text-gray-500 hover:text-gray-700">
                    产品中心
                  </button>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-900">{product.name}</span>
                </li>
              </ol>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative">
                <img src={product.images[currentImageIndex]} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
                <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-2 mt-4">
                {product.images.map((image, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`flex-1 h-20 object-cover rounded border-2 transition-colors ${index === currentImageIndex ? 'border-blue-600' : 'border-gray-200'}`}>
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover rounded" />
                  </button>)}
              </div>
            </div>

            {/* Product Information */}
            <div>
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                
                <div className="flex gap-4 mb-6">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={handleDownload}>
                    <Download className="h-4 w-4 mr-2" />
                    下载规格书
                  </Button>
                  <Button variant="outline" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Features */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">主要特性</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, index) => <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Specifications */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">技术参数</h3>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">{key}</span>
                        <span className="font-medium text-gray-900">{value}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Applications */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">应用场景</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.applications.map((application, index) => <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{application}</span>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="mt-8 bg-blue-50">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">需要技术支持？</h3>
                <p className="text-gray-600 mb-6">
                  我们的专业团队随时为您提供技术支持和解决方案咨询
                </p>
                <div className="flex justify-center gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Mail className="h-4 w-4 mr-2" />
                    联系我们
                  </Button>
                  <Button variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    技术咨询
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>;
}