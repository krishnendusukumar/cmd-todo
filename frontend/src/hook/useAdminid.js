import React from 'react'

function useAdminid() {
  const token = localStorage.getItem('token')
  const adminId = localStorage.getItem('adminId');
  return {adminId, token};
}

export default useAdminid