// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Phone, Mail, MapPin, Clock, Send, ExternalLink } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
export default function Contact(props) {
  const {
    $w
  } = props;
  const contactInfo = {
    phone: '0516-83997988',
    email: 'sales@ganhonor.com',
    address: '江苏省徐州市徐州经济技术开发区徐海路99号',
    workingHours: '周一至周五 9:00-18:00'
  };
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    // 处理表单提交
    console.log('表单提交');
  };
  const openMap = () => {
    // 打开百度地图查看位置
    const mapUrl = `https://map.baidu.com/search/%E6%B1%9F%E8%8B%8F%E7%9C%81%E5%BE%90%E5%B7%9E%E5%B8%82%E5%BE%90%E5%B7%9E%E7%BB%8F%E6%B5%8E%E6%8A%80%E6%9C%AF%E5%BC%80%E5%8F%91%E5%8C%BA%E5%BE%90%E6%B5%B7%E8%B7%AF99%E5%8F%B7`;
    window.open(mapUrl, '_blank');
  };
  return <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="contact" onNavigate={handleNavigate} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">联系我们</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            欢迎与我们取得联系，我们将竭诚为您提供优质的服务
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">联系方式</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">电话</h3>
                        <p className="text-gray-600 text-lg">{contactInfo.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">邮箱</h3>
                        <p className="text-gray-600 text-lg">{contactInfo.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">地址</h3>
                        <p className="text-gray-600">{contactInfo.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">工作时间</h3>
                        <p className="text-gray-600">{contactInfo.workingHours}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">快速联系</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入您的姓名" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        电话 <span className="text-red-500">*</span>
                      </label>
                      <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入您的电话" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        邮箱 <span className="text-red-500">*</span>
                      </label>
                      <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入您的邮箱" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        留言内容 <span className="text-red-500">*</span>
                      </label>
                      <textarea required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入您的留言内容"></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                      <Send className="h-4 w-4 mr-2" />
                      发送消息
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <div>
              <Card className="h-full">
                <CardContent className="p-0">
                  <div className="relative h-full min-h-[800px]">
                    {/* Map Placeholder with Click to Open */}
                    <div className="w-full h-full bg-gray-100 relative overflow-hidden rounded-lg">
                      <img src="https://picsum.photos/seed/company-location-map/800/800.jpg" alt="公司位置地图" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-blue-900 bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <MapPin className="h-16 w-16 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold mb-2">江苏镓宏半导体有限公司</h3>
                          <p className="text-lg mb-6">{contactInfo.address}</p>
                          <Button onClick={openMap} className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            在线地图查看
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>;
}