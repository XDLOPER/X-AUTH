import React,{useState} from 'react'
import { Toast } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Toasts = (props) => {
    const {data,onClose,...rest} = props
    const [show, setShow] = useState(true)
    
    const translation = useTranslation()

    const toastShowClose = () => {
      setShow(false)
    }
  return (
    <Toast show={show} onClose={onClose} animation="true" delay={1000000} autohide {...rest}>
        <Toast.Header>
            <strong className="me-auto">{data?.title}</strong>
            <small>{data?.time}</small>
        </Toast.Header>
        <Toast.Body>{data?.body ? data.body?.message?.toString() : translation.t('toast.errorToast.body')}</Toast.Body>
    </Toast>
  )
}

export default Toasts
