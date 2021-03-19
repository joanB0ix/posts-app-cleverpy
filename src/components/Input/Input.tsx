import * as React from 'react';

//Styling
import './Input.scss';

type Props = {
    name: string,
    placeholder: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    type: string,
}

const Input = (props: Props) => {
    return(
        <input
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        className="input-wrapper"/>
    )
}

export default Input;