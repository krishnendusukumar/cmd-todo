import React, { useState } from 'react'
import { createContext } from 'react'

export const AdminContext = createContext()

export const AdminProvider = ({children}) => {
    const [adminid, setAdminId] = useState(null)
    
    return (
        <AdminContext.Provider value={{adminid, setAdminId}}>
        {children}
        </AdminContext.Provider>
    )
}