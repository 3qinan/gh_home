// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Menu, X, ChevronDown } from 'lucide-react';

import { useLanguage } from '@/components/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
export function Navigation({
  currentPage,
  onNavigate
}) {
  const {
    t
  } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const navItems = [{
    id: 'home',
    label: t('nav.home'),
    href: 'home'
  }, {
    id: 'products',
    label: t('nav.products'),
    href: 'products',
    dropdown: [{
      label: '氮化镓器件',
      href: 'products?category=gan'
    }, {
      label: '碳化硅器件',
      href: 'products?category=sic'
    }, {
      label: '功率模块',
      href: 'products?category=modules'
    }]
  }, {
    id: 'solutions',
    label: t('nav.solutions'),
    href: 'solutions'
  }, {
    id: 'news',
    label: t('nav.news'),
    href: 'news'
  }, {
    id: 'about',
    label: t('nav.about'),
    href: 'about'
  }, {
    id: 'contact',
    label: t('nav.contact'),
    href: 'contact'
  }, {
    id: 'careers',
    label: t('nav.careers'),
    href: 'careers'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (href, e) => {
    if (href.includes('?')) {
      // 处理带参数的导航
      const [page, params] = href.split('?');
      const paramObj = {};
      params.split('&').forEach(param => {
        const [key, value] = param.split('=');
        paramObj[key] = value;
      });
      onNavigate(page, paramObj);
    } else {
      onNavigate(href);
    }
    setIsMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">镓</span>
              </div>
              <span className="text-xl font-bold text-gray-900">镓宏半导体</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => <div key={item.id} className="relative group">
                <button onClick={e => handleNavClick(item.href, e)} className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium ${currentPage === item.id ? 'text-blue-600' : ''}`}>
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </button>
                
                {/* Dropdown Menu */}
                {item.dropdown && <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem, index) => <button key={index} onClick={e => handleNavClick(dropdownItem.href, e)} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                          {dropdownItem.label}
                        </button>)}
                    </div>
                  </div>}
              </div>)}
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg text-gray-700 hover:bg-gray-100">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => <div key={item.id}>
                  <button onClick={() => {
              if (item.dropdown) {
                setMobileDropdown(mobileDropdown === item.id ? null : item.id);
              } else {
                handleNavClick(item.href);
              }
            }} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${currentPage === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}>
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {item.dropdown && <ChevronDown className={`h-4 w-4 transform transition-transform ${mobileDropdown === item.id ? 'rotate-180' : ''}`} />}
                    </div>
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && mobileDropdown === item.id && <div className="pl-6 pr-3 py-2 space-y-1">
                      {item.dropdown.map((dropdownItem, index) => <button key={index} onClick={e => handleNavClick(dropdownItem.href, e)} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                          {dropdownItem.label}
                        </button>)}
                    </div>}
                </div>)}
            </div>
          </div>}
      </div>
    </header>;
}