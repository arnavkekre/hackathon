"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { TrendingUp, Award, Clock, BookOpen } from 'lucide-react';

export default function DashboardPreview() {
  const stats = [
    { label: 'Courses Completed', value: '12', icon: BookOpen, color: 'text-green-600' },
    { label: 'Study Hours', value: '156', icon: Clock, color: 'text-blue-600' },
    { label: 'Achievements', value: '8', icon: Award, color: 'text-yellow-600' },
    { label: 'Current Streak', value: '15', icon: TrendingUp, color: 'text-purple-600' },
  ];

  const recentActivities = [
    { subject: 'Mathematics', activity: 'Completed Algebra Quiz', time: '2 hours ago', score: '95%' },
    { subject: 'Science', activity: 'Watched Physics Video', time: '5 hours ago', score: null },
    { subject: 'English', activity: 'Submitted Essay', time: '1 day ago', score: '88%' },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
          Your Learning Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Track your progress, view achievements, and stay motivated on your educational journey
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 hover:scale-105 transition-transform">
            <CardContent className="p-4 text-center">
              <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dashboard Preview Image */}
      <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1587401511935-a7f87afadf2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBjaGFydHMlMjBpbnRlcmZhY2V8ZW58MHwwfHxibHVlfDE3NTc3NDY2MTJ8MA&ixlib=rb-4.1.0&q=85"
              alt="Modern educational dashboard interface with charts and progress indicators - KOBU Agency on Unsplash"
              className="w-full h-64 object-cover"
              style={{ width: '100%', height: '256px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">Interactive Analytics</h3>
              <p className="text-sm opacity-90">Real-time progress tracking and insights</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white">{activity.subject}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{activity.activity}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">{activity.time}</div>
                </div>
                {activity.score && (
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{activity.score}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700">
            View Full Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}