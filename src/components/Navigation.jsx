// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button, LanguageSwitcher } from '@/components/ui';
// @ts-ignore;
import { Menu, X, ChevronDown } from 'lucide-react';

// @ts-ignore;
import { useLanguage } from '@/components/LanguageContext';
export const Navigation = ({
  currentPage,
  onNavigate
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    t
  } = useLanguage();
  const navItems = [{
    id: 'home',
    label: t('nav.home'),
    href: '/'
  }, {
    id: 'products',
    label: t('nav.products'),
    href: '/products'
  }, {
    id: 'solutions',
    label: t('nav.solutions'),
    href: '/solutions'
  }, {
    id: 'news',
    label: t('nav.news'),
    href: '/news'
  }, {
    id: 'about',
    label: t('nav.about'),
    href: '/about'
  }, {
    id: 'contact',
    label: t('nav.contact'),
    href: '/contact'
  }, {
    id: 'careers',
    label: t('nav.careers'),
    href: '/careers'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = pageId => {
    onNavigate(pageId);
    setIsMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => handleNavClick('home')} className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-gray-900">镓宏半导体</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => handleNavClick(item.id)} className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${currentPage === item.id ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}>
                {item.label}
              </button>)}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map(item => <button key={item.id} onClick={() => handleNavClick(item.id)} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${currentPage === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}>
                  {item.label}
                </button>)}
              
              {/* Mobile Language Switcher */}
              <div className="px-3 py-2 border-t border-gray-200 mt-2">
                <div className="text-sm text-gray-500 mb-2">{t('common.language')}</div>
                <LanguageSwitcher />
              </div>
            </div>
          </div>}
      </div>
    </header>;
};