// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { User, Award, BookOpen } from 'lucide-react';

export function ManagementTeam() {
  const teamMembers = [{
    name: '张博士',
    position: '创始人 & CEO',
    avatar: 'https://picsum.photos/seed/ceo-avatar/200/200.jpg',
    background: '氮化镓领域领军人物，拥有20年半导体行业经验',
    education: '清华大学博士，斯坦福大学博士后',
    achievements: ['发表SCI论文50余篇', '获得专利30余项', '国家科技进步奖获得者'],
    expertise: 'GaN器件设计、外延生长、器件工艺'
  }, {
    name: '李博士',
    position: 'CTO',
    avatar: 'https://picsum.photos/seed/cto-avatar/200/200.jpg',
    background: '功率器件技术专家，专注GaN/SiC器件研发15年',
    education: '中科院微电子所博士',
    achievements: ['国际会议特邀报告10余次', '主导多个国家级项目', '行业标准制定参与者'],
    expertise: '功率器件工艺、可靠性设计、应用技术'
  }, {
    name: '王先生',
    position: 'COO',
    avatar: 'https://picsum.photos/seed/coo-avatar/200/200.jpg',
    background: '半导体制造管理专家，拥有丰富的量产经验',
    education: '上海交通大学MBA',
    achievements: ['管理过多个大型晶圆厂', '成本控制专家', '供应链管理专家'],
    expertise: '生产管理、质量控制、供应链优化'
  }, {
    name: '陈女士',
    position: 'CFO',
    avatar: 'https://picsum.photos/seed/cfo-avatar/200/200.jpg',
    background: '半导体行业财务专家，熟悉资本市场运作',
    education: '复旦大学金融学硕士',
    achievements: ['成功主导多轮融资', '上市公司财务总监经验', '财务风险管理专家'],
    expertise: '财务管理、资本运作、风险控制'
  }];
  return <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">管理团队</h2>
          <p className="text-lg text-gray-600">汇聚行业精英，引领技术创新</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <User className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">背景</span>
                    </div>
                    <p className="text-sm text-gray-600">{member.background}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">教育</span>
                    </div>
                    <p className="text-sm text-gray-600">{member.education}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Award className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">成就</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {member.achievements.map((achievement, achievementIndex) => <li key={achievementIndex} className="flex items-start">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>)}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Award className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">专长</span>
                    </div>
                    <p className="text-sm text-gray-600">{member.expertise}</p>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-blue-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">团队优势</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600">研发人员</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">博士硕士</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">年行业经验</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
}