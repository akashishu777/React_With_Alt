import alt from '../alt';
import InstrumentAction from '../actions/InstrumentAction';
import InstrumentSource from '../sources/InstrumentsSource';

class InstrumentStore {
    
    constructor(){
        this.Instrument = [];
        this.errorMessage = null;
        this.frutes = {
            mango: 1,
            apple: 1
        }
         console.log(InstrumentAction);
        this.bindListeners({
            handleFetchInstrument : InstrumentAction.FETCH_INSTRUMENT,
            handleUpdateInstruments : InstrumentAction.UPDATE_INSTRUMENTS,
            handleMangoCount : InstrumentAction.MANGO_COUNT
        });
        
        this.exportAsync(InstrumentSource);
    }

    handleFetchInstrument(){
        this.Instrument = [];
        console.log('i am fetching instrument');
    }
    
    handleMangoCount(count) {
        this.frutes.mango = this.frutes.mango + count; 
    }

    handleUpdateInstruments(Instrument) {
        this.Instrument = Instrument;
        this.errorMessage = null;
        console.log('Step 4: (Store) Now the store is updated with the data you have passed from the source');
      }
    
}

module.exports = alt.createStore(InstrumentStore,'InstrumentStore');