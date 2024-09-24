import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreatePost from './components/CreatePost.jsx'
import ReadPost from './components/ReadPost.jsx'
import UpdatePost from './components/UpdatePost.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children: [
      {
        path:"/",
        element: <CreatePost/>
      },
      {
        path:"/allpost",
        element:<ReadPost/>
      },
      {
        path:"/update",
        element:<UpdatePost/>
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
