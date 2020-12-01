import React from 'react'

export default function Table() {
  return (
    <div>
      <table className="w-full shadow text-left bg-white table-auto">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="py-5 pl-2 sm:pl-10 w-1/4 text-base text-gray-800">
              Name
            </th>
            <th className="py-5 w-1/4 text-base text-gray-800">Title</th>
            <th className="py-5 w-1/4 text-base text-gray-800 pl-20">Email</th>
            <th className="py-5 w-1/4 text-base text-gray-800 pr-2 sm:pr-10 text-right">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="pl-2 sm:pl-10 pr-2 py-5 text-gray-800 text-xs sm:text-sm">
              Andres Berlin
            </td>
            <td className="pr-2 py-5 text- gray-800 text-xs sm:text-sm">
              Director, Human Resources
            </td>
            <td className="pr-2 py-5 text-gray-800 text-xs sm:text-sm text-center">
              andresberlin@gmail.com
            </td>
            <td className="py-5 text-gray-800 pr-2 sm:pr-10 text-xs sm:text-sm text-right">
              Owner
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
