// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold mb-4">江苏镓宏半导体有限公司</h3>
                <p className="text-gray-300 mb-4">
                  专业的半导体技术公司，致力于功率半导体、射频器件等领域的创新研发，
                  为全球客户提供优质的半导体产品和技术解决方案。
                </p>
                <div className="flex space-x-4">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">快速链接</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">产品中心</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">技术方案</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">新闻资讯</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">人才招聘</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">联系我们</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-300">+86 512-12345678</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-300">info@gahong.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-300">江苏省苏州市工业园区</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 江苏镓宏半导体有限公司. All rights reserved.
              </p>
            </div>
          </div>
        </footer>;
}