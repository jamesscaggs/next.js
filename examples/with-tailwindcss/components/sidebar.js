import React from 'react'
export default function Sidebar() {
  return (
    <div>
      <div className="w-64 min-h-full min-h-screen pl-4 border-r bg-white shadow hidden sm:block">
        <ul aria-orientation="vertical" className="rounded py-8">
          <li className="cursor-pointer text-indigo-700 text-sm leading-3 tracking-normal pl-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-grid"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={4} y={4} width={6} height={6} rx={1} />
                <rect x={14} y={4} width={6} height={6} rx={1} />
                <rect x={4} y={14} width={6} height={6} rx={1} />
                <rect x={14} y={14} width={6} height={6} rx={1} />
              </svg>
              <span className="ml-2">Dashboard</span>
            </div>
          </li>
          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pl-2 mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
            <div className="text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-puzzle"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
              </svg>
            </div>
            <span className="ml-2">Products</span>
          </li>
          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pl-2 mt-6 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
            <div className="text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-compass"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                <circle cx={12} cy={12} r={9} />
              </svg>
            </div>
            <span className="ml-2">Performance</span>
          </li>
          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pl-2 mt-6 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
            <div className="text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-code"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="7 8 3 12 7 16" />
                <polyline points="17 8 21 12 17 16" />
                <line x1={14} y1={4} x2={10} y2={20} />
              </svg>
            </div>
            <span className="ml-2">Deliverables</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
