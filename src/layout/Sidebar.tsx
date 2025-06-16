'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FaTachometerAlt, FaUsers, FaClock, FaTicketAlt, FaBars,
  FaProjectDiagram, FaFlag, FaCalendarAlt, FaCode, FaCheckSquare,
  FaChevronDown, FaChevronRight, FaChevronLeft, FaCompressArrowsAlt
} from 'react-icons/fa'
import { FiBox } from "react-icons/fi";
import { MdAutoGraph } from "react-icons/md";
import { TiWeatherCloudy } from "react-icons/ti";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrDocumentPerformance } from "react-icons/gr";

const menuData = [
  {
    title: 'T-Sheets',
    icon: <FaTachometerAlt />,
    collapsible: true,
    items: [
      { title: 'Dashboard', icon: <FaUsers />, path: '/t-sheets/dashboard' },
      { title: 'Job Codes', icon: <FaBars />, path: '/t-sheets/job-codes' },
      { title: 'Time Entries', icon: <FaClock />, path: '/t-sheets/time-entries' }
    ]
  },
  {
    title: 'ADO Tickets',
    icon: <FaTicketAlt />,
    path: '/adotickets',
  },
  {
    title: 'SoW',
    icon: <FaBars />,
    path: '/Sow'
  },
  {
    title: 'Project Streams',
    icon: <FaProjectDiagram />,
    collapsible: true,
    items: [
      { title: 'Refactoring', icon: <FaCompressArrowsAlt />, path: '/streams/refactoring' },
      { title: 'Legacy Baselining', icon: <FiBox />, path: '/streams/legacy-baselining' },
      { title: 'Test Automation', icon: <MdAutoGraph />, path: '/streams/test-automation' },
      { title: 'Cloud Formation', icon: <TiWeatherCloudy />, path: '/streams/cloud-formation' },
      { title: 'Documentation', icon: <IoDocumentTextOutline />, path: '/streams/documentation' },
      { title: 'Performance', icon: <GrDocumentPerformance />, path: '/streams/performance' }
    ]
  },
  {
    title: 'Milestones',
    icon: <FaFlag />,
    path: '/milestones'
  },
  {
    title: 'Deliverables',
    icon: <FaCalendarAlt />,
    path: '/deliverables'
  },
  {
    title: 'Source Metrics',
    icon: <FaCode />,
    path: '/source-metrics'
  },
  {
    title: 'Daily Status',
    icon: <FaCheckSquare />,
    path: '/daily-status'
  },


]

const Sidebar = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({})
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const toggle = (section: string) => {
    setOpen(prev => ({ ...prev, [section]: !prev[section] }))
  }

  useEffect(() => {
    const expandedSections: { [key: string]: boolean } = {}
    menuData.forEach((section) => {
      if (section.collapsible && section.items?.some(item => pathname.startsWith(item.path))) {
        expandedSections[section.title] = true
      }
    })
    setOpen(expandedSections)
  }, [pathname])


  return (
    <aside
      className={`${collapsed ? 'w-16' : 'w-52'
        } bg-[#052148] text-white min-h-screen p-2 flex flex-col justify-between transition-all duration-300`}
    >
      <div>
        <ul className="text-xs font-medium">
          {/* Logo */}
          <div className="mb-4 p-2 flex items-center justify-center border-b border-blue-900">
            <span
              className={`text-xl font-bold tracking-wide transition-all duration-300 ${collapsed ? 'text-sm' : ''
                }`}
            >
              ERT
            </span>
          </div>

          {menuData.map((section, index) => {
            const isActiveParent = section.path && pathname.startsWith(section.path)

            return (
              <li key={index} className="relative group">
                {section.collapsible ? (
                  <>
                    <button
                      onClick={() => toggle(section.title)}
                      className={`flex items-center w-full hover:bg-[#0d3164] px-2 py-2 rounded ${isActiveParent ? 'bg-[#173e73]' : ''
                        }`}
                      title={section.title}
                    >
                      <span className="text-base">{section.icon}</span>
                      {!collapsed && (
                        <>
                          <span className="ml-2 flex-1 text-left">{section.title}</span>
                          <span>
                            {open[section.title] ? (
                              <FaChevronDown size={14} />
                            ) : (
                              <FaChevronRight size={14} />
                            )}
                          </span>
                        </>
                      )}
                    </button>

                    {open[section.title] && section.items && (
                      <ul className="ml-6 mt-1 space-y-1 text-gray-100 text-xs font-normal">
                        {section.items.map((item, idx) => {
                          const isActiveChild = pathname === item.path
                          return (
                            <li key={idx}>
                              <Link
                                href={item.path}
                                title={item.title}
                                className={`hover:bg-[#173e73] rounded px-2 py-1 flex items-center ${isActiveChild ? 'bg-[#173e73]' : ''
                                  }`}
                              >
                                <span className="mr-2 text-base">{item.icon}</span>
                                {!collapsed && <span>{item.title}</span>}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={section.path || '#'}
                    title={section.title}
                    className={`hover:bg-[#0d3164] px-2 py-2 rounded flex items-center ${pathname === section.path ? 'bg-[#173e73]' : ''
                      }`}
                  >
                    <span className="text-base">{section.icon}</span>
                    {!collapsed && <span className="ml-2">{section.title}</span>}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      {/* Collapse Button */}
      <div
        onClick={() => setCollapsed(!collapsed)}
        className="hover:bg-[#0d3164] px-2 py-2 rounded flex items-center cursor-pointer"
      >
        {collapsed ? (
          <FaChevronRight className="mx-auto" />
        ) : (
          <>
            <FaChevronLeft className="mr-2" />
            Collapse
          </>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
