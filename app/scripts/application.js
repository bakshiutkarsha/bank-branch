import RouteHandler from './common/routeHandler';
import Constants from './common/constants';

(function () {
	let routeConfig = {};
  routeConfig[Constants.TO_BANK] = RouteHandler.toBank;
	routeConfig['*'] = RouteHandler.toBank;
	routie(routeConfig);

})();
