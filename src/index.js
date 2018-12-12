const Globalize = require('globalize');

const timeFormatter = Globalize.dateFormatter({ time: 'short' });

console.log(timeFormatter(new Date));
