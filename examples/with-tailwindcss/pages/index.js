import Nav from '../components/nav'
import Sidebar from '../components/sidebar'
import Table from '../components/Table'
import ReactTable from '../components/react-table'

export default function IndexPage() {
  return (
    <>
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className="py-20 w-full container">
          {/* <Table /> */}
          <ReactTable />
        </div>
      </div>
    </>
  )
}
