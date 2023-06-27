import { useEffect, useState } from "react"

const useMenu=()=>{

    let [menu,setMenu]=useState([])
    let [loading,setLoading]=useState(true)

    useEffect(()=>{
        fetch("http://localhost:5000/menus")
        .then(res=> res.json())
        .then(data=> {
            setMenu(data)
            setLoading(false)
        })
    },[])

    return [menu,loading]

}

export default useMenu





