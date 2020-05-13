import React, { Component } from 'react';
import AltContainer from 'alt-container';
import _ from  'lodash';
import InstrumentStore from '../stores/InstrumentStore';
import InstrumentAction from '../actions/InstrumentAction';
import MangoCount from './MangoCounter';

class App extends Component {

componentDidMount(){
    InstrumentStore.fetchInstuments();
    // console.log(InstrumentAction);
    console.log('Step 1: (Component) Calling Alt Source Method fetchInstuments() from the component');
}

  render() {
    return (
      <div>
        <h1>Instrumnet Names</h1>
        <AltContainer 
            store={InstrumentStore}
            inject={{
              Instrument: () => InstrumentStore.getState().Instrument,
              mango: () => InstrumentStore.getState().frutes.mango
            }}
            component={Instrumentss}
            >
        </AltContainer>
      </div>
    );
  }
}

class Instrumentss extends Component{

  handleMangoCount() { 
    InstrumentAction.mangoCount(1);
  }

    render(){
       var data = this.props;
      console.log(this.props);
       return (
         <div>
         <h4>Mango Count:  {this.props.mango}</h4>

         <AltContainer 
         store={InstrumentStore}
         inject={{
          apple: () => InstrumentStore.getState().frutes.apple
         }}
         >
         <MangoCount />
     </AltContainer>


         <input onClick={this.handleMangoCount} type="button" value={'Increate Mango Count'}></input>
         <ul>
            {data.Instrument.map(function(data, index){
                return <li key={ index }>{data.name}</li>;
              })}
        </ul>
         </div>
    )
    }

} 

module.exports = App;
