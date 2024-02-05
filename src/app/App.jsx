import React, { useState } from 'react'
import AppRoutes from '../routes/AppRoutes'
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const notify = () => toast("Wow easy shop")

  return (
    <>
   <button onClick={notify}>Notify!</button> 
    <ToastContainer/>
      <AppRoutes/>
    </>
  )
}

export default App