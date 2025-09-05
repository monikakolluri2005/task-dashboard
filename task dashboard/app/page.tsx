import { Search, Grid3X3, Menu, Pause, Volume2, Users, Clock, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TaskDashboard() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-[#ffffff] border-r border-[#dfdfdf] flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#dfdfdf]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#546fff] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-semibold text-[#141522]">DNX</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3 px-3 py-2 text-[#8e92bc] hover:bg-[#f5f5f7] rounded-lg cursor-pointer">
              <Grid3X3 size={20} />
              <span>Overview</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 bg-[#f5f5f7] text-[#141522] rounded-lg">
              <div className="w-5 h-5 border-2 border-[#141522] rounded"></div>
              <span>Task</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-[#8e92bc] hover:bg-[#f5f5f7] rounded-lg cursor-pointer">
              <Users size={20} />
              <span>Mentors</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-[#8e92bc] hover:bg-[#f5f5f7] rounded-lg cursor-pointer">
              <div className="w-5 h-5 border-2 border-[#8e92bc] rounded"></div>
              <span>Message</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-[#8e92bc] hover:bg-[#f5f5f7] rounded-lg cursor-pointer">
              <div className="w-5 h-5 border-2 border-[#8e92bc] rounded"></div>
              <span>Settings</span>
            </div>
          </div>
        </nav>

        {/* Help Center Widget */}
        <div className="p-4">
          <div className="bg-[#141522] rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#141522] font-bold">?</span>
            </div>
            <h3 className="font-semibold mb-2">Help Center</h3>
            <p className="text-sm text-gray-300 mb-4">
              Having Trouble in Learning. Please contact us for more questions.
            </p>
            <Button variant="secondary" size="sm" className="bg-white text-[#141522] hover:bg-gray-100">
              Go To Help Center
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#ffffff] border-b border-[#dfdfdf] px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-[#141522]">Detail Task</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-6 h-6 bg-[#ff4d5e] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <Avatar className="w-10 h-10">
                <AvatarImage src="/professional-woman-diverse.png" />
                <AvatarFallback>DN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex">
          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Search and Controls */}
            <div className="flex items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8e92bc]" size={20} />
                <Input placeholder="Search Task" className="pl-10 border-[#dfdfdf] bg-[#ffffff]" />
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="flex items-center gap-2 border-[#dfdfdf] bg-transparent">
                  <Grid3X3 size={16} />
                  Category
                </Button>
                <Button variant="outline" className="flex items-center gap-2 border-[#dfdfdf] bg-transparent">
                  <Menu size={16} />
                  Sort By: Deadline
                </Button>
              </div>
            </div>

            {/* Video Player */}
            <div className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-sm border border-[#dfdfdf] mb-8">
              <div className="relative">
                <img
                  src="/mobile-app-design-workspace-with-phones-and-laptop.jpg"
                  alt="Mobile app design workspace"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded-lg p-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <Pause size={20} />
                    <div className="w-32 h-1 bg-white/30 rounded-full">
                      <div className="w-8 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-sm">2:20/10:00</span>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border border-white rounded"></div>
                    <div className="w-5 h-5 border border-white rounded"></div>
                    <Volume2 size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Task Details */}
            <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm border border-[#dfdfdf] mb-8">
              <h2 className="text-2xl font-semibold text-[#141522] mb-4">Creating Awesome Mobile Apps</h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#8e92bc]">UI UX Design . Apps Design</span>
                <Button variant="link" className="text-[#04a4f4] p-0 h-auto">
                  + Get Mentors
                </Button>
              </div>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-[#8e92bc]">
                  <Users size={16} />
                  <span>200 Students Involved</span>
                </div>
                <div className="flex items-center gap-2 text-[#8e92bc]">
                  <Clock size={16} />
                  <span>1 Hour</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-[#141522] mb-4">Description</h3>
              <p className="text-[#54577a] mb-8 leading-relaxed">
                Follow the video tutorial above. Understand how to use each tool in the Figma application. Also learn
                how to make a good and comfortable design. Starting from spacing, layout, design, typography, content,
                and many other design hierarchies. Then try to make it yourself with your imagination and inspiration.
              </p>

              <h3 className="text-lg font-semibold text-[#141522] mb-4">Essence of Assessment</h3>
              <div className="space-y-3">
                {[
                  "Understanding the tools in Figma",
                  "Understand the basics of making designs",
                  "Designing a mobile application using figma",
                  "Presenting the design flow",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#546fff] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 border-2 border-white rounded-full bg-white"></div>
                    </div>
                    <span className="text-[#54577a]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 p-8 space-y-6">
            {/* Assigned Assignments */}
            <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm border border-[#dfdfdf]">
              <h3 className="text-sm font-medium text-[#8e92bc] mb-4">Assigned Assignments</h3>
              <h4 className="text-xl font-semibold text-[#141522] mb-2">Creating Awesome Mobile Apps</h4>
              <p className="text-[#8e92bc] text-sm">UI UX Design . Apps Design</p>
            </div>

            {/* Detail Student */}
            <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm border border-[#dfdfdf]">
              <h3 className="text-lg font-semibold text-[#141522] mb-4">Detail Student</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#8e92bc]">Student's name</span>
                  <span className="text-[#141522] font-medium">Dennis Nzioki</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e92bc]">Student Class</span>
                  <span className="text-[#141522] font-medium">MIPA 2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e92bc]">Student Number</span>
                  <span className="text-[#141522] font-medium">10</span>
                </div>
              </div>
            </div>

            {/* File Task */}
            <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm border border-[#dfdfdf]">
              <h3 className="text-lg font-semibold text-[#141522] mb-4">File Task</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[#8e92bc]">Last Modified</span>
                  <span className="text-[#141522] font-medium">1 July 2022</span>
                </div>
                <div>
                  <span className="text-[#8e92bc] block mb-3">File submissions</span>
                  <div className="border-2 border-dashed border-[#dfdfdf] rounded-lg p-8 text-center">
                    <Upload className="mx-auto mb-2 text-[#8e92bc]" size={24} />
                  </div>
                  <p className="text-xs text-[#8e92bc] mt-2">*drag or browser from device</p>
                </div>
                <Button className="w-full bg-[#546fff] hover:bg-[#4c63ff] text-white">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
