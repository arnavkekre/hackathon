"use client";

import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Switch } from '../components/ui/switch';
import LoginModal from '../components/LoginModal';
import SubjectCard from '../components/SubjectCard';
import DashboardPreview from '../components/DashboardPreview';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  GraduationCap, 
  TrendingUp, 
  Users, 
  Award,
  PlayCircle,
  BookOpen,
  Star
} from 'lucide-react';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const subjects = [
    {
      title: 'Mathematics',
      description: 'Algebra, Geometry, Calculus and more',
      icon: <CalculateOutlinedIcon style={{ fontSize: '24px' }} />,
      progress: 75,
      color: 'from-blue-500 to-blue-600',
      classes: ['6', '7', '8', '9', '10', '11', '12']
    },
    {
      title: 'Science',
      description: 'Physics, Chemistry, Biology',
      icon: <ScienceOutlinedIcon style={{ fontSize: '24px' }} />,
      progress: 60,
      color: 'from-green-500 to-green-600',
      classes: ['6', '7', '8', '9', '10', '11', '12']
    },
    {
      title: 'English',
      description: 'Literature, Grammar, Writing',
      icon: <ImportContactsOutlinedIcon style={{ fontSize: '24px' }} />,
      progress: 85,
      color: 'from-purple-500 to-purple-600',
      classes: ['6', '7', '8', '9', '10', '11', '12']
    },
    {
      title: 'History',
      description: 'World History, Ancient Civilizations',
      icon: <HistoryOutlinedIcon style={{ fontSize: '24px' }} />,
      progress: 45,
      color: 'from-orange-500 to-orange-600',
      classes: ['6', '7', '8', '9', '10', '11', '12']
    }
  ];

  const features = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Personalized Learning',
      description: 'AI-powered curriculum adapted to your learning pace and style'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Progress Tracking',
      description: 'Real-time analytics and insights into your academic performance'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Live Classes',
      description: 'Interactive sessions with expert teachers and peer collaboration'
    }
  ];

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-all duration-500">
        
        {/* Navigation */}
        <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-8 h-8 text-indigo-600" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  EduVerse
                </h1>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#subjects" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Subjects
                </a>
                <a href="#dashboard" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Dashboard
                </a>
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  About
                </a>
                <Button 
                  onClick={() => setIsLoginOpen(true)}
                  className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700"
                >
                  Login
                </Button>
                <div className="flex items-center space-x-2">
                  <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                  <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                  <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200 dark:border-slate-700">
                <div className="flex flex-col space-y-4">
                  <a href="#subjects" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Subjects
                  </a>
                  <a href="#dashboard" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Dashboard
                  </a>
                  <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    About
                  </a>
                  <Button 
                    onClick={() => setIsLoginOpen(true)}
                    className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 w-full"
                  >
                    Login
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 dark:from-indigo-500/5 dark:to-cyan-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    Learn
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    Without Limits
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                  Unlock your potential with personalized learning experiences designed for students from Class 6 to 12. 
                  Join thousands of students already excelling with EduVerse.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg"
                    onClick={() => setIsLoginOpen(true)}
                    className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-lg px-8 py-4 h-auto"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Start Learning
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-4 h-auto border-2 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Explore Subjects
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">50K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600">1000+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Lessons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">98%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1550592704-6c76defa9985?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nJTIwYm9va3N8ZW58MHwwfHx8MTc1Nzc0NjYxMnww&ixlib=rb-4.1.0&q=85"
                    alt="Young diverse students studying together in modern classroom - lilartsy on Unsplash"
                    className="rounded-2xl shadow-2xl"
                    style={{ width: '100%', height: '400px' }}
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-20 blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Why Choose EduVerse?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Experience the future of education with cutting-edge technology and personalized learning approaches
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="text-indigo-600 dark:text-indigo-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section id="subjects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Master Every Subject
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive curriculum covering all major subjects for classes 6-12
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjects.map((subject, index) => (
                <SubjectCard key={index} {...subject} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-lg px-8 py-4 h-auto"
              >
                <Star className="w-5 h-5 mr-2" />
                View All Subjects
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <DashboardPreview />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already started their journey to academic excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setIsLoginOpen(true)}
                className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto"
              >
                Get Started Today
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 text-lg px-8 py-4 h-auto"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <GraduationCap className="w-8 h-8 text-indigo-400" />
                  <h3 className="text-2xl font-bold">EduVerse</h3>
                </div>
                <p className="text-gray-400">
                  Empowering students with personalized learning experiences for academic excellence.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#subjects" className="hover:text-white transition-colors">Subjects</a></li>
                  <li><a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Classes</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Class 6-8</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Class 9-10</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Class 11-12</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Competitive Exams</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Student Support</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 EduVerse. All rights reserved. Built with ❤️ for students.</p>
            </div>
          </div>
        </footer>

        {/* Login Modal */}
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </div>
    </div>
  );
}