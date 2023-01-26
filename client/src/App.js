import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import useRoutes from './Routes'
import 'materialize-css'

function App() {
  const route = useRoutes(true)
  return (
    <div className='container'>
    <BrowserRouter>
      {route}
    </BrowserRouter>
    </div>
  )
}

export default App
