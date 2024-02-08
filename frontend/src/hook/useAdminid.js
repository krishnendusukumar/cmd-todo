import React from 'react'

function useAdminid() {
  let token = localStorage.getItem('token')
  token = JSON.parse(token)
  let adminId = localStorage.getItem('adminId');
  adminId = JSON.parse(adminId);
  return {adminId, token};
}

export default useAdminid