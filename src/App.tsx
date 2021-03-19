import React from 'react';

//Styling
import './App.scss';

//React router
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Children Components
import Navbar from './components/Navbar/Navbar';

//Pages
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import PostFeed from './pages/PostFeed/PostFeed';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <Route path={"/"} exact component={Landing}/>
        <Route path={"/login"} exact component={Login}/>
        <Route path={"/feed"} exact component={PostFeed}/>
      </Router>
    </div>
  );
}

export default App;
