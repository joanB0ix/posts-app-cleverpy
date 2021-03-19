import * as React from 'react';

//Styling
import './Login.scss';

//Child components
import LoginCard from './components/LoginCard/LoginCard';

const Login = () => {
    return(
        <div className="login-wrapper">
            <LoginCard/>
        </div>
    )
}

export default Login;