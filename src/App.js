import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Favorite from './pages/Favorite/Favorite'
import './App.css'

const Layout = () => {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/fav',
        element: <Favorite />,
      },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
