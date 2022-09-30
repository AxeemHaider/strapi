const districts = require('./districts');

const setAddressValue = (user, values, fieldSchema) => {
  return districts[0].name;
};

module.exports = {
  setAddressValue,
};
