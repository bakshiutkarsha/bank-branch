import DomEventHandler from '../common/domEventHandler.js';
import BankTemplate from '../../templates/banks.html';
import BankTableTemplate from '../../templates/components/bankTable.html';
import BankDomEvents from '../dom-events/BankDomEvents.js';

export default {
	render (data) {
		this.registerDOMEvents();
		this.renderLoanTable(data);
	},

	registerDOMEvents(){
		DomEventHandler.renderMyTemplate('globalCntr', BankTemplate);
		DomEventHandler.bindEvent('select-city', 'change', BankDomEvents.changeCityLocation);
		DomEventHandler.bindEvent('search', 'keyup', _.throttle(BankDomEvents.searchLoan, 1000));
		this.commonDomEvents();
	},

	renderLoanTable(data){
		this.viewModel = {};
		this.viewModel.banks = data;

		DomEventHandler.renderMyTemplate('loanTable', BankTableTemplate, this.viewModel);
		this.commonDomEvents();

	},

	commonDomEvents(){
		DomEventHandler.bindClassEvent('show-more', 'click', BankDomEvents.toggleViewMore);

	}
};
