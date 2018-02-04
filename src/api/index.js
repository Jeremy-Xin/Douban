// var apiUrl = 'https://api.douban.com/v2/movie/in_theaters'
var rootUrl = 'https://api.douban.com/v2'
var apiUrl = '/api/movie/in_theaters'

var axios = require('axios')

function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

function filterNull(o) {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key]
        }

        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}

function apiAxios(method, url, params, success, failure) {
    if (params) {
        params = filterNull(params);
    }
    axios({
            method: method,
            url: '/api' + url,
            data: method === 'POST' || method === 'PUT' ? params : null,
            params: method === 'GET' || method === 'DELETE' ? params : null,
            withCredentials: false
        })
        .then(function(res) {
            if (res.status === 200) {
                if (success) {
                    success(res.data)
                } else {
                    if (failure) {
                        failure(res.data)
                    } else {
                        window.alert('error: ' + JSON.stringify(res.data))
                    }
                }
            }
        }).catch(function(err) {
            let res = err.response
            if (err) {
                window.alert('api error, HTTP CODE: ' + res.status)
            }
        })
}

export default {
    get: function(url, params, success, failure) {
        return apiAxios('GET', url, params, success, failure)
    },
    post: function(url, params, success, failure) {
        return apiAxios('POST', url, params, success, failure)
    },
    put: function(url, params, success, failure) {
        return apiAxios('PUT', url, params, success, failure)
    },
    delete: function(url, params, success, failure) {
        return apiAxios('DELETE', url, params, success, failure)
    }
}