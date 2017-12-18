export default {
    ajaxConfig: {
        contentType: 'application/json',
        crossDomain: true
    },

    post: function (input, url, headers = {}) {
        this.ajaxConfig.headers = headers;
        this.ajaxConfig.data = JSON.stringify(input);
        return this.serviceRequest('POST', url);
    },

    get: function (url, headers = {}) {
        this.ajaxConfig.headers = headers;
        this.ajaxConfig.data = '';
        return this.serviceRequest('GET', url);
    },

    getWithHeader: function (url, authToken) {
        this.ajaxConfig.headers = {
            'Content-Type': 'application/json',
            'X-Zeta-AuthToken': authToken
        };
        return this.serviceRequest('GET', url);
    },

    serviceRequest: function (httpMethod, httpURL) {
        this.ajaxConfig.url = httpURL;
        this.ajaxConfig.type = httpMethod;
        return $.ajax(this.ajaxConfig);
    }
}
