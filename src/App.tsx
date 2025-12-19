import { BookOpen, Code, Cpu, Database, Sparkles, Brain, Cloud, Lock } from 'lucide-react';

function App() {
  const courses = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Master artificial intelligence and build intelligent systems",
      icon: Brain,
      duration: "12 weeks",
      level: "Intermediate",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Web3 & Blockchain",
      description: "Learn decentralized applications and smart contracts",
      icon: Sparkles,
      duration: "10 weeks",
      level: "Beginner",
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 3,
      title: "Cloud Computing",
      description: "Deploy scalable applications on AWS, Azure & GCP",
      icon: Cloud,
      duration: "8 weeks",
      level: "Intermediate",
      color: "from-teal-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Cybersecurity",
      description: "Protect systems and networks from digital attacks",
      icon: Lock,
      duration: "14 weeks",
      level: "Advanced",
      color: "from-rose-500 to-pink-500"
    },
    {
      id: 5,
      title: "Quantum Computing",
      description: "Explore the future of computing with quantum algorithms",
      icon: Cpu,
      duration: "16 weeks",
      level: "Advanced",
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 6,
      title: "Full Stack Development",
      description: "Build modern web applications from frontend to backend",
      icon: Code,
      duration: "20 weeks",
      level: "Beginner",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                TechLearn
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Courses</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Master Tomorrow's
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Technology</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn cutting-edge technologies with expert-led courses designed for the future of tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-500">
                      <Database className="w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${course.color} text-white`}>
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="bg-white mt-20 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2024 TechLearn. Empowering the next generation of tech innovators.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
