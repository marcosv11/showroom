import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projetos from './pages/Projetos/Projetos';
import Navbar from './components/Navbar';
import Home from './Home';
import ProjectModal from './pages/ProjectModal/ProjectModal';




ReactDOM.render(
  
    (
      
        <Router> 
           <Navbar/>
                <Switch>                
                    <Route exact path="/" component={App}/>
                    <Route exact path="/projetos" component={Projetos}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/modal" component={ProjectModal}/>
                </Switch>
            
        </Router>
    ),
    document.getElementById('root')
);
