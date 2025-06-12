'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  FaTachometerAlt,
  FaUsers,
  FaClock,
  FaTicketAlt,
  FaBars,
  FaProjectDiagram,
  FaFlag,
  FaCalendarAlt,
  FaCode,
  FaCheckSquare,
  FaChevronDown,
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa'

const Sidebar = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({
    'T-Sheets': true,
    'Project Streams': false
  })

  const toggle = (section: string) => {
    setOpen(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <aside className="w-50 bg-[#052148] text-white min-h-screen p-4 flex flex-col justify-between">
      <div>
        {/* Logo
        <div className="mb-6">
          <img src="/tsri-logo.png" alt="TSRI Logo" className="h-10 mx-auto mb-1" />
        </div> */}

        {/* Navigation */}
        <ul className="space-y-1 text-sm font-medium">

          {/* T-Sheets */}
          <li>
            <button
              onClick={() => toggle('T-Sheets')}
              className="flex items-center w-full hover:bg-[#0d3164] px-2 py-2 rounded"
            >
              <FaTachometerAlt className="mr-2" />
              <span className="flex-1 text-left">T-Sheets</span>
              {open['T-Sheets'] ? <FaChevronDown size={14} /> : <FaChevronRight size={14} />}
            </button>
            {open['T-Sheets'] && (
              <ul className="ml-6 mt-1 space-y-1 text-gray-300">
                <li>
                  <Link href="/dashboard" className="hover:bg-[#173e73] rounded px-2 py-1 flex items-center">
                    <FaUsers className="mr-2" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/job-code" className="hover:bg-[#173e73] rounded px-2 py-1 flex items-center">
                    <FaBars className="mr-2" />
                    Job Codes
                  </Link>
                </li>
                <li className="hover:bg-[#173e73] rounded px-2 py-1 flex items-center">
                  <FaClock className="mr-2" />
                  Time Entries
                </li>
              </ul>
            )}
          </li>

          <li className="hover:bg-[#0d3164] px-2 py-2 rounded flex items-center">
            <FaTicketAlt className="mr-2" />
            ADO Tickets
          </li>

          <li className="hover:bg-[#0d3164] px-2 py-2 rounded flex items-center">
            <FaBars className="mr-2" />
            SoW
          </li>

          {/* Project Streams */}
          <li>
            <button
              onClick={() => toggle('Project Streams')}
              className="flex items-center w-full hover:bg-[#0d3164] px-2 py-2 rounded"
            >
              <FaProjectDiagram className="mr-2" />
              <span className="flex-1 text-left">Project Streams</span>
              {open['Project Streams'] ? <FaChevronDown size={14} /> : <FaChevronRight size={14} />}
            </button>
            {open['Project Streams'] && (
              <ul className="ml-6 mt-1 space-y-1 text-gray-300">
                <li className="hover:bg-[#173e73] rounded px-2 py-1">Refactoring</li>
                <li className="hover:bg-[#173e73] rounded px-2 py-1">Legacy Baselining</li>
                <li className="hover:bg-[#173e73] rounded px-2 py-1">Test Automation</li>
                <li className="hover:bg-[#173e73] rounded px-2 py-1">CloudFormation</li>
                <li className="hover:bg-[#173e73] rounded px-2 py-1">Documentation</li>
                <li className="hover:bg-[#173e73] rounded px-2 py-1">Performance</li>
              </ul>
            )}
          </li>

          <li className="hover:bg-[#0d3164] px-2 py-2 rounded flex items-center">
            <FaFlag className="mr-2" />
            Milestones
          </li>
          <li className="hover:bg-[#0d3164] px-2 py-2 rounded flex items-center">
            <FaCalendarAlt className="mr-2" />
            Deliverables
          </li>
          <li className="hover:bg-[#0d3164] px-2 py-2 rounded flex items-center">
            <FaCode className="mr-2" />
            Source Metrics
          </li>
          <li className="hover:bg-[#0d3164] px-2 py-2 rounded flex items-center">
            <FaCheckSquare className="mr-2" />
            Daily Status
          </li>
        </ul>
      </div>

      {/* Collapse Button */}
      <div className="hover:bg-[#0d3164] px-2 py-2 rounded flex items-center cursor-pointer">
        <FaChevronLeft className="mr-2" />
        Collapse
      </div>
    </aside>
  )
}

export default Sidebar
