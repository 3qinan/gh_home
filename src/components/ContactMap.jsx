// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactMap() {
  const contactInfo = {
    phone: '0516-83997988',
    email: 'sales@ganhonor.com',
    address: '江苏省徐州市徐州经济技术开发区徐海路99号',
    workingHours: '周一至周五 9:00-18:00'
  };
  return <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">联系我们</h2>
          <p className="text-lg text-gray-600">欢迎与我们取得联系</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">联系方式</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">电话</h4>
                      <p className="text-gray-600 text-lg">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">邮箱</h4>
                      <p className="text-gray-600 text-lg">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">地址</h4>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">工作时间</h4>
                      <p className="text-gray-600">{contactInfo.workingHours}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-6">快速联系</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      姓名
                    </label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入您的姓名" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      电话
                    </label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入您的电话" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      邮箱
                    </label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入您的邮箱" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      留言
                    </label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入您的留言内容"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    发送消息
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div>
            <Card className="h-full">
              <CardContent className="p-0">
                <div className="relative h-96 lg:h-full min-h-[500px]">
                  {/* Baidu Map Placeholder */}
                  <div className="w-full h-full bg-gray-200 relative overflow-hidden rounded-lg">
                    <img src="https://picsum.photos/seed/map-location/800/600.jpg" alt="地图位置" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <MapPin className="h-12 w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">江苏镓宏半导体有限公司</h3>
                        <p className="text-lg">江苏省徐州市徐州经济技术开发区徐海路99号</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
}