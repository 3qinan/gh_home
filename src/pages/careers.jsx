// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { MapPin, Briefcase, Clock, DollarSign, Users, Heart, Shield, Award, Send } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CompanyCulture } from '@/components/CompanyCulture';
import { Benefits } from '@/components/Benefits';
import { PositionCard } from '@/components/PositionCard';
import { LanguageProvider } from '@/components/LanguageContext';
export default function Careers(props) {
  const {
    $w
  } = props;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    message: ''
  });
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const categories = [{
    id: 'all',
    name: '全部职位',
    count: 8
  }, {
    id: 'technical',
    name: '技术类',
    count: 3
  }, {
    id: 'management',
    name: '管理类',
    count: 2
  }, {
    id: 'marketing',
    name: '市场类',
    count: 2
  }, {
    id: 'operations',
    name: '运营类',
    count: 1
  }];
  const positions = [{
    id: '1',
    title: '高级器件工程师',
    category: 'technical',
    location: '江苏徐州',
    type: '全职',
    experience: '5-10年',
    education: '硕士及以上',
    salary: '25-40K',
    description: '负责GaN/SiC功率器件的研发和设计，带领团队完成新产品开发。',
    requirements: ['微电子或相关专业', '5年以上功率器件研发经验', '熟悉GaN/SiC器件工艺', '具备团队管理经验'],
    benefits: ['股票期权', '弹性工作', '培训机会', '健康体检']
  }, {
    id: '2',
    title: '工艺工程师',
    category: 'technical',
    location: '江苏徐州',
    type: '全职',
    experience: '3-5年',
    education: '本科及以上',
    salary: '15-25K',
    description: '负责功率器件工艺开发和优化，提升产品良率和性能。',
    requirements: ['材料或微电子专业', '3年以上半导体工艺经验', '熟悉功率器件制造流程', '具备问题分析能力'],
    benefits: ['股票期权', '弹性工作', '培训机会', '健康体检']
  }, {
    id: '3',
    title: '测试工程师',
    category: 'technical',
    location: '江苏徐州',
    type: '全职',
    experience: '2-5年',
    education: '本科及以上',
    salary: '12-20K',
    description: '负责功率器件的测试方案设计和测试执行，确保产品质量。',
    requirements: ['电子或相关专业', '2年以上测试经验', '熟悉功率器件测试方法', '具备编程能力'],
    benefits: ['股票期权', '弹性工作', '培训机会', '健康体检']
  }, {
    id: '4',
    title: '产品经理',
    category: 'management',
    location: '江苏徐州',
    type: '全职',
    experience: '5-8年',
    education: '本科及以上',
    salary: '20-35K',
    description: '负责功率器件产品规划和管理，推动产品市场化。',
    requirements: ['微电子或相关专业', '5年以上产品管理经验', '熟悉功率器件市场', '具备市场分析能力'],
    benefits: ['股票期权', '弹性工作', '培训机会', '健康体检']
  }, {
    id: '5',
    title: '销售总监',
    category: 'management',
    location: '上海/深圳',
    type: '全职',
    experience: '8年以上',
    education: '本科及以上',
    salary: '30-50K',
    description: '负责销售团队管理和市场拓展，完成销售目标。',
    requirements: ['市场营销或相关专业', '8年以上销售管理经验', '熟悉半导体行业', '具备团队管理能力'],
    benefits: ['股票期权', '弹性工作', '培训机会', '健康体检']
  }, {
    id: '6',
    title: '市场专员',
    category: 'marketing',
    location: '江苏徐州',
    type: '全职',
    experience: '2-4年',
    education: '本科及以上',
    salary: '10-18K',
    description: '负责市场调研、品牌推广和营销活动策划。',
    requirements: ['市场营销或相关专业', '2年以上市场工作经验', '具备良好的沟通能力', '熟悉数字营销'],
    benefits: ['股票期权', '弹性工作', '培训机会', '健康体检']
  }, {
    id: '7',
    title: '技术支持工程师',
    category: 'marketing',
    location: '江苏徐州',
    type: '全职',
    experience: '2-5年',
    education: '本科及以上',
    salary: '12-20K',
    description: '为客户提供技术支持和解决方案，维护客户关系。',
    requirements: ['电子或相关专业', '2年以上技术支持经验', '熟悉功率器件应用', '具备良好的服务意识'],
    benefits: ['股票期权', '弹性工作', '培训机会', '健康体检']
  }, {
    id: '8',
    title: '质量工程师',
    category: 'operations',
    location: '江苏徐州',
    type: '全职',
    experience: '3-6年',
    education: '本科及以上',
    salary: '15-25K',
    description: '负责产品质量管理和质量体系维护，确保产品符合标准。',
    requirements: ['质量管理或相关专业', '3年以上质量管理经验', '熟悉ISO9001体系', '具备问题解决能力'],
    benefits: ['股票期权', '弹性工作', '培训机会', '健康体检']
  }];
  const filteredPositions = selectedCategory === 'all' ? positions : positions.filter(pos => pos.category === selectedCategory);
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('提交申请:', formData);
    // 这里可以添加提交逻辑
  };
  return <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation currentPage="careers" onNavigate={handleNavigate} />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">招贤纳士</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                加入镓宏半导体，与行业精英一起推动功率半导体技术发展
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4">
                  查看职位
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4">
                  了解公司
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Company Culture */}
        <CompanyCulture />

        {/* Benefits */}
        <Benefits />

        {/* Positions Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">热招职位</h2>
              <p className="text-lg text-gray-600">我们正在寻找有激情、有才华的你</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map(category => <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {category.name} ({category.count})
                </button>)}
            </div>

            {/* Positions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPositions.map(position => <PositionCard key={position.id} position={position} onApply={() => {
              // 滚动到申请表单
              document.getElementById('application-form')?.scrollIntoView({
                behavior: 'smooth'
              });
              // 预填充职位信息
              setFormData(prev => ({
                ...prev,
                position: position.title
              }));
            }} />)}
            </div>

            {/* No Positions */}
            {filteredPositions.length === 0 && <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Briefcase className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">暂无相关职位</h3>
                <p className="text-gray-600">请查看其他职位类别或稍后再试</p>
              </div>}
          </div>
        </div>

        {/* Application Form */}
        <div id="application-form" className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">快速申请</h2>
              <p className="text-lg text-gray-600">如果没有合适的职位，也可以提交您的简历</p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入您的姓名" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        邮箱 <span className="text-red-500">*</span>
                      </label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入您的邮箱" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        电话 <span className="text-red-500">*</span>
                      </label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入您的电话" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        意向职位
                      </label>
                      <input type="text" name="position" value={formData.position} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入意向职位" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        工作经验
                      </label>
                      <select name="experience" value={formData.experience} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">请选择</option>
                        <option value="应届生">应届生</option>
                        <option value="1-3年">1-3年</option>
                        <option value="3-5年">3-5年</option>
                        <option value="5-10年">5-10年</option>
                        <option value="10年以上">10年以上</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        学历
                      </label>
                      <select name="education" value={formData.education} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">请选择</option>
                        <option value="大专">大专</option>
                        <option value="本科">本科</option>
                        <option value="硕士">硕士</option>
                        <option value="博士">博士</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      个人介绍
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请简单介绍您的背景和优势"></textarea>
                  </div>

                  <div className="text-center">
                    <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                      <Send className="h-4 w-4 mr-2" />
                      提交申请
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </LanguageProvider>;
}