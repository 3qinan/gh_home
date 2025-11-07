// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { ArrowUp } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CompanyOverview } from '@/components/CompanyOverview';
import { CompanyTimeline } from '@/components/CompanyTimeline';
import { ManagementTeam } from '@/components/ManagementTeam';
export default function About(props) {
  const {
    $w
  } = props;
  const [activeSection, setActiveSection] = useState('overview');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sections = [{
    id: 'overview',
    label: '企业概况',
    component: <CompanyOverview />
  }, {
    id: 'timeline',
    label: '发展历程',
    component: <CompanyTimeline />
  }, {
    id: 'team',
    label: '管理团队',
    component: <ManagementTeam />
  }];
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Update active section based on scroll position
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });

      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="about" onNavigate={handleNavigate} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">关于我们</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            江苏镓宏半导体有限公司 - 国际领先的氮化镓功率器件IDM企业
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3" onClick={() => scrollToSection('overview')}>
              了解更多
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3" onClick={() => handleNavigate('contact')}>
              联系我们
            </Button>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-40 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <nav className="flex space-x-8">
              {sections.map(section => <button key={section.id} onClick={() => scrollToSection(section.id)} className={`py-4 px-6 border-b-2 font-medium text-sm transition-colors ${activeSection === section.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                  {section.label}
                </button>)}
            </nav>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      {sections.map(section => <div key={section.id} id={section.id}>
          {section.component}
        </div>)}

      {/* Friendly Links */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">友情链接</h2>
            <p className="text-lg text-gray-600">合作伙伴与相关机构</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">徐州经济技术开发区</h3>
              <p className="text-sm text-gray-600">国家级开发区</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">江苏省半导体行业协会</h3>
              <p className="text-sm text-gray-600">行业组织</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">中国半导体行业协会</h3>
              <p className="text-sm text-gray-600">国家级协会</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">第三代半导体产业联盟</h3>
              <p className="text-sm text-gray-600">产业联盟</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50">
          <ArrowUp className="h-6 w-6" />
        </button>}

      <Footer />
    </div>;
}