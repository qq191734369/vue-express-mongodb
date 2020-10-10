import axios from 'axios';

export function request(option = {
    url: '',
    method: 'get',
    params: {},
    data: {},
    config: {}
}) {
    const {
        url,
        method,
        params,
        data,
        config,
    } = option
    let basePath;
    if (config) {
        basePath = config.basePath
    }
    return axios({
        method: method ? method : 'get',
        url: basePath !== undefined ? (basePath + url) : (process.env.VUE_APP_BASE_URL + url),
        params,
        data,
        ...config
    })
}