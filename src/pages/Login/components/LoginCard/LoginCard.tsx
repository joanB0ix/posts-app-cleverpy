import * as React from 'react';

//Styling
import './LoginCard.scss';

//Child components
import Input from '../../../../components/Input/Input';
import DefaultButton from '../../../../components/DefaultButton/DefaultButton';

const LoginCard = () => {

    const [credentials, setCredentials] = React.useState({
        username: "",
        password: "",
    });

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    }

    return(
        <div className="logincard-wrapper">
            <form onSubmit={(e:React.ChangeEvent<HTMLFormElement>) => {e.preventDefault();}}>
                <Input name="username" placeholder="Username" onChange={onChangeHandler} type="text"/>
                <Input name="password" placeholder="Password" onChange={onChangeHandler} type="password"/>
                <DefaultButton text="Login" type="submit"></DefaultButton>
            </form>
        </div>
    )
}

export default LoginCard;