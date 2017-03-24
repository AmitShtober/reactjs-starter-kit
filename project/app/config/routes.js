var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Home = require('../components/home/Home');
var AboutUs = require('../components/about-us/AboutUs');


var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/about-us' header='About Us' component={AboutUs} />
    </Router>
);

module.exports = routes;