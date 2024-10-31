import React from 'react'
import DataGridDemo from '../../Components/AdminGrid/AdminGrid'
import { Heading } from '../../Components/Heading/Headiing'
import './adminpage.css';

function AdminPage() {
  return (
    <div>
        <Heading></Heading>
        <DataGridDemo classname='grid'></DataGridDemo>
    </div>

  )
}

export default AdminPage