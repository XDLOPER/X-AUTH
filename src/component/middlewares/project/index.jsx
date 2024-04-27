import React,{useState,useEffect} from "react"

import { setLoading } from "../../../store/project/actions"
import { useLoading } from "../../../store/project/hooks"

import { setTheme } from "../../../store/app/index/actions"
import { useTheme } from "../../../store/app/index/hooks"

import { readCookie } from "../../../utils/helpers/cookie/readCookie"


const ProjectMiddlewares = ({children}) => {
  const projectLoading = useLoading()

  useEffect(() => {
    setTheme(readCookie('theme'))
  }, [useTheme()]);

  /* middleWare actions start */
  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setLoading(true);   /* finish => useEffect => setLoading(true olacak herşey bittikten sonra)*/          
        }, 100);

      } catch (error) {
          throw new Error('Middleware error: ',error)
      }
    };

    fetchData();
  }, [useLoading()]);

  return (typeof children === 'function' ? children({projectLoading}) : null)
}

export default ProjectMiddlewares
