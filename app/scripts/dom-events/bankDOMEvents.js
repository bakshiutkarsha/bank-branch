import Storage from '../common/webStorage.js';
import Constants from '../common/constants';
import BankModel from '../model/bankModel';
import BankView from '../view/bankView';
import BankSvc from '../service/bankSvc';

let toggleViewMore = function() {
    $(this).parents('.loan-row').toggleClass('active');
}

let searchLoan = function(){
  BankView.renderLoanTable(BankModel.searchFromAllLoans($(this).val()));
}

let changeCityLocation = function(){
  BankSvc.getBanks(this.value).then(function(resp){
      Storage.setCollection('CURRENT_CITY_BANK', resp);
      BankView.renderLoanTable(resp);
  }, function(err){
      console.log(err);
  });

}

export default {
    toggleViewMore: toggleViewMore,
    searchLoan:searchLoan,
    changeCityLocation:changeCityLocation
}
