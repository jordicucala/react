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
  getInitialState: function() {
		return {
			value: 1
		}
	},
	componentDidMount: function() {
		this.setState({
			value: this.state.value + 19
		});
	},
	render: function(){
		var greeting = "World";

		if (this.props.isPerson) {
			greeting = (<Person name={this.props.name} />)
		}

		return (
			<div>
				<h1>Hello {greeting}</h1>
				{this.state.value}
			</div>
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
