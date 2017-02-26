import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


var HelloWorld = React.createClass({
	render: function(){
		return (
			<h1>Hello World!</h1>
		)
	}

});


ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
