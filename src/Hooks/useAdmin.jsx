import { useContext } from "react"
import { AuthContext } from "../Component/AuthoncationSystem/AuthProvider/AuthProvider"
import { useQuery } from "@tanstack/react-query"


let useAdmin=()=>{
    let { user } = useContext(AuthContext)
  
    let token=localStorage.getItem("accessToken")

    const { refetch , data: admin ={} , isLoading : isAdminLoading} = useQuery({

        queryKey: ["userAdmin" , user?.email],
        queryFn: async () => {
            const response=await fetch(`http://localhost:5000/userAdmin/${user.email}`,{
                headers:{
                    authorization: `bearer ${token}`
                }
            })

            return response.json()
        }
    })

    // console.log(admin)
    return [admin, refetch ,isAdminLoading]

}

export default useAdmin