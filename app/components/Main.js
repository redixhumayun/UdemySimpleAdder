var React = require('react');
var styles = require('../styles/styles.js');
var ButtonsContainer = require('../containers/ButtonsContainer.js');

var Hello = React.createClass({
	getInitialState: function(){
		return {
			number: 0
		}
	},
	render: function(){
		return (
			<div className = 'jumbotron col-xs-8 col-xs-offset-2 text-center' style = {styles.main}>
				<h2>Count: {this.state.number}</h2>
				<div className = 'row' style = {styles.spaceTop}>
					<ButtonsContainer className = 'btn btn-lg btn-success' text = 'Add 1' parentFunc = {this.handleClick.bind(this)}/>
					<ButtonsContainer className = 'btn btn-lg btn-danger' text = 'Add 5' style = {styles.spaceLeft} parentFunc = {this.handleClick.bind(this)}/>
					<ButtonsContainer className = 'btn btn-lg btn-warning' text = 'Add 10' style = {styles.spaceLeft} parentFunc = {this.handleClick.bind(this)}/>
				</div>
			</div>
		)
	},

	handleClick: function(num){
		console.log('This is the number: ', num);
		this.setState({
			number: this.state.number + num
		})
	}

});

module.exports = Hello;