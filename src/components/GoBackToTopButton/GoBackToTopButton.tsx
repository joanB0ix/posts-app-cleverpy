import * as React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import './GoBackToTopButton.scss';

const GoBackToTopButton = () => {
    return(
        <button className="gobacktotopbutton-wrapper" onClick={()=>{window.scrollTo({top: 0, behavior: "smooth"})}}>
            <ArrowUpwardIcon/>
        </button>            
    )
}

export default GoBackToTopButton;