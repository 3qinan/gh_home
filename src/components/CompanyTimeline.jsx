// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Calendar, Trophy, Users, Building } from 'lucide-react';

export function CompanyTimeline() {
  const milestones = [{
    year: '2021',
    title: '公司成立',
    description: '江苏镓宏半导体有限公司(原徐州金沙江半导体有限公司)正式成立',
    icon: <Building className="h-6 w-6 text-blue-600" />,
    type: 'founding'
  }, {
    year: '2021',
    title: '技术团队组建',
    description: '汇集氮化镓领域领军人物，组建核心技术团队',
    icon: <Users className="h-6 w-6 text-blue-600" />,
    type: 'team'
  }, {
    year: '2022',
    title: '技术研发突破',
    description: '在6-8寸硅基氮化镓功率器件技术方面取得重大突破',
    icon: <Trophy className="h-6 w-6 text-blue-600" />,
    type: 'achievement'
  }, {
    year: '2023',
    title: '生产线建设',
    description: '开始建设国际先进的氮化镓功率器件生产线',
    icon: <Building className="h-6 w-6 text-blue-600" />,
    type: 'development'
  }, {
    year: '2024',
    title: '产品发布',
    description: '首批氮化镓功率器件产品正式发布并投入市场',
    icon: <Calendar className="h-6 w-6 text-blue-600" />,
    type: 'milestone'
  }];
  return <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">发展历程</h2>
          <p className="text-lg text-gray-600">见证我们的成长足迹</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {milestone.icon}
                        <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Empty Space */}
                <div className="w-5/12"></div>
              </div>)}
          </div>
        </div>

        {/* Future Vision */}
        <Card className="mt-16 bg-blue-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">未来展望</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              展望未来，江苏镓宏半导体将继续深耕氮化镓功率器件领域，
              不断提升技术水平，扩大生产规模，为全球客户提供更优质的产品和服务，
              助力中国第三代半导体产业的蓬勃发展。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>;
}