/**
 * Created by zll on 2017/10/9.
 */
import axios from 'axios';
import { config } from './config';
export const dataService = {
    postRequest: (params) => {
        return new Promise(function (resolve, reject) {
            axios.post(params.reqUrl+params.reqAuth, params.reqParam, config)
                .then(function (res) {
                    resolve(res);
                })
                .catch(function (err) {
                    reject(err);
                })
        });
    },

    reqUrl:{
        login:'/api/sys_users/webLogin'
    }
};