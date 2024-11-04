import React from 'react'
import DataGridDemo from '../../Components/AdminGrid/AdminGrid'
import { Heading } from '../../Components/Heading/Headiing'
import './adminpage.css';

function AdminPage() {
  return (
    <div>
        <Heading></Heading>
        <DataGridDemo ></DataGridDemo>
    </div>

  )
}

export default AdminPage