var React = require('react');
var ReactDOM  =require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main.js');


var routes = (
	<Router history = {browserHistory}>
		<Route path = '/' component = {Main} />
	</Router>
)

module.exports = routes;