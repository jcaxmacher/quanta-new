var Vue = require('vue');
var components = require('./components');
console.log(components.text);
console.log(require('date-component'));

window.v = new Vue({
    el: 'body',
    data: {
        msg: 'Quanta',
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
            ]
        }, {
            name: 'count',
            fields: [
                'name',
                'description',
                'value',
                'time',
                'attachments'
            ]
        }, {
            name: 'memory',
            fields: [
                'name',
                'description',
                'time',
                'attachments'
            ]
        }],
        showForm: false,
        currentFields: null,
        currentName: '',
        currentValues: null
    },
    methods: {
        newLog: function () {
            var logTypeDetails = this.logTypes.filter(function (l) {
                return l.name === this.newType;
            }.bind(this));
            console.log(logTypeDetails);
            this.showForm = true;
            this.currentFields = logTypeDetails[0].fields;
            this.currentName = logTypeDetails[0].name;
            this.currentValues = {};
            this.currentFields.forEach(function (f) {
                this.currentValues[f] = '';
            }.bind(this));
        },
        addLog: function () {
        }

    }
});
