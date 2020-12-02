import React from 'react'
import ColumnFilter from './columnFilter'

export const COLUMNS = [
  {
    Header: 'First name',
    accessor: 'firstName', // accessor is the "key" in the data
    Filter: ColumnFilter,
  },
  {
    Header: 'Last name',
    accessor: 'lastName',
    Filter: ColumnFilter,
  },
  {
    Header: 'Employer',
    accessor: 'employer',
    Filter: ColumnFilter,
  },
  {
    Header: 'Title',
    accessor: 'title',
    Filter: ColumnFilter,
  },
]
