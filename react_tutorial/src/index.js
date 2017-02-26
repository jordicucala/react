import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


var HelloWorld = React.createClass({

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
			<h1>Hello World {this.props.name}</h1>
		)
	}

});


ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
);
