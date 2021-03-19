import * as React from 'react';

//Styling
import './DefaultButton.scss';

type Props = {
    text: string,
    action?: () => void,
    type?: "button" | "submit" | "reset" | undefined
}

const DefaultButton = (props : Props) => {
    return(
        <button className="button-wrapper" onClick={props.action} type={props.type}>
            {props.text}
        </button>
    )
}

export default DefaultButton;