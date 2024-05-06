import React,{useState,useEffect} from "react"
import { useTranslation } from "react-i18next"
import { Helmet } from 'react-helmet'

import { setLoading } from "../../../store/project/actions"
import { useCompany, useLoading, useTemplate } from "../../../store/project/hooks"
import { setTemplateTitle, setTemplateMetaCharset, setTemplateMetaContent } from "../../../store/project/actions"

import { setTheme } from "../../../store/app/index/actions"
import { setCompany } from "../../../store/project/actions"
import { useTheme } from "../../../store/app/index/hooks"

import { readCookie } from "../../../utils/helpers/cookie/readCookie"
import { enumLanguages } from "../../../utils/enums/enum.languages"

const ProjectMiddlewares = ({children}) => {
  const [ metaCharset, setMetaCharset ] = useState()
  const {t, i18n} = useTranslation()

  const projectLoading = useLoading()
  const template = useTemplate()
  const company = useCompany()

  const detectCompany = 'kargomucuz'
 
  useEffect(() => {
    setTheme(readCookie('theme'))
  }, [useTheme()])

  /* middleWare actions start */
  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setLoading(true)   /* finish => useEffect => setLoading(true olacak herşey bittikten sonra)*/          
        }, 100)

      } catch (error) {
          throw new Error('Middleware error: ',error)
      }
    }

    fetchData()
  }, [useLoading()])

  useEffect(() => {
    setCompany({...company,name:detectCompany})
    setTemplateTitle(t('app.subTitle'))
    setTemplateMetaContent(t('app.subTitle'))

    switch (i18n.language) {
      case enumLanguages.en:
        setTemplateMetaCharset('utf-8')

        break

      case enumLanguages.tr:
        setTemplateMetaCharset('utf-8')

        break
    
      default:
        setCompany({...company,name:'kargomucuz'})
        setTemplateMetaContent('utf-8')
        break
    }
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet={template.metaCharset} />
        <meta http-equiv="Content-Language" content={ i18n.language } />
        <title>{ template.title }</title>
        <meta
          name="description"
          content={template.metaContent}
        />
      </Helmet>
      {
        typeof children === 'function' ? children({projectLoading}) : null
      }
    </>
  )
}

export default ProjectMiddlewares
