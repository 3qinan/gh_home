// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Globe, ChevronDown } from 'lucide-react';

// @ts-ignore;
import { useLanguage } from '@/components/LanguageContext';
export const LanguageSwitcher = () => {
  const {
    currentLanguage,
    changeLanguage,
    supportedLanguages,
    getCurrentLanguageInfo
  } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = getCurrentLanguageInfo();
  const handleLanguageChange = langCode => {
    changeLanguage(langCode);
    setIsOpen(false);
  };
  return <div className="relative">
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLang.flag} {currentLang.name}</span>
        <span className="sm:hidden">{currentLang.flag}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            {supportedLanguages.map(lang => <button key={lang.code} onClick={() => handleLanguageChange(lang.code)} className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 ${currentLanguage === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}>
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
                {currentLanguage === lang.code && <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>}
              </button>)}
          </div>
        </div>}

      {/* 点击外部关闭下拉菜单 */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>;
};