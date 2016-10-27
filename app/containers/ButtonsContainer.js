var React = require('react');
var Buttons = require('../components/Buttons.js');
var PropTypes = React.PropTypes;

var ButtonsContainer = React.createClass({
	handleClick: function(e){
		switch(this.props.text){
			case 'Add 1':
				this.props.parentFunc(1);
				break;
			case 'Add 5': 
				this.props.parentFunc(5);
				break;
			case 'Add 10':
				this.props.parentFunc(10);
				break;
			default:
				this.props.parentFunc(0);
		}
	},

	render: function(){
		return (
			<Buttons 
			className = {this.props.className} 
			text = {this.props.text} 
			onAddition = {this.handleClick} 
			style = {this.props.style}/>
		)
	}
});

ButtonsContainer.propTypes = {
	className: PropTypes.string.isReuqired, 
	text: PropTypes.string.isReuqired,
	parentFunc: PropTypes.func.isRequired,
	style: PropTypes.object
}

module.exports = ButtonsContainer;