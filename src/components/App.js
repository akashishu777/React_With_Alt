import React, { Component } from 'react';
import AltContainer from 'alt-container';
import _ from  'lodash';
import InstrumentStore from '../stores/InstrumentStore';
import InstrumentAction from '../actions/InstrumentAction';


class App extends Component {

componentDidMount(){
    InstrumentStore.fetchInstuments();
}

  render() {
    return (
      <div>
        <h1>Instrumnet Names</h1>
        <AltContainer store={InstrumentStore}>
            <Instrumentss />
        </AltContainer>
      </div>
    );
  }
}

class Instrumentss extends Component{

    render(){
       var data = this.props;
       console.log(data.Instrument);
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
