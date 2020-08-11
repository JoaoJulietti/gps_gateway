date = new Date();
const utc_offset = date.getTimezoneOffset();
date.setMinutes(date.getMinutes() - utc_offset);

module.exports = date;
