import alt from '../alt';
import InstrumentAction from '../actions/InstrumentAction';
import InstrumentSource from '../sources/InstrumentsSource';

class InstrumentStore {
    
    constructor(){
        this.Instrument = [];
        this.errorMessage = null;
        console.log(InstrumentAction);
        this.bindListeners({
            handleFetchInstrument : InstrumentAction.FETCH_INSTRUMENT,
            handleUpdateInstruments : InstrumentAction.UPDATE_INSTRUMENTS       
        });
        
        this.exportAsync(InstrumentSource);
    }

    handleFetchInstrument(){
        this.Instrument = [];
        console.log('i am fetch');
    }
    
    handleUpdateInstruments(Instrument) {
        this.Instrument = Instrument;
        this.errorMessage = null;
        console.log('i am update insnt');
      }
    
}

module.exports = alt.createStore(InstrumentStore,'InstrumentStore');