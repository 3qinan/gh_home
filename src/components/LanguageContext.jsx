// @ts-ignore;
import React, { createContext, useContext, useState, useEffect } from 'react';

// 语言上下文
const LanguageContext = createContext();

// 语言资源
const translations = {
  zh: {
    // 导航相关
    nav: {
      home: '首页',
      products: '产品中心',
      solutions: '解决方案',
      news: '新闻资讯',
      about: '关于我们',
      contact: '联系我们',
      careers: '招贤纳士'
    },
    // 首页
    home: {
      title: '江苏镓宏半导体有限公司',
      subtitle: '国际领先的氮化镓功率器件IDM企业',
      description: '专注于氮化镓(GaN)和碳化硅(SiC)功率器件的研发、生产与销售',
      learnMore: '了解更多',
      contactUs: '联系我们',
      products: {
        title: '核心产品',
        subtitle: '高性能功率器件解决方案',
        viewAll: '查看全部'
      },
      solutions: {
        title: '应用领域',
        subtitle: '为多个行业提供专业解决方案',
        viewAll: '查看全部'
      },
      news: {
        title: '新闻资讯',
        subtitle: '了解最新的行业动态和公司新闻',
        viewAll: '查看全部'
      },
      advantages: {
        title: '我们的优势',
        items: {
          technology: '技术领先',
          quality: '品质保证',
          service: '专业服务',
          innovation: '持续创新'
        }
      }
    },
    // 产品中心
    products: {
      title: '产品中心',
      subtitle: '高性能功率器件产品系列',
      categories: {
        all: '全部产品',
        gan: '氮化镓器件',
        sic: '碳化硅器件',
        modules: '功率模块'
      },
      viewDetails: '查看详情',
      downloadDatasheet: '下载规格书'
    },
    // 解决方案
    solutions: {
      title: '解决方案',
      subtitle: '为不同行业提供专业的功率器件解决方案',
      learnMore: '了解更多'
    },
    // 新闻资讯
    news: {
      title: '新闻资讯',
      subtitle: '了解最新的行业动态和公司新闻',
      categories: {
        all: '全部',
        company: '公司动态',
        industry: '行业资讯',
        product: '产品发布'
      },
      readMore: '阅读更多',
      viewDetails: '查看详情'
    },
    // 关于我们
    about: {
      title: '关于我们',
      subtitle: '江苏镓宏半导体有限公司 - 国际领先的氮化镓功率器件IDM企业',
      learnMore: '了解更多',
      contactUs: '联系我们',
      overview: {
        title: '企业概况',
        description: '江苏镓宏半导体有限公司成立于2020年，是一家专注于氮化镓(GaN)和碳化硅(SiC)功率器件研发、生产与销售的高新技术企业。公司拥有完整的产业链布局，从材料外延、器件设计到晶圆制造、封装测试，具备IDM一体化生产能力。'
      },
      timeline: {
        title: '发展历程'
      },
      team: {
        title: '管理团队'
      },
      links: {
        title: '友情链接',
        subtitle: '合作伙伴与相关机构'
      }
    },
    // 联系我们
    contact: {
      title: '联系我们',
      subtitle: '欢迎与我们取得联系，我们将竭诚为您提供优质的服务',
      contactInfo: {
        title: '联系方式',
        phone: '电话',
        email: '邮箱',
        address: '地址',
        workingHours: '工作时间'
      },
      quickContact: {
        title: '快速联系',
        name: '姓名',
        phone: '电话',
        email: '邮箱',
        message: '留言内容',
        sendMessage: '发送消息'
      },
      map: {
        viewOnline: '在线地图查看'
      }
    },
    // 招贤纳士
    careers: {
      title: '招贤纳士',
      subtitle: '加入镓宏半导体，共创美好未来',
      culture: {
        title: '企业文化',
        subtitle: '创新、协作、卓越、责任'
      },
      benefits: {
        title: '福利待遇',
        subtitle: '我们为员工提供全面的福利保障'
      },
      positions: {
        title: '热招职位',
        location: '工作地点',
        type: '职位类型',
        experience: '经验要求',
        education: '学历要求',
        apply: '申请职位'
      }
    },
    // 通用
    common: {
      language: 'Language',
      copyright: '© 2024 江苏镓宏半导体有限公司 版权所有',
      allRightsReserved: 'All Rights Reserved',
      privacy: '隐私政策',
      terms: '服务条款',
      backToTop: '返回顶部'
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      products: 'Products',
      solutions: 'Solutions',
      news: 'News',
      about: 'About',
      contact: 'Contact',
      careers: 'Careers'
    },
    // Home
    home: {
      title: 'Jiangsu Gahong Semiconductor Co., Ltd.',
      subtitle: 'International Leading GaN Power Device IDM Enterprise',
      description: 'Focus on R&D, production and sales of Gallium Nitride (GaN) and Silicon Carbide (SiC) power devices',
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      products: {
        title: 'Core Products',
        subtitle: 'High-performance power device solutions',
        viewAll: 'View All'
      },
      solutions: {
        title: 'Applications',
        subtitle: 'Professional solutions for multiple industries',
        viewAll: 'View All'
      },
      news: {
        title: 'News & Updates',
        subtitle: 'Latest industry trends and company news',
        viewAll: 'View All'
      },
      advantages: {
        title: 'Our Advantages',
        items: {
          technology: 'Technology Leadership',
          quality: 'Quality Assurance',
          service: 'Professional Service',
          innovation: 'Continuous Innovation'
        }
      }
    },
    // Products
    products: {
      title: 'Products',
      subtitle: 'High-performance power device product series',
      categories: {
        all: 'All Products',
        gan: 'GaN Devices',
        sic: 'SiC Devices',
        modules: 'Power Modules'
      },
      viewDetails: 'View Details',
      downloadDatasheet: 'Download Datasheet'
    },
    // Solutions
    solutions: {
      title: 'Solutions',
      subtitle: 'Professional power device solutions for different industries',
      learnMore: 'Learn More'
    },
    // News
    news: {
      title: 'News & Updates',
      subtitle: 'Latest industry trends and company news',
      categories: {
        all: 'All',
        company: 'Company News',
        industry: 'Industry News',
        product: 'Product Releases'
      },
      readMore: 'Read More',
      viewDetails: 'View Details'
    },
    // About
    about: {
      title: 'About Us',
      subtitle: 'Jiangsu Gahong Semiconductor - International Leading GaN Power Device IDM Enterprise',
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      overview: {
        title: 'Company Overview',
        description: 'Jiangsu Gahong Semiconductor Co., Ltd. was established in 2020 as a high-tech enterprise focusing on R&D, production and sales of Gallium Nitride (GaN) and Silicon Carbide (SiC) power devices. The company has a complete industrial chain layout, from material epitaxy, device design to wafer manufacturing, packaging and testing, with IDM integrated production capability.'
      },
      timeline: {
        title: 'Development History'
      },
      team: {
        title: 'Management Team'
      },
      links: {
        title: 'Useful Links',
        subtitle: 'Partners and Related Organizations'
      }
    },
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'Welcome to contact us, we will provide you with quality services',
      contactInfo: {
        title: 'Contact Information',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        workingHours: 'Working Hours'
      },
      quickContact: {
        title: 'Quick Contact',
        name: 'Name',
        phone: 'Phone',
        email: 'Email',
        message: 'Message',
        sendMessage: 'Send Message'
      },
      map: {
        viewOnline: 'View Online Map'
      }
    },
    // Careers
    careers: {
      title: 'Careers',
      subtitle: 'Join Gahong Semiconductor, Create a Better Future',
      culture: {
        title: 'Corporate Culture',
        subtitle: 'Innovation, Collaboration, Excellence, Responsibility'
      },
      benefits: {
        title: 'Benefits',
        subtitle: 'We provide comprehensive benefits for employees'
      },
      positions: {
        title: 'Open Positions',
        location: 'Location',
        type: 'Position Type',
        experience: 'Experience',
        education: 'Education',
        apply: 'Apply Now'
      }
    },
    // Common
    common: {
      language: '语言',
      copyright: '© 2024 Jiangsu Gahong Semiconductor Co., Ltd. All Rights Reserved',
      allRightsReserved: 'All Rights Reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      backToTop: 'Back to Top'
    }
  }
};

// 语言提供者组件
export function LanguageProvider({
  children
}) {
  const [language, setLanguage] = useState(() => {
    // 从localStorage获取语言设置，默认为中文
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'zh';
  });

  // 切换语言
  const changeLanguage = lang => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // 获取翻译文本
  const t = key => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // 如果找不到翻译，尝试使用中文作为默认
        value = translations.zh;
        for (const k of keys) {
          if (value && value[k]) {
            value = value[k];
          } else {
            return key; // 如果都找不到，返回key
          }
        }
        break;
      }
    }
    return value || key;
  };
  return <LanguageContext.Provider value={{
    language,
    changeLanguage,
    t
  }}>
      {children}
    </LanguageContext.Provider>;
}

// 使用语言上下文的Hook
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}