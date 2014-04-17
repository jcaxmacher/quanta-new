var Vue = require('vue');

new Vue({
    el: 'body',
    data: {
        msg: 'Hello Vue.js!',
        logs: [],
        logTypes: [{
            name: 'start',
            fields: [
                'time',
                'name'
            ]
        }, {
            name: 'stop',
            fields: [
                'time',
                'name'
        }, {
            name: 'count',
            fields: [
                'name',
                'description',
                'value',
                'time',
                'attachments'
        }, {
            name: 'memory',
            fields: [
                'name',
                'description',
                'time',
                'attachments'
        }]
    }
});
