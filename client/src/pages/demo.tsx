import { motion } from "framer-motion";
import { Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Demo() {
  const modules = [
    {
      image: "/images/listening.png",
      title: "Listening Comprehension",
      description: "Enhance your ability to understand spoken English in various contexts. Practice with diverse accents and scenarios."
    },
    {
      image: "/images/speaking.png",
      title: "Speaking Fluency",
      description: "Improve your spoken English with interactive exercises. Focus on pronunciation, intonation, and natural conversation flow."
    },
    {
      image: "/images/reading.png",
      title: "Reading Proficiency",
      description: "Develop your reading speed and comprehension skills. Engage with a variety of texts, from articles to literature."
    },
    {
      image: "/images/writing.png",
      title: "Writing Accuracy",
      description: "Refine your writing skills with exercises covering grammar, vocabulary, and style. Practice different writing formats."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar - Exactly as Figma */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="px-10 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu className="h-4 w-4 text-gray-900" />
            <span className="text-lg font-bold text-gray-900">TuneEng</span>
          </div>
          
          <nav className="flex items-center gap-9">
            <a href="#" className="text-sm font-medium text-gray-900">Learn</a>
            <a href="#" className="text-sm font-medium text-gray-900">Track</a>
            <a href="#" className="text-sm font-medium text-gray-900">Manage</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-gray-100 hover:bg-gray-200 h-10 px-4">
              <User className="h-5 w-5 mr-2" />
            </Button>
            <img src="/images/avatar.png" alt="Avatar" className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Content Area - Figma Layout */}
      <div className="flex px-6 py-6 gap-2">
        {/* Left Sidebar - 320px width exactly as Figma */}
        <div className="w-80 bg-gray-50 rounded-lg p-4 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            {/* Modules Button - Active */}
            <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-lg">
              <Menu className="h-6 w-6 text-gray-900" />
              <span className="text-sm font-medium text-gray-900">Modules</span>
            </div>
            {/* Leaderboard Button */}
            <Link href="/leaderboard">
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Menu className="h-6 w-6 text-gray-900" />
                <span className="text-sm font-medium text-gray-900">Leaderboard</span>
              </div>
            </Link>
            {/* Tracker Button */}
            <Link href="/tracker">
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Menu className="h-6 w-6 text-gray-900" />
                <span className="text-sm font-medium text-gray-900">Tracker</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Content Area - Flex 1 */}
        <div className="flex-1">
          {/* Title and Tabs Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">LSRW Skill Modules</h1>
            
            {/* LSRW Tabs - Exactly as Figma */}
            <div className="border-b border-gray-200 pb-3 px-4">
              <div className="flex gap-8">
                <button className="pb-3 px-2 text-sm font-bold border-b-2 border-blue-600 text-blue-600">
                  Listening
                </button>
                <button className="pb-3 px-2 text-sm font-bold border-b-2 border-transparent text-gray-600">
                  Speaking
                </button>
                <button className="pb-3 px-2 text-sm font-bold border-b-2 border-transparent text-gray-600">
                  Reading
                </button>
                <button className="pb-3 px-2 text-sm font-bold border-b-2 border-transparent text-gray-600">
                  Writing
                </button>
              </div>
            </div>
          </div>

          {/* Modules Grid - Exactly as Figma */}
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden border-0"
              >
                <div className="flex">
                  {/* Module Image - Fixed 242px height */}
                  <div className="w-[242px] h-[242px] flex-shrink-0">
                    <img 
                      src={module.image} 
                      alt={module.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Module Content */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {module.title}
                    </h3>

                    <div className="flex justify-between items-end gap-3">
                      {/* Description */}
                      <p className="text-base text-gray-600 flex-1 max-w-[318px] leading-relaxed">
                        {module.description}
                      </p>

                      {/* Start Module Button */}
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white h-8 px-4 flex-shrink-0"
                      >
                        Start Module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}