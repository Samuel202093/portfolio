import { useState } from 'react'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}></Route>
))

function App() {
  
  return (
    <RouterProvider router={router}/>
    
      )
}

export default App
