// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Globe } from 'lucide-react';

import { useLanguage } from '@/components/LanguageContext';
export function LanguageSwitcher() {
  const {
    language,
    changeLanguage,
    t
  } = useLanguage();
  const toggleLanguage = () => {
    changeLanguage(language === 'zh' ? 'en' : 'zh');
  };
  return <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
      <Globe className="h-4 w-4" />
      <span className="font-medium">{t('common.language')}</span>
      <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">
        {language === 'zh' ? '中' : 'EN'}
      </span>
    </Button>;
}