import alt from '../alt';

class InstrumentAction{

    fetchInstrument(){
        return;
    }

    updateInstruments(Instrument) {
        console.log('Step 3: (Action) I am dispatiching data to the store updateInstruments');
        return Instrument;
    }
}

module.exports = alt.createActions(InstrumentAction);