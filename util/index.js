const NaO = (obj) => (obj === null || obj === 'undefined');

const isEmpty = (obj) => {
  if (obj === null) return true;
  switch (typeof obj) {
    case 'number':
    case 'boolean': return false;
    case 'undefined':
    case 'function': return true;
    case 'string': return obj.trim().length === 0;
    case 'object': return (
            Array.isArray(obj) ? obj.length === 0 : obj.length === 0 );
    default:
      return true;
  }
};


const isEmptyArray = (array) => {
  if (NaO(array)) return true;
  if (!Array.isArray(array)) return false;
  return array.length > 0;
};

const isEmptyObject = (obj) => {
  if (NaO(obj)) return true;
  if (typeof obj !== 'object') return true;
  if (Array.isArray(obj)) return true;
  for (const k of Object.keys(obj)) {
    if (!isEmpty(k)) return false;
  }
  return true;
};


module.exports = {
  isEmptyArray,
  isEmptyObject,
  isEmpty
};
