import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


var HelloWorld = React.createClass({

	propTypes: {
		name: React.PropTypes.string,
		isPerson: React.PropTypes.bool
	},
	getDefaultProps: function () {
			return {
				name: 'Jordi'
			}
	},
	render: function(){
		var greeting = "World";

		if (this.props.isPerson) {
			greeting = (<Person name={this.props.name} />)
		}

		return (
			<h1>Hello {greeting}</h1>
		)
	}

});

var Person = React.createClass({

	propTypes: {
		name: React.PropTypes.string.isRequired
	},
	getDefaultProps: function () {
			return {
				name: 'Jordi'
			}
	},
	render: function(){
		return (
			<span>{this.props.name}</span>
		)
	}

});


ReactDOM.render(
  <HelloWorld name='Jordi' isPerson={false} />,
  document.getElementById('root')
);
