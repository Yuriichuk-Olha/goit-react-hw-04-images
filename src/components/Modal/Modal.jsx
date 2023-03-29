import PropTypes from 'prop-types';
import {useEffect} from "react";
import css from 'components/Modal/Modal.module.css'

const Modal = ({closeModal, largeImageURL}) => {
    
    useEffect(()=>{
        console.log("keydown")
        window.addEventListener('keydown', handleKeydown)
        return ()=>{
            window.removeEventListener('keydown', handleKeydown)
        }

    })

    const handleKeydown = e => {
            if(e.code === 'Escape') closeModal();           
    }

    const handleBackdropClick = event => {      
        if(event.currentTarget===event.target){
            closeModal()
        }
    }
        
        return (
            <div className={css.Overlay}
                onClick={handleBackdropClick}>
                <div className={css.Modal}><img 
                src={largeImageURL} alt="" width={1000}/></div>
            </div>
        );
    
}

Modal.propTypes={
    handleBackdropClick:PropTypes.func,
    largeImageURL:PropTypes.string,
}

export default Modal;
