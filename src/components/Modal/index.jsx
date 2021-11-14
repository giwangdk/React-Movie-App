import React , {useState} from 'react'
import PropTypes from 'prop-types'

const Modal = (props) => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(props.active)
    }, [props])


    return (
        <div id={props.id} className={`modal ${active} ? 'active' : ''`}>
            {props.children}
        </div>
    )
}

Modal.propTypes = {
    active: PropTypes.bool,
    id:PropTypes.string
}

export const ModalContent = props => {
    
    const contentRef = useRef(null);

    const closeModal = ()=>{
        contentref.current.parentNode.classList.remove('active');
        if(props.onClose) props.onClose()
    }
    
    return(
        <div className="modal__content" ref={contentRef}>
            {props.children}
            <div classname="modal__content__close" onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
            </div>
    )
}

ModalContent.propTypes = {
    onClose : PropTypes.func
}

export default Modal
