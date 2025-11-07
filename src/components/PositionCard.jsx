// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button, Card, CardContent } from '@/components/ui';
// @ts-ignore;
import { MapPin, Users, Clock, DollarSign } from 'lucide-react';

export function PositionCard({
  position,
  onViewDetails
}) {
  return <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {position.department}
            </span>
          </div>
          <span className="text-green-600 font-semibold">{position.salary}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{position.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            {position.location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-2" />
            {position.type}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-2" />
            {position.experience}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <DollarSign className="h-4 w-4 mr-2" />
            {position.education}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">发布时间: {position.posted}</span>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => onViewDetails(position)}>
            查看详情
          </Button>
        </div>
      </CardContent>
    </Card>;
}