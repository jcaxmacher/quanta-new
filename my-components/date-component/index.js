var Calendar = require('calendar');

module.exports = {
    replace: true,
    data: {
        open: false
    },
    ready: function() {
        console.log(this.date);
        var selectedDate = new Date(this.date.year, this.date.month,
            this.date.day);
        this._cal = new Calendar(selectedDate);
        this._cal.select(selectedDate);
        this._cal.showMonthSelect();
        this._cal.showYearSelect();
        this._cal.on('change', function(dt) {
            this.date = {
                year: dt.getFullYear(),
                month: dt.getMonth(),
                day: dt.getDate()
            };
            this.toggleCal();
        }.bind(this));
    },
    filters: {
        showDate: function (date) {
            var selectedDate = new Date(date.year, date.month, date.day);
            return selectedDate.toLocaleDateString();
        }
    },
    methods: {
        toggleCal: function () {
            var selectedDate = new Date(this.date.year, this.date.month, this.date.day);
            this.open = !this.open;
            if (this.open) this.$el.appendChild(this._cal.el);
            if (!this.open) {
                this.$el.lastChild.remove();
                this._cal.show(selectedDate);
            }
        }
    },
    template: require('./template')
}
