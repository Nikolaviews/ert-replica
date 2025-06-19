'use client';

import React from 'react';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-12 text-gray-600">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">500</h1>
      <p className="mb-4">Something went wrong.</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}