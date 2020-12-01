import React from 'react'
import { useTable, useFilters } from 'react-table'

// import { data } from '../data'

export default function ReactTable() {
  const data = React.useMemo(() => [
    {
      _id: { $oid: '5f760d660ab6be0162002176' },
      firstName: 'Cynthie',
      lastName: 'Kassel',
      email: 'ckassel6@bloglovin.com',
      password: 'hRTAuw',
      employer: 'Vitamin Water',
      title: 'Full Stack Developer',
      languages: 'React',
    },
    {
      _id: { $oid: '5f760d660ab6be016200217c' },
      firstName: 'Susanne',
      lastName: 'Guppey',
      email: 'sguppeyc@purevolume.com',
      password: '6vspqYjsJ',
      employer: 'UnitedHealth Group',
      title: 'Front End Developer',
      languages: 'React',
    },
  ])
  const columns = React.useMemo(
    () => [
      {
        Header: 'First name',
        accessor: 'firstName', // accessor is the "key" in the data
      },
      {
        Header: 'Last name',
        accessor: 'lastName',
      },
      {
        Header: 'Employer',
        accessor: 'employer',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
    ],
    []
  )

  const tableInstance = useTable({ columns, data }, useFilters)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
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
