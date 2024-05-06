import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { nodeEnv } from '../../utils/consts/index'
import { enumEnv } from '../../utils/enums/enum.env'

const GoogleAnalytics = ({ trackingId }) => {
  const location = useLocation()

  useEffect(() => {
    if (nodeEnv === enumEnv.PRODUCTION) {
      if (window && typeof window.dataLayer === 'undefined') {
        window.dataLayer = []
      }
  
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
      script.async = true
      document.head.appendChild(script)
  
      function gtag(){window.dataLayer.push(arguments)}
      gtag('js', new Date())
      gtag('config', trackingId, {
        'page_path': location.pathname
      })
    }
  }, [location, trackingId])

  return null
}

export default GoogleAnalytics