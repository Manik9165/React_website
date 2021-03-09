import React from "react";
import '../node_modules/jquery/dist/jquery';
import '../node_modules/popper.js/dist/popper';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from "./Footer";
import Services from './Services';

const App=()=>{
    return(
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/contact" component={Contact}/>
                <Redirect to="/"/>
            </Switch>
            <Footer/>
        </>
    );
}
export default App;