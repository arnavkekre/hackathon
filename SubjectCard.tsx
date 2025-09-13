"use client";

import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface SubjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  color: string;
  classes: string[];
}

export default function SubjectCard({ title, description, icon, progress, color, classes }: SubjectCardProps) {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-2xl overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${color}`} />
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
            {icon}
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{progress}%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Complete</div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {classes.map((cls, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              Class {cls}
            </span>
          ))}
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-600 dark:text-gray-400">Progress</span>
            <span className="text-gray-600 dark:text-gray-400">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${color} transition-all duration-500`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white">
          Continue Learning
        </Button>
      </CardContent>
    </Card>
  );
}