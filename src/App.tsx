import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import AllRoutes from './Routes/AllRoutes'
import AuthProviders from './Providers/AuthProviders'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {

  return (
    <AuthProviders>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<ProtectedRoute element={<AllRoutes />}/>} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AuthProviders>
  )
}

export default App
