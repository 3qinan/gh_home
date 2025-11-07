// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Award, Heart, Users, Target } from 'lucide-react';

export function CompanyCulture() {
  const cultureItems = [{
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: '创新驱动',
    description: '鼓励技术创新，持续投入研发，推动半导体技术进步'
  }, {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: '团队协作',
    description: '倡导开放沟通，重视团队合作，共同实现目标'
  }, {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: '追求卓越',
    description: '坚持高标准，精益求精，为客户提供优质产品'
  }, {
    icon: <Heart className="h-8 w-8 text-blue-600" />,
    title: '员工关怀',
    description: '关注员工成长，提供发展平台，实现共同发展'
  }];
  return <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">企业文化</h2>
          <p className="text-lg text-gray-600">我们的价值观和工作理念</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultureItems.map((item, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">工作环境</h3>
              <p className="text-gray-600 mb-4">
                我们提供现代化的办公环境，配备先进的研发设备和实验室。
                开放式办公空间促进团队协作，休闲区域为员工提供放松场所。
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  现代化办公设施
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  先进的研发实验室
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  开放式协作空间
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  员工休闲活动区
                </li>
              </ul>
            </div>
            <div>
              <img src="https://picsum.photos/seed/office-environment/600/400.jpg" alt="办公环境" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>;
}