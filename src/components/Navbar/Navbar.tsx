import * as React from 'react';

//Styling
import './Navbar.scss';

//React router
import { Link, useHistory } from 'react-router-dom';

//Children components
import DefaultButton from '../DefaultButton/DefaultButton';

const Navbar = () => {

    const history = useHistory();

    const goToLogin = () => {
        history.push("/login");
    }

    return(
        <div className="navbar-wrapper">
            <div className="navbar-title">
                <Link to="/">
                    PostsApp
                </Link>
            </div>
            <div className="navbar-tabs">
                <Link to="/">Home</Link>
                <Link to="/feed">Feed</Link>
                <div className="navbar-button">
                    <DefaultButton  text="Login" action={goToLogin}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;