

import { Slide, ToastContainer } from 'react-toastify'
import './App.css'
import Layout from './assets/layout/Layout'
import 'react-toastify/dist/ReactToastify.css'

function App() {
 

  return (
    <>
      <Layout/>
      <ToastContainer transition={Slide} />
      </>
 
 
  )
}

export default App
