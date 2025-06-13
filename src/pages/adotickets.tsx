import Topbar from '@/layouts/Topbar';
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
      <Topbar />
      <div className=" p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">ADO Tickets</h2>

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
        </div>

        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-2">Ticket</th>
              <th className="border px-2 py-2">Title</th>
              <th className="border px-2 py-2">State</th>
              <th className="border px-2 py-2">FFR/FFP</th>
              <th className="border px-2 py-2">PART</th>
              <th className="border px-2 py-2">Assignee</th>
              <th className="border px-2 py-2">Iteration</th>
              <th className="border px-2 py-2">Tags</th>
              <th className="border px-2 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTickets.map((ticket) => (
              <tr key={ticket.ticketId} className="hover:bg-gray-50">
                <td className="border px-2 py-1">{ticket.ticketId}</td>
                <td className="border px-2 py-1">{ticket.title}</td>
                <td className="border px-2 py-1">{ticket.state}</td>
                <td className="border px-2 py-1">{ticket.ffr_ffp || '-'}</td>
                <td className="border px-2 py-1">{ticket.part || '-'}</td>
                <td className="border px-2 py-1">{ticket.assignedTo}</td>
                <td className="border px-2 py-1">{ticket.iterationPath}</td>
                <td className="border px-2 py-1">{ticket.tags || '-'}</td>
                <td className="border px-2 py-1">{ticket.workItemType}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end items-center mt-4 text-sm gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="rowsPerPage">Items per page:</label>
            <select
              id="rowsPerPage"
              value={rowsPerPage}
              onChange={(e) => {
                setPage(1);
                setRowsPerPage(Number(e.target.value));
              }}
              className="border rounded px-2 py-1">
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>

          <div>
            {` ${Math.min((page - 1) * rowsPerPage + 1, filteredTickets.length)} – ${Math.min(
              page * rowsPerPage,
              filteredTickets.length
            )} of ${filteredTickets.length}`}
          </div>

          <div className="space-x-2">
            <button
              className="px-2 py-1 border rounded"
              disabled={page === 1}
              onClick={() => setPage(page - 1)} > ◀
            </button>
            <button
              className="px-2 py-1 border rounded"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)} > ▶
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdoTickets;
