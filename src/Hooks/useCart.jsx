
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Component/AuthoncationSystem/AuthProvider/AuthProvider'


 const useCart = () => {

    let { user } = useContext(AuthContext)
    let token=localStorage.getItem("accessToken")

    const { refetch , data: cart =[]  } = useQuery({

        queryKey: ["addCard" , user?.email],
        queryFn: async () => {
            const response=await fetch(`https://bistro-boss-project-server.vercel.app/addCard?email=${user.email}`,{
                headers:{
                    authorization: `bearer ${token}`
                }
            })

            return response.json()
        }
        
    })
    return [cart, refetch]
    
}
export default useCart



