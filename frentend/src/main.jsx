import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import {routes} from './routes/router.jsx';
// import {RouterProvider} from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={routes}></RouterProvider> */}
    <App/>
  </React.StrictMode>,
)
