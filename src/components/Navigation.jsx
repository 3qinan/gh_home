// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Menu, X, Globe, Search } from 'lucide-react';
// @ts-ignore;
import { Button } from '@/components/ui';

export function Navigation({
  currentPage,
  onNavigate
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('中文');
  const navItems = [{
    id: 'home',
    label: '首页'
  }, {
    id: 'products',
    label: '产品中心'
  }, {
    id: 'solutions',
    label: '技术方案'
  }, {
    id: 'news',
    label: '新闻资讯'
  }, {
    id: 'careers',
    label: '人才招聘'
  }, {
    id: 'about',
    label: '关于我们'
  }, {
    id: 'contact',
    label: '联系我们'
  }];
  const handleNavClick = pageId => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-xl font-bold text-blue-900">江苏镓宏半导体</h1>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map(item => <button key={item.id} onClick={() => handleNavClick(item.id)} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === item.id ? 'bg-gray-700 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'}`}>
                      {item.label}
                    </button>)}
                </div>
              </div>

              {/* Right side actions */}
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-700">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setCurrentLang(currentLang === '中文' ? 'EN' : '中文')} className="text-gray-700">
                  <Globe className="h-4 w-4 mr-1" />
                  {currentLang}
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navItems.map(item => <button key={item.id} onClick={() => handleNavClick(item.id)} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${currentPage === item.id ? 'bg-gray-700 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                    {item.label}
                  </button>)}
                <div className="flex items-center space-x-4 px-3 py-2 border-t mt-2 pt-4">
                  <Button variant="ghost" size="sm" className="text-gray-700">
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setCurrentLang(currentLang === '中文' ? 'EN' : '中文')} className="text-gray-700">
                    <Globe className="h-4 w-4 mr-1" />
                    {currentLang}
                  </Button>
                </div>
              </div>
            </div>}
        </nav>;
}