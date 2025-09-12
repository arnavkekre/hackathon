"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import { BookOpen, Laptop, Users, Sun, Moon } from "lucide-react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");

  const courses = [
    { id: 1, title: "Fullstack Web Development", desc: "Learn MERN stack with hands-on projects." },
    { id: 2, title: "Data Science & AI", desc: "Master Python, ML, and AI applications." },
    { id: 3, title: "Cybersecurity Essentials", desc: "Protect systems with real-world practices." },
  ];

  const filteredCourses = courses.filter(c => c.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={`${darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"} min-h-screen transition-colors`}>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 border-b border-slate-700 dark:border-slate-200">
        <h1 className="text-2xl font-bold">EduTech</h1>
        <div className="flex items-center space-x-6">
          <Button variant="ghost">Courses</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
          <Button className="bg-indigo-500 hover:bg-indigo-600">Sign In</Button>
          <div className="flex items-center space-x-2">
            <Sun className="w-5 h-5" />
            <Switch checked={darkMode} onCheckedChange={() => setDarkMode(!darkMode)} />
            <Moon className="w-5 h-5" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-24 px-6"
      >
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Learn Smarter, Achieve Greater
        </h2>
        <p className="mt-6 text-lg text-slate-400 dark:text-slate-600 max-w-2xl mx-auto">
          Access world-class courses, interactive lessons, and mentorship to boost your career.
        </p>
        <div className="mt-8 space-x-4">
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-lg px-6 py-3">Get Started</Button>
          <Button variant="outline" className="border-slate-600 text-lg px-6 py-3">Browse Courses</Button>
        </div>
      </motion.section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-10 py-20">
        {[
          { icon: BookOpen, title: "Expert Content", text: "Curated courses designed by industry leaders." },
          { icon: Laptop, title: "Interactive Learning", text: "Hands-on projects and real-world case studies." },
          { icon: Users, title: "Community Support", text: "Learn together with peers and mentors." }
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }}>
            <Card className={`${darkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-300"} shadow-lg rounded-2xl`}>
              <CardContent className="p-8 text-center">
                <item.icon className="w-12 h-12 mx-auto text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 dark:text-slate-600">{item.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Courses Preview */}
      <section className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Courses</h2>
        <div className="flex justify-center mb-10">
          <Input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className={`${darkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-300"} rounded-2xl overflow-hidden`}>
              <CardContent className="p-0">
                <div className="h-40 bg-gradient-to-r from-indigo-500 to-cyan-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <p className="text-slate-400 dark:text-slate-600 mt-2">{course.desc}</p>
                  <Button className="mt-4 bg-indigo-500 hover:bg-indigo-600">Enroll Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {filteredCourses.length === 0 && (
            <p className="col-span-3 text-center text-slate-400">No courses found.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 dark:border-slate-200 text-center py-8 text-slate-400 dark:text-slate-600">
        <p>© 2025 EduTech. All rights reserved.</p>
      </footer>
    </div>
  );
}
