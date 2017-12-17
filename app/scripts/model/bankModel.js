import Storage from '../common/webStorage';
import Constants from '../common/constants';
import BankSvc from '../service/bankSvc';

let allLoans =[];
export default{
  searchFromAllLoans: function(searchText){
    searchText = searchText.toLowerCase();
    let filteredLoanArr = [];
    let allLoansArr = Storage.getCollection('CURRENT_CITY_BANK');
    _.each(allLoansArr,function(loanObj){
      let filterBy = [loanObj.bank_name, loanObj.branch]
      let isSearchable = _.some(filterBy, function(searchableValue){
        if(searchableValue != null){
						return (searchableValue.toLowerCase().indexOf(searchText) != -1);
				}
      });
      if(isSearchable){
        filteredLoanArr.push(loanObj)
      }
    });

    return filteredLoanArr;
  }

}
