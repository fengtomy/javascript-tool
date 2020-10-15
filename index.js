function returnValueOfSpecificProp(prop, callback) {
  return function returnValue(single) {
    if (typeof callback === "function") return callback(single[prop], single, prop);
    return single[prop];
  }
}

function getArrByKey(key, callback) {
  const returnValue = returnValueOfSpecificProp(key, callback);
  return function returnArr(source) {
    return source.map(returnValue);
  }
}

module.exports = {
  returnValueOfSpecificProp,
  getArrByKey
};