import React from 'react'
import { useTable, useFilters } from 'react-table'

import ColumnFilter from './columnFilter'

import { COLUMNS } from '../data/columns'
import { DATA } from '../data/data'

export default function ReactTable() {
  const columns = React.useMemo(() => COLUMNS, [])
  const data = React.useMemo(() => DATA, [])

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  )

  const tableInstance = useTable({ columns, data, defaultColumn }, useFilters)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
  } = tableInstance

  return (
    <div className="max-w-7xl mx-auto px-4 py-5 sm:p-6">
      <>
        <table
          {...getTableProps()}
          className="w-full shadow text-left bg-white table-auto divide-y divide-gray-200"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.render('Header')}
                    <div>
                      {column.canFilter ? column.render('Filter') : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} className="border-b border-gray-200">
                  {row.cells.map((cell) => {
                    console.log(cell.column.Header)
                    return cell.column.Header === 'First name' ? (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        {cell.render('Cell')}
                      </td>
                    ) : (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500"
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    </div>
  )
}
