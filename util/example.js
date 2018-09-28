const isEmpty = require('./index').isEmpty;
const emptyKeys = require('./index').emptyKeys;
const array = [
  {},
  {first: null, last: undefined},
  {retail: {}, wholesale: {}},
  ' ',
  [],
  1,
  false,
  new Set(),
  new Date(),
  {a: 1},
];

const nonEmptyArray = array.filter((obj)=>!isEmpty(obj));
console.log(nonEmptyArray); // [ 1, false, { a: 1 } ]

const instance = {
  hello: 'world',
  address: {},
  phone: null,
  fax: undefined,
  role: '',
  rights: [],
};
console.log(emptyKeys(instance));
/*
    { success: true,
      keys: [ 'address', 'phone', 'fax', 'role', 'rights' ],
      hasEmptyKeys: true
    }
 */
