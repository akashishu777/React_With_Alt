import alt from '../alt';

class InstrumentAction{
    
    updateInstruments(Instrument){
        return Instrument;
    }

    fetchInstrument(){
        return;
    }
}

module.exports = alt.createActions(InstrumentAction);