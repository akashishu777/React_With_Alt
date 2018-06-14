import alt from '../alt';
import InstrumentAction from '../actions/InstrumentAction';

var JSON_Data = [
    { id : 0 , name : 'Guitar'},
    { id : 1 , name : 'Piano'},
    { id : 2 , name : 'Drum'},
    { id : 2 , name : 'Flute'}
];

var InstrumentSource = {
    fetchInstuments(){
        return{
            remote(){
                return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if(true){
                                resolve(JSON_Data);
                            }
                            else{
                                reject('Err no data found');
                            }
                        }, 250);
                });
            },
            local(){
                return null;
            },
            
            success : InstrumentAction.updateInstruments,
            error: InstrumentAction.InstrumentFailed,
            loading: InstrumentAction.fetchInstruments
        }
    }
};

module.exports = InstrumentSource;