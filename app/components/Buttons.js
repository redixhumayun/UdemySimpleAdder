var React = require('react');
var PropTypes = React.PropTypes;

function Buttons(props){
	{if(props.style){
		return (
			<button 
			type = 'button' 
			className = {props.className} 
			style = {props.style}
			onClick = {props.onAddition}>{props.text}</button>
		)
	}}
	return (
		<button 
		type = 'button' 
		className = {props.className}
		onClick = {props.onAddition}>{props.text}</button>
	)
}

Buttons.propTypes = {
	className: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	style: PropTypes.object
}

module.exports = Buttons;