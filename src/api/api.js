import axios from 'axios';

const api = axios.create({});

api.setBaseUrl = function () {

    this.defaults.baseURL = `localhost:80`;
};

export const ymysApi = api;

export default {
    api,
    install(app, options = {}) {

        api.defaults.baseURL = options.baseURL;

        app.provide('$ymysApi', api);
        app.config.globalProperties.$ymysApi = api;
    }
}