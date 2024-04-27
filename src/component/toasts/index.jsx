import React,{useState} from 'react'
import { Toast } from 'react-bootstrap'

import { useErrors } from '../../store/app/hooks';
import { setErrors } from '../../store/app/actions';

const Toasts = (props) => {
    const [show, setShow] = useState(true);
    const errorsData = useErrors()
    const {data,onClose,...rest} = props

    const toastShowClose = () => {
      setShow(false)
    }
  return (
    <Toast show={show} onClose={onClose} animation="true" delay={1000000} autohide {...rest}>
        <Toast.Header>
            <strong className="me-auto">{data?.title}</strong>
            <small>{data?.time}</small>
        </Toast.Header>
        <Toast.Body>{data?.body ? data.body?.message?.toString() : 'bir sorun oluştu'}</Toast.Body>
    </Toast>
  )
}

export default Toasts
