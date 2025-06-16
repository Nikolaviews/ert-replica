'use client';

import React, { useEffect, useState } from 'react'
import jobCode from '@/data/jobcodes-mockdata.json'

type JobCode = {
  taskCategory?: string;
  category: string;
  storyId?: string;
  jobCode?: string;
  isCategoryHeader?: boolean;
}

export const page = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const data = jobCode as JobCode[];
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    console.log('jobCodes', jobCode);
    data.forEach((item) => console.log(item.category));
  }, []);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Job Codes Table</h1>

      <div className="overflow-x-auto border border-gray-300 rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Job Code</th>
              <th className="px-4 py-2 border">Task Category</th>
              <th className="px-4 py-2 border">Story ID</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{item.jobCode || '-'}</td>
                <td className="px-4 py-2 border">{item.taskCategory || '-'}</td>
                <td className="px-4 py-2 border">{item.storyId || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span>Items per page:</span>
          <select
            className="border border-gray-300 rounded px-2 py-1"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            {[5, 10, 15].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div>
          {Math.min((currentPage - 1) * itemsPerPage + 1, data.length)} –{' '}
          {Math.min(currentPage * itemsPerPage, data.length)} of {data.length}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            ◀
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};
export default page;