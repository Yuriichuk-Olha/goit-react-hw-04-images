import PropTypes from 'prop-types';
//import {React} from "react";
import css from 'components/Button/Button.module.css'

export default function Button({onLoadMoreClick}){
    return(
        <button type='button'
            className={css.Button}
            onClick={()=>onLoadMoreClick()}>
            Load More
        </button>
    )
}
Button.propTypes={
    onLoadMoreClick:PropTypes.func,
}