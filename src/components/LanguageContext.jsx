// @ts-ignore;
import React, { createContext, useContext, useState, useEffect } from 'react';

// @ts-ignore;
import { t, supportedLanguages } from '@/lib/i18n';
const LanguageContext = createContext();
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
export const LanguageProvider = ({
  children
}) => {
  // 从localStorage获取保存的语言设置，默认为中文
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      return saved || 'zh';
    }
    return 'zh';
  });

  // 切换语言
  const changeLanguage = langCode => {
    if (supportedLanguages.find(lang => lang.code === langCode)) {
      setCurrentLanguage(langCode);
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', langCode);
      }
    }
  };

  // 翻译函数
  const translate = key => {
    return t(key, currentLanguage);
  };

  // 获取当前语言信息
  const getCurrentLanguageInfo = () => {
    return supportedLanguages.find(lang => lang.code === currentLanguage) || supportedLanguages[0];
  };

  // 监听语言变化，更新HTML lang属性
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = currentLanguage;
    }
  }, [currentLanguage]);
  const value = {
    currentLanguage,
    changeLanguage,
    translate,
    t: translate,
    supportedLanguages,
    getCurrentLanguageInfo
  };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};