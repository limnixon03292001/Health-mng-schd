import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const RequireAuth = () => {
  return (
    true ? 
        <Outlet/>
    :
        <Navigate to="/login"  state={{ from: location }} replace/>    
  )
}

export default RequireAuth