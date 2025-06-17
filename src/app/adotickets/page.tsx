'use client';
import Header from '@/layout/Header';
import React, { useEffect, useState } from 'react';

interface Ticket {
  ticketId: number;
  title: string;
  state: string;
  ffr_ffp: string;
  part: string;
  assignedTo: string;
  iterationPath: string;
  tags: string;
  workItemType: string;
}

const AdoTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetch('http://bayer-ert-api.itag-labs.com/tickets/getListOfAdoTickets')
      .then((res) => res.json())
      .then((data) => {
        console.log('ADO Ticket Data:', data);
        if (Array.isArray(data.data)) {
          setTickets(data.data);
        } else {
          console.error("Unexpected data format:", data);
          setTickets([]);
        }
      })
      .catch((err) => console.error('API error:', err));
  }, []);

  const filteredTickets = tickets.filter((ticket) =>
    Object.values(ticket).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const paginatedTickets = filteredTickets.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const totalPages = Math.ceil(filteredTickets.length / rowsPerPage);

  return (
    <>
      <Header title='ADO Tickets'
        onPrimaryActionClick={() => console.log('azure')}
        primaryActionLabel="Azure DevOps"
        onExportClick={() => console.log('Exporting')}
        onFilterChange={(t) => setSearchText(t)}
        showFilter={true} />

      <div className=" p-4">
        {/* <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Filter here..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="border px-3 py-1 rounded shadow" />
            <button className="bg-blue-500 text-white px-3 py-1 rounded shadow">
              Export
            </button>
            <button className="bg-green-600 text-white px-3 py-1 rounded shadow">
              Azure DevOps
            </button>
          </div>
        </div> */}

        <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-300 text-xs uppercase text-gray-600 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3">Ticket</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">State</th>
                <th className="px-4 py-3">FFR/FFP</th>
                <th className="px-4 py-3">PART</th>
                <th className="px-4 py-3">Assignee</th>
                <th className="px-4 py-3">Iteration</th>
                <th className="px-4 py-3">Tags</th>
                <th className="px-4 py-3">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {paginatedTickets.map((ticket) => (
                <tr key={ticket.ticketId} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{ticket.ticketId}</td>
                  <td className="px-4 py-2">{ticket.title}</td>
                  <td className="px-4 py-2">{ticket.state}</td>
                  <td className="px-4 py-2">{ticket.ffr_ffp || '-'}</td>
                  <td className="px-4 py-2">{ticket.part || '-'}</td>
                  <td className="px-4 py-2">{ticket.assignedTo}</td>
                  <td className="px-4 py-2">{ticket.iterationPath}</td>
                  <td className="px-4 py-2">{ticket.tags || '-'}</td>
                  <td className="px-4 py-2">{ticket.workItemType}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end items-center m-2 text-sm gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="rowsPerPage" className="font-medium">Items per page:</label>
              <select
                id="rowsPerPage"
                value={rowsPerPage}
                onChange={(e) => {
                  setPage(1);
                  setRowsPerPage(Number(e.target.value));
                }}
                className="border rounded px-2 py-1 text-sm"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>

            <div className="text-gray-600">
              {Math.min((page - 1) * rowsPerPage + 1, filteredTickets.length)} –
              {Math.min(page * rowsPerPage, filteredTickets.length)} of {filteredTickets.length}
            </div>

            <div className="flex gap-2">
              <button
                className={`px-3 py-1 rounded border text-sm font-medium ${page === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white hover:bg-gray-100'}`}
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                {'<'}
              </button>
              <span className="self-center font-medium text-gray-700">
                Page {page} of {totalPages}
              </span>
              <button
                className={`px-3 py-1 rounded border text-sm font-medium ${page === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white hover:bg-gray-100'}`}
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                {'>'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdoTickets;
