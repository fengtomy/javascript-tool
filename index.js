function returnValueOfSpecificProp(prop) {
  return function returnValue(single) {
    return single[prop];
  }
}

module.exports = {
  returnValueOfSpecificProp
};