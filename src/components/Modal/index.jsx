import React , {useState} from 'react'
import PropTypes from 'prop-types'

const Modal = (props) => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(props.active)
    }, [props])


    return (
        <div>
            
        </div>
    )
}

Modal.propTypes = {
    active: PropTypes.bool,
    id:PropTypes.string
}


export default Modal
