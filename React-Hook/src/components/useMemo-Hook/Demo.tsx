import { useMemo, useState } from "react";
import { initialItems } from "./utils";

function Demo() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(() => {
    return items.find((item) => item.id === count);
  }, [count, items]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center p-8">
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-lg w-full">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
            useMemo Hook
          </span>
          <div className="relative">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {count}
            </h1>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-gray-500 mt-4">
            Selected Item ID: <span className="font-bold text-cyan-600">{selectedItem?.id ?? 'None'}</span>
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={() => setCount(count - 1)}
            className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg shadow-rose-500/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            - Decrease
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            + Increase
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium rounded-xl transition-colors"
        >
          Reset to 0
        </button>

        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-sm text-blue-800 text-center">
            <strong>Performance:</strong> useMemo caches the search result!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Demo;
