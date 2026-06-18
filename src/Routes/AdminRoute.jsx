import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  // 1. Grab the user string from localStorage
  const savedUserString = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  // 2. If no token or user exists, kick them back to home
  if (!token || !savedUserString) {
    return <Navigate to="/" replace />;
  }

  try {
    const user = JSON.parse(savedUserString);
    const activeRole = user?.userRole || user?.role;

    // 3. Verify strict lowercased admin match against your schema
    if (activeRole && String(activeRole).toLowerCase() === 'admin') {
      // Outlet renders the nested child component (e.g., Dashboard)
      return <Outlet />;
    }
    
    // 4. If they are logged in but NOT an admin, block them safely
    return <Navigate to="/" replace />;

  } catch (error) {
    console.error("Auth routing parsing error:", error);
    return <Navigate to="/" replace />;
  }
}