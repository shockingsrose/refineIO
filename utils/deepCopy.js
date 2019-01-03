const map = {
  String: '[object String]',
  Number: '[object Number]',
  Boolean: '[object Boolean]',
  Null: '[object Null]',
  Undefined: '[object Undefined]',
  Array: '[object Array]',
  Object: '[object Object]'
};

const getType = (data) => {
  const type = Object.keys(map).find((key) => map[key] === Object.prototype.toString.call(data));
  return type;
};

const deepCopy = (data) => {
  let result;
  const type = getType(data);
  if (type === 'Array') {
    result = [];
    data.forEach((element) => {
      result.push(deepCopy(element));
    });
  } else if (type === 'Object') {
    result = {};
    Object.keys(data).forEach((key) => {
      result[key] = deepCopy(data[key]);
    });
  } else {
    return data;
  }
  return result;
};

export default deepCopy;
