import React from 'react';

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-xl" />
        <div className="w-16 h-6 bg-gray-100 rounded-full" />
      </div>
      <div className="h-8 w-20 bg-gray-200 rounded mb-2" />
      <div className="h-4 w-32 bg-gray-100 rounded" />
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
      <div className="h-14 bg-gray-50 border-b border-gray-100 flex items-center px-6 gap-4">
        <div className="h-4 w-24 bg-gray-200 rounded" />
        <div className="h-4 w-16 bg-gray-200 rounded" />
        <div className="h-4 w-20 bg-gray-200 rounded" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 px-6 py-4 border-b border-gray-50 last:border-0">
          <div className="h-4 w-1/4 bg-gray-100 rounded" />
          <div className="h-4 w-1/5 bg-gray-100 rounded" />
          <div className="h-4 w-1/6 bg-gray-100 rounded" />
          <div className="h-6 w-16 bg-gray-200 rounded-full ml-auto" />
        </div>
      ))}
    </div>
  );
}
