import React,{useEffect} from "react"

import { setLoading } from "../../../store/project/actions"
import { useLoading } from "../../../store/project/hooks"

const ProjectMiddlewares = ({children}) => {
  const projectLoading = useLoading()
  useEffect(() => {
    setTimeout(()=>setLoading(true),100)
  }, []);
  
  return (typeof children === 'function' ? children({projectLoading}) : null)
}

export default ProjectMiddlewares
