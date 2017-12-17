export default {
    BASE_URL: {
        PROD: 'https://app.fyle.in'
    },


    API_URLS: {
        GET_ALL_BANKS: ':BASE_URL:/api/bank_branches?city=:city:&offset=0&limit=50',
    },


    getApiUrl: function () {
        for (var prop in this.API_URLS) {
            this.API_URLS[prop] = this.API_URLS[prop].replace(':BASE_URL:', this.BASE_URL['PROD']);
        }
        return this.API_URLS;
    }
}
