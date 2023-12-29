import React,{useState} from 'react'
import { Toast } from 'react-bootstrap'

const Toasts = (props) => {
    const [show, setShow] = useState(true);
    const {data,...rest} = props

    const toastShowClose = () => setShow(false)
  return (
    <Toast show={show} onClose={toastShowClose} animation="true" delay={3000} autohide {...rest}>
        <Toast.Header>
            <strong className="me-auto">{data?.title}</strong>
            <small>{data?.time}</small>
        </Toast.Header>
        <Toast.Body>{data?.body ? data.body?.message : 'bir sorun oluştu'}</Toast.Body>
    </Toast>
  )
}

export default Toasts
