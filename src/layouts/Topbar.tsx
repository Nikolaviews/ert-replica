'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const pathTitleMap: { [key: string]: string } = {
  '/dashboard': 'Dashboard',
  '/job-code': 'Job Codes',
  '/time-entries': 'Time Entries',
  '/adotickets': 'ADO Tickets',
  '/Sow': 'Statement of Work',
  '/streams/refactoring': 'Refactoring',
  '/streams/legacy-baselining': 'Legacy Baselining',
  '/streams/test-automation': 'Test Automation',
  '/streams/cloud-formation': 'Cloud Formation',
  '/streams/documentation': 'Documentation',
  '/streams/performance': 'Performance',
  '/milestones': 'Milestones',
  '/deliverables': 'Deliverables',
  '/source-metrics': 'Source Metrics',
  '/daily-status': 'Daily Status',
}

const Topbar = () => {
  const pathname = usePathname()
  const [title, setTitle] = useState('')

  useEffect(() => {
    const foundTitle = pathTitleMap[pathname] || 'Dashboard'
    setTitle(foundTitle)
  }, [pathname])

  return (
    <header className="bg-white shadow px-4 py-2 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
      <div className="flex items-center gap-4">{/* actions */}</div>
    </header>
  )
}

export default Topbar
