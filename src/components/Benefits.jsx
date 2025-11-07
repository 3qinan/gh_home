// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Heart, Shield, GraduationCap, Home, Calendar, Gift } from 'lucide-react';

export function Benefits() {
  const benefitCategories = [{
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: '健康保障',
    benefits: ['全面的商业医疗保险', '年度健康体检', '健身房会员补贴', '心理健康咨询服务']
  }, {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: '福利待遇',
    benefits: ['具有竞争力的薪酬', '年终奖金和项目奖金', '股票期权激励', '五险一金足额缴纳']
  }, {
    icon: <GraduationCap className="h-8 w-8 text-green-500" />,
    title: '学习发展',
    benefits: ['专业培训计划', '学历提升补贴', '技术交流会议', '内部导师制度']
  }, {
    icon: <Home className="h-8 w-8 text-purple-500" />,
    title: '生活平衡',
    benefits: ['弹性工作制度', '带薪年假', '节日福利', '团队建设活动']
  }, {
    icon: <Calendar className="h-8 w-8 text-orange-500" />,
    title: '假期制度',
    benefits: ['法定节假日', '带薪病假', '婚假产假', '生日假']
  }, {
    icon: <Gift className="h-8 w-8 text-pink-500" />,
    title: '特色福利',
    benefits: ['员工生日礼物', '新婚贺礼', '生育贺礼', '节日礼品']
  }];
  return <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">福利待遇</h2>
          <p className="text-lg text-gray-600">完善的福利体系，关爱每一位员工</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitCategories.map((category, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.benefits.map((benefit, benefitIndex) => <li key={benefitIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {benefit}
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">加入我们，共创未来</h3>
            <p className="text-lg mb-6">
              我们提供有竞争力的薪酬福利和良好的职业发展平台
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100">年行业经验</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-blue-100">专业团队</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">30%</div>
                <div className="text-blue-100">年增长率</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}