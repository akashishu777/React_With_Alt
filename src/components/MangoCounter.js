import React, { Component } from 'react';
import AltContainer from 'alt-container';
import _ from  'lodash';
import InstrumentStore from '../stores/InstrumentStore';
import InstrumentAction from '../actions/InstrumentAction';

class MangoCount extends Component {
        render() {
            console.log('Apple Component Rendering');
           return (
             <div>
             <h3>Apple Count:  {this.props.apple}</h3>
             </div>
        )
    }
}

module.exports = MangoCount;
