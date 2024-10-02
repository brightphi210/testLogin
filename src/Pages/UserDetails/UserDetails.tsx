import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const UserDetails = () => {

    const [userDetails, setUserDetails] = useState<{ first_name?: string; last_name?: string; profile_picture?: string }>({});
    const navigate = useNavigate()
    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate('/login');
    }


    useEffect(() => {
        const userData = localStorage.getItem('user');
        try {
            if (userData) {
                setUserDetails(JSON.parse(userData));
            }
        } catch (error) {
            console.error("Invalid JSON in localStorage:", error);
        }
    }, []);

    
  return (
    <div className="">
        <div className="flex p-5 items-center bg-white">
            <h2>User Details</h2>
            <button className="ml-auto bg-black text-white p-2 px-5 rounded-lg" onClick={handleLogout}>Logout</button>
        </div>

      <div className="bg-neutral-200 lg:p-10 p-5 h-screen">

        {userDetails?.profile_picture === '' ?
            <p className="p-10 bg-white rounded-full text-sm lg:w-[10rem] w-[7rem] lg:h-[10rem] h-[7rem] flex justify-center items-center">No Pics</p>
        :
            <img className="rounded-full h-32 w-32 object-cover" src={userDetails?.profile_picture} alt="Profile picture" />
        }
        <h2 className="lg:text-3xl text-xl pt-4">First Name: {userDetails?.first_name}</h2>
        <h2 className="lg:text-3xl text-xl pt-4">Last Name: {userDetails?.last_name}</h2>
      </div>
    </div>
  )
}

export default UserDetails
