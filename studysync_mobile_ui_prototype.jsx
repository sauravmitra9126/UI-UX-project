export default function StudySyncPrototype() {
  const tasks = [
    { title: 'Geography Assignment', due: 'Tomorrow' },
    { title: 'UGC NET Preparation', due: 'Friday' },
    { title: 'Remote Sensing Notes', due: 'Next Week' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-[390px] h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-indigo-600 text-white p-6 rounded-b-3xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">Welcome Back</p>
              <h1 className="text-2xl font-bold">Saurav 👋</h1>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
              S
            </div>
          </div>

          <div className="mt-6 bg-white/15 rounded-2xl p-4 backdrop-blur-sm">
            <p className="text-sm opacity-80">Today's Progress</p>
            <div className="flex items-end justify-between mt-2">
              <h2 className="text-3xl font-bold">72%</h2>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-xl text-sm font-semibold shadow">
                View Stats
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-slate-800">Upcoming Tasks</h2>
            <button className="text-indigo-600 text-sm font-medium">See All</button>
          </div>

          <div className="space-y-4">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-800">{task.title}</h3>
                    <p className="text-sm text-slate-500">Due: {task.due}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                    ✓
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Quick Actions</h2>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-indigo-600 text-white rounded-2xl p-5 text-left shadow-lg">
                <p className="text-sm opacity-80">Create</p>
                <h3 className="text-lg font-bold mt-1">Add Task</h3>
              </button>

              <button className="bg-emerald-500 text-white rounded-2xl p-5 text-left shadow-lg">
                <p className="text-sm opacity-80">Check</p>
                <h3 className="text-lg font-bold mt-1">Progress</h3>
              </button>
            </div>
          </div>

          {/* Calendar Card */}
          <div className="mt-8 bg-slate-900 text-white rounded-3xl p-5 shadow-xl">
            <p className="text-sm opacity-70">Next Deadline</p>
            <h2 className="text-2xl font-bold mt-2">Research Submission</h2>
            <p className="mt-1 opacity-80">12 May 2026</p>

            <div className="mt-4 h-2 rounded-full bg-white/20 overflow-hidden">
              <div className="w-3/4 h-full bg-indigo-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-[390px] bg-white border-t border-slate-200 px-6 py-4 flex justify-between items-center">
          <button className="flex flex-col items-center text-indigo-600 font-medium">
            <span>🏠</span>
            <span className="text-xs mt-1">Home</span>
          </button>

          <button className="flex flex-col items-center text-slate-400">
            <span>📅</span>
            <span className="text-xs mt-1">Schedule</span>
          </button>

          <button className="w-14 h-14 rounded-full bg-indigo-600 text-white text-3xl -mt-8 shadow-2xl flex items-center justify-center">
            +
          </button>

          <button className="flex flex-col items-center text-slate-400">
            <span>📊</span>
            <span className="text-xs mt-1">Stats</span>
          </button>

          <button className="flex flex-col items-center text-slate-400">
            <span>👤</span>
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
