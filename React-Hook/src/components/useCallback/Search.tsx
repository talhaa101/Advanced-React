import { memo } from 'react';

interface SearchProps {
  onChange: (text: string) => void;
}

function Search({ onChange }: SearchProps) {
  return (
    <div className="relative flex-1">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-white border-2 border-violet-200 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition-all placeholder-gray-400"
      />
    </div>
  );
}

export default memo(Search);
