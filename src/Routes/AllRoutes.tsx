import { Navigate, Route, Routes } from 'react-router-dom'
import UserDetails from '../Pages/UserDetails/UserDetails'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Navigate to={'/user_details'}/>}/>
            <Route path='/user_details' element={<UserDetails />} />
        </Routes>
    </div>
  )
}

export default AllRoutes
