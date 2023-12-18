import React,{useEffect} from "react"

import { setLoading } from "../../../store/project/actions"
import { useLoading } from "../../../store/project/hooks"
import { setDataUniversalWords } from "../../../store/app/actions"

const ProjectMiddlewares = ({children}) => {
  const projectLoading = useLoading()

  /* middleWare actions start */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await import('../../../utils/universal-words/index.json');
        const data = JSON.parse(JSON.stringify(value));
        setDataUniversalWords(data.default)

        setLoading(true);
      } catch (error) {
          throw new Error(error)
      }
    };

    fetchData();
  }, []);


  /* finish => useEffect => setLoading(true olacak herşey bittikten sonra)*/


  return (typeof children === 'function' ? children({projectLoading}) : null)
}


// ilerde kullanılabilir
async function syncImportJSON(URL){
  const data = await import(URL)
  data = JSON.parse(JSON.stringify(data))
  return data
}

export default ProjectMiddlewares
