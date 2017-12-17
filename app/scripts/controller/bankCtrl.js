import BankView from '../view/bankView.js';
import Storage from '../common/webStorage';
import Constants from '../common/constants';
import BankSvc from '../service/bankSvc';

export
default {
    init: function() {
        this.render();
    },

    render: function(location) {
        BankSvc.getBanks(location).then(function(resp){
            Storage.setCollection('CURRENT_CITY_BANK', resp);
            BankView.render(resp);
        }, function(err){
            console.log(err);
        })

    }
}
