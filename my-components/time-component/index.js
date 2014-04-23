function range(x, start) {
    var result = [], i = 0;
    if (start) i = start;
    for (; i < x; i++) {
        result.push(i);
    }
    return result;
}

module.exports = {
    replace: true,
    data: {
        periods: ['AM', 'PM'],
        minutes: range(60),
        hours: range(13, 1)
    },
    ready: function () {
        var timeChanger = function (val) {
            var hour = parseInt(this.hour, 10);
            if (hour === 12) hour = 0;

            if (this.period === 'AM') {
                this.time.hour = hour;
            } else {
                this.time.hour = hour + 12;
            }
            this.time.minute = parseInt(this.minute);
        }.bind(this);

        this.hour = this.time.hour;
        this.minute = this.time.minute;

        if (this.hour > 11) {
            this.period = 'PM';
            this.hour = this.hour - 12;
        } else if (this.hour === 0) {
            this.period = 'AM';
            this.hour = 12;
        } else {
            this.period = 'AM';
        }

        this.$watch('hour', timeChanger);
        this.$watch('minute', timeChanger);
        this.$watch('period', timeChanger);
    },
    filters: {
        numberFilter: function (num) {
            if (num < 10) {
                return "0" + num;
            } else {
                return "" + num;
            }
        }
    },
    template: require('./template')
}
