import * as React from 'react';

//Styling
import './Landing.scss';

//Children components
import DefaultButton from '../../components/DefaultButton/DefaultButton';

//React router
import { useHistory } from 'react-router-dom';

const Landing = () => {

    const history = useHistory();

    const goToLogin = () => {
        history.push("/login");
    }
    
    return(
        <div className="landing-wrapper">
            <div className="landing-title">
                PostsApp
            </div>
            <div className="landing-subtitle">
                Prueba técnica para Cleverpy
            </div>
            <div className="landing-buttons">
                <DefaultButton text="Login" action={goToLogin}/>
            </div>
        </div>
    )
}

export default Landing;
