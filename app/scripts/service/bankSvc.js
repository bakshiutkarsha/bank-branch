import ServiceConnector from '../common/serviceConnector';
import URL from '../common/url';

export default{
  getBanks: function(location){
    if(location){
      var bankLocation = location
    } else {
      bankLocation = 'BANGALORE'
    }
    return ServiceConnector.get(URL.getApiUrl().GET_ALL_BANKS.replace(':city:',bankLocation));
  }
}
