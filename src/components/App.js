import React, { Component } from 'react';

class App extends Component {

	getVal()
	{ 
		return "React";
  }
  
  render() {
    return (
      <div>
        <h1>Hello {this.getVal()}</h1>
      </div>
    );
  }
}

export default App;
