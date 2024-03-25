import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<h1>Home</h1>} />
        <Route path='/proporties' element={<h1>Proporties</h1>} />
        <Route path='*' element={<h1>NotFount</h1>} />
        <Route path='/' element={<Navigate to={'/home'} />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Root