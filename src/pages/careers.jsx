// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Briefcase, Filter, MapPin } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PositionCard } from '@/components/PositionCard';
import { CompanyCulture } from '@/components/CompanyCulture';
import { Benefits } from '@/components/Benefits';
export default function Careers(props) {
  const {
    $w
  } = props;
  const [activeTab, setActiveTab] = useState('positions');
  const [selectedDepartment, setSelectedDepartment] = useState('全部');
  const [selectedLocation, setSelectedLocation] = useState('全部');
  const handleNavigate = (pageId, params = {}) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  const positions = [{
    id: 1,
    title: '高级射频工程师',
    department: '研发部',
    location: '苏州',
    type: '全职',
    experience: '5-10年',
    education: '硕士及以上',
    salary: '25-40K',
    description: '负责射频功率放大器的设计、开发和测试工作',
    requirements: ['电子工程、微电子等相关专业硕士及以上学历', '5年以上射频电路设计经验', '熟悉射频测试设备和测试方法', '有GaN/ GaAs射频器件设计经验者优先'],
    responsibilities: ['负责射频功率放大器的设计和仿真', '制定测试方案并完成产品测试', '与团队协作完成产品开发', '编写技术文档和专利申请'],
    posted: '2024-03-10'
  }, {
    id: 2,
    title: '功率器件工艺工程师',
    department: '工艺部',
    location: '苏州',
    type: '全职',
    experience: '3-8年',
    education: '本科及以上',
    salary: '18-30K',
    description: '负责功率半导体器件的工艺开发和优化工作',
    requirements: ['微电子、材料科学等相关专业', '3年以上半导体工艺经验', '熟悉GaN、SiC器件工艺', '有晶圆制造经验者优先'],
    responsibilities: ['负责新工艺的开发和验证', '优化现有工艺流程', '解决工艺过程中的技术问题', '制定工艺规范和标准'],
    posted: '2024-03-08'
  }, {
    id: 3,
    title: '产品经理',
    department: '产品部',
    location: '苏州',
    type: '全职',
    experience: '5-8年',
    education: '本科及以上',
    salary: '20-35K',
    description: '负责功率半导体产品规划和管理',
    requirements: ['电子工程、市场营销等相关专业', '5年以上半导体产品管理经验', '熟悉功率半导体市场', '具备良好的沟通协调能力'],
    responsibilities: ['制定产品规划和路线图', '进行市场调研和竞品分析', '协调研发、销售等团队', '负责产品生命周期管理'],
    posted: '2024-03-05'
  }, {
    id: 4,
    title: '销售工程师',
    department: '销售部',
    location: '上海',
    type: '全职',
    experience: '3-6年',
    education: '本科及以上',
    salary: '15-25K',
    description: '负责功率半导体产品的销售工作',
    requirements: ['电子工程、市场营销等相关专业', '3年以上半导体销售经验', '熟悉功率半导体产品', '具备良好的客户沟通能力'],
    responsibilities: ['开发新客户和维护老客户', '完成销售目标', '提供技术支持和解决方案', '收集市场反馈信息'],
    posted: '2024-03-01'
  }];
  const departments = ['全部', '研发部', '工艺部', '产品部', '销售部'];
  const locations = ['全部', '苏州', '上海', '北京', '深圳'];
  const filteredPositions = positions.filter(position => {
    const matchesDepartment = selectedDepartment === '全部' || position.department === selectedDepartment;
    const matchesLocation = selectedLocation === '全部' || position.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });
  const handleViewDetails = position => {
    // 这里可以跳转到职位详情页面或显示详情模态框
    console.log('查看职位详情:', position);
  };
  return <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="careers" onNavigate={handleNavigate} />
      
      {/* Header */}
      <div className="bg-blue-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">加入镓宏半导体</h1>
          <p className="text-xl mb-8">与我们一起，推动半导体技术的创新发展</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8">
              <Briefcase className="h-5 w-5 mr-2" />
              查看职位
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8">
              了解文化
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-8">
              <button onClick={() => setActiveTab('positions')} className={`py-4 px-6 border-b-2 font-medium text-sm transition-colors ${activeTab === 'positions' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                招聘职位
              </button>
              <button onClick={() => setActiveTab('culture')} className={`py-4 px-6 border-b-2 font-medium text-sm transition-colors ${activeTab === 'culture' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                企业文化
              </button>
              <button onClick={() => setActiveTab('benefits')} className={`py-4 px-6 border-b-2 font-medium text-sm transition-colors ${activeTab === 'benefits' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                福利待遇
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Positions Tab */}
      {activeTab === 'positions' && <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Filter className="h-5 w-5 text-gray-500" />
                  <h3 className="font-medium text-gray-900">筛选条件</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      部门
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {departments.map(dept => <Button key={dept} variant={selectedDepartment === dept ? "default" : "outline"} size="sm" onClick={() => setSelectedDepartment(dept)} className={selectedDepartment === dept ? "bg-blue-600 hover:bg-blue-700" : ""}>
                          {dept}
                        </Button>)}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      工作地点
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {locations.map(location => <Button key={location} variant={selectedLocation === location ? "default" : "outline"} size="sm" onClick={() => setSelectedLocation(location)} className={selectedLocation === location ? "bg-blue-600 hover:bg-blue-700" : ""}>
                          {location}
                        </Button>)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Positions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPositions.map(position => <PositionCard key={position.id} position={position} onViewDetails={handleViewDetails} />)}
            </div>

            {filteredPositions.length === 0 && <div className="text-center py-12">
                <p className="text-gray-500 text-lg">暂无匹配的职位</p>
              </div>}
          </div>
        </div>}

      {/* Culture Tab */}
      {activeTab === 'culture' && <CompanyCulture />}

      {/* Benefits Tab */}
      {activeTab === 'benefits' && <Benefits />}

      <Footer />
    </div>;
}