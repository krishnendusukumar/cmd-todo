import React from 'react'

function useAdminid() {
  let token = localStorage.getItem('token')
  token = JSON.parse(token)
  let adminId = localStorage.getItem('adminId');
  adminId = JSON.parse(adminId);
  let username = localStorage.getItem('username');
  username = JSON.parse(username)
  return {adminId, token, username};
}

export default useAdminid