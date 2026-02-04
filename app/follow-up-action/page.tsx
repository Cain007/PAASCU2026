import { Metadata } from 'next';
import Image from 'next/image';
import Footer from '@/components/layout/Footer';
import { 
  ClipboardList, 
  PlayCircle, 
  BarChart, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Target,
  Users,
  FileText,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Follow-up Action | SCSJ-IBED PAASCU 2026',
  description: 'Action plans and implementation updates addressing recommendations from previous accreditation visits.',
};

export default function FollowUpActionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Bento Grid */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/schoolbldg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/85 to-slate-900/75" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/95 via-slate-900/50 to-slate-900/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white/10 backdrop-blur-sm border-white/20 text-white/90 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Follow-up Action
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Implementation Progress
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Progress updates and implementation of recommendations from previous evaluations
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            
            {/* Large Card - Previous Recommendations (spans 2 cols, 2 rows) */}
            <div className="md:col-span-2 md:row-span-2">
              <div className="h-full p-6 lg:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-red-500/30 rounded-2xl">
                    <ClipboardList className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-1">Previous Recommendations</h3>
                    <p className="text-white/60 text-sm">From PAASCU 2019 Evaluation</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="font-semibold">Curriculum Enhancement</span>
                    </div>
                    <p className="text-white/60 text-sm">Strengthen integration of 21st century skills across all learning areas</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="font-semibold">Faculty Development</span>
                    </div>
                    <p className="text-white/60 text-sm">Continue professional development programs for teaching staff</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-amber-400" />
                      <span className="font-semibold">Facilities Improvement</span>
                    </div>
                    <p className="text-white/60 text-sm">Upgrade science laboratory and library resources</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Stats Card */}
            <div className="h-full p-6 rounded-3xl bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-white">
              <div className="flex flex-col h-full">
                <div className="p-2 bg-emerald-500/30 rounded-xl w-fit mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-300" />
                </div>
                <div className="mt-auto">
                  <p className="text-5xl font-bold mb-1 text-emerald-300">85%</p>
                  <p className="text-white/70 text-sm">Implementation Complete</p>
                </div>
              </div>
            </div>

            {/* Timeline Card */}
            <div className="h-full p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <div className="flex flex-col h-full">
                <div className="p-2 bg-amber-500/30 rounded-xl w-fit mb-4">
                  <Clock className="w-6 h-6 text-amber-300" />
                </div>
                <div className="mt-auto">
                  <p className="text-3xl lg:text-4xl font-bold mb-1">2019-2026</p>
                  <p className="text-white/60 text-sm">Implementation Period</p>
                </div>
              </div>
            </div>

            {/* Action Plans Card (spans 2 cols) */}
            <div className="md:col-span-2">
              <div className="h-full p-6 lg:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/30 rounded-2xl">
                    <PlayCircle className="w-7 h-7 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-bold">Action Plans & Implementation</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <Target className="w-6 h-6 text-blue-400 mb-3" />
                    <p className="font-semibold mb-1">Strategic Goals</p>
                    <p className="text-white/50 text-sm">Aligned with institutional vision</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <Users className="w-6 h-6 text-purple-400 mb-3" />
                    <p className="font-semibold mb-1">Responsible Teams</p>
                    <p className="text-white/50 text-sm">Cross-functional committees</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <FileText className="w-6 h-6 text-emerald-400 mb-3" />
                    <p className="font-semibold mb-1">Documentation</p>
                    <p className="text-white/50 text-sm">Evidence-based reporting</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Overview Card */}
            <div className="h-full p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <div className="p-2 bg-blue-500/30 rounded-xl w-fit mb-4">
                <BarChart className="w-6 h-6 text-blue-300" />
              </div>
              <h4 className="font-bold mb-4">Status Overview</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="text-sm text-white/70">Completed</span>
                  </div>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <span className="text-sm text-white/70">In Progress</span>
                  </div>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/40"></div>
                    <span className="text-sm text-white/70">Pending</span>
                  </div>
                  <span className="font-semibold">2</span>
                </div>
              </div>
            </div>

            {/* Alerts Card */}
            <div className="h-full p-6 rounded-3xl bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-white">
              <div className="p-2 bg-amber-500/30 rounded-xl w-fit mb-4">
                <AlertCircle className="w-6 h-6 text-amber-300" />
              </div>
              <h4 className="font-bold mb-2">Upcoming Deadline</h4>
              <p className="text-white/70 text-sm mb-3">Final documentation submission</p>
              <p className="text-2xl font-bold text-amber-300">March 2026</p>
            </div>

            {/* Progress Monitoring Card (spans 2 cols) */}
            <div className="md:col-span-2">
              <div className="h-full p-6 lg:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-500/30 rounded-2xl">
                    <BarChart className="w-7 h-7 text-red-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Progress Monitoring</h3>
                    <p className="text-white/50 text-sm">Track implementation across all areas</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-white/80">Curriculum & Instruction</span>
                      <span className="text-sm font-bold text-emerald-400">95%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-white/80">Faculty Development</span>
                      <span className="text-sm font-bold text-emerald-400">88%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-white/80">Facilities & Resources</span>
                      <span className="text-sm font-bold text-amber-400">72%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-white/80">Student Services</span>
                      <span className="text-sm font-bold text-emerald-400">90%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
