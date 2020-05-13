import React, { Component } from 'react';
import AltContainer from 'alt-container';
import _ from  'lodash';
import InstrumentStore from '../stores/InstrumentStore';

class App extends Component {

componentDidMount(){
    InstrumentStore.fetchInstuments();
    console.log('Step 1: (Component) Calling Alt Source Method fetchInstuments() from the component');
}

  render() {
    return (
      <div>
        <h1>Instrumnet Names</h1>
        <AltContainer 
            store={InstrumentStore}
            inject={{
              Instrument: () => InstrumentStore.getState().Instrument
            }}
            component={Instrumentss}
            >
        </AltContainer>
      </div>
    );
  }
}

class Instrumentss extends Component{

    render(){
       var data = this.props;
      console.log(this.props.Instrument);
       return (
        <ul>
            {data.Instrument.map(function(data, index){
                return <li key={ index }>{data.name}</li>;
              })}
        </ul>
    )
    }

} 

module.exports = App;
