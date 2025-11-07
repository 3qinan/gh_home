// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { Target, Lightbulb, Users, Award } from 'lucide-react';

export function CompanyOverview() {
  const values = [{
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: '使命',
    description: '助力中国在第三代半导体产业领域的跨越式发展'
  }, {
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
    title: '愿景',
    description: '成为国际领先的氮化镓功率器件IDM企业'
  }, {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: '价值观',
    description: '创新、专业、协作、共赢'
  }, {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: '优势',
    description: '国际领先的6-8寸硅基氮化镓功率器件全套生产制造技术'
  }];
  return <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">企业概况</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            江苏镓宏半导体有限公司(原徐州金沙江半导体有限公司)成立于2021年，
            项目发起人为氮化镓领域领军人物，以业内领先的氮化镓功率器件和其全新应用为拳头产品。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">公司简介</h3>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                江苏镓宏半导体有限公司充分发挥国际领先的6-8寸硅基氮化镓功率器件全套生产制造技术的优势，
                汇集供应链资源、核心技术、产品制造、核心客户、资本市场和地方政府支持等关键资源。
              </p>
              <p>
                公司专注于GaN HEMT、氮化镓HEMT等GaN功率晶体管器件，以及氮化镓外延片、氮化镓应用技术的研发和生产，
                组织筹建新型的IDM产品平台。
              </p>
              <p>
                我们致力于为中国在第三代半导体产业领域的跨越式发展贡献力量，
                成为国际领先的氮化镓功率器件供应商。
              </p>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/seed/company-overview/600/400.jpg" alt="公司概况" className="w-full h-96 object-cover rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </div>;
}