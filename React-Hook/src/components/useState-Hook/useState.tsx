import { useState } from "react";

export default function UseState() {
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 flex items-center justify-center p-8">
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-md w-full border border-white/20">
                <div className="text-center mb-8">
                    <span className="inline-block px-4 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold mb-4">
                        useState Hook
                    </span>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                        {count}
                    </h2>
                    <p className="text-gray-500 mt-2">Click to change the count</p>
                </div>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => setCount(count - 1)}
                        className="group relative px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 active:scale-95 transition-all duration-200"
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                            </svg>
                            Decrement
                        </span>
                    </button>

                    <button
                        onClick={() => setCount(count + 1)}
                        className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 active:scale-95 transition-all duration-200"
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                            </svg>
                            Increment
                        </span>
                    </button>
                </div>

                <button
                    onClick={() => setCount(0)}
                    className="mt-6 w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium rounded-xl transition-colors"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
