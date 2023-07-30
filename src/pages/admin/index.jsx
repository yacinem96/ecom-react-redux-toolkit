import React from 'react'
import AdminLayout from '../../components/layouts/admin'
import { Navigate ,useNavigate } from 'react-router-dom'
export const Admin = () => {
  let location= window.location.pathname
  console.log(location);
  location==="/admin" && <Navigate to="/admin/main" replace={true}/> 
   return (
    
    <AdminLayout>
        
    </AdminLayout>
  )
}
