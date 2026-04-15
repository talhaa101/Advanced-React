import { useEffect, useState } from 'react';

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 max-w-lg w-full border border-white/20 shadow-2xl">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4">
            useEffect Hook
          </span>
          <h2 className="text-6xl font-bold text-white mb-2">{count}</h2>
          <p className="text-gray-400">Timer running: {isRunning ? 'Yes' : 'No'}</p>
        </div>

        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            + Add
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            - Subtract
          </button>
        </div>

        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`w-full py-4 font-bold rounded-xl transition-all duration-300 ${
            isRunning
              ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
              : 'bg-gradient-to-r from-violet-500 to-purple-500 text-white'
          }`}
        >
          {isRunning ? '⏸ Pause Timer' : '▶ Start Timer'}
        </button>

        <button
          onClick={() => { setCount(0); setIsRunning(false); }}
          className="mt-4 w-full py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors"
        >
          Reset All
        </button>
      </div>
    </div>
  );
}
