import alt from '../alt';

class InstrumentAction{

    fetchInstrument(){
        return;
    }

    updateInstruments(Instrument) {
        console.log('Step 3: (Action) I am dispatiching data to the store updateInstruments');
        return Instrument;
    }

    mangoCount(count) {
        return count;
    }
}

module.exports = alt.createActions(InstrumentAction);