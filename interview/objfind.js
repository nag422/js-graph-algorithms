let obj = {
  name: 'bill',
  phone: '8562456871',
  email: 'bill@email.com'
};
let arrayObj = [{
  street: 'wardcircle',
  city: 'Brentwood'
}, {
  name: 'wan',
  email: 'wan@test.com'
}, {
  name: 'bill',
  phone: '8562456871',
  email: 'bill@email.com'
}];


const getIndex = (findObj, array) => (
  array.findIndex(obj => (
    Object.entries(findObj).every(([key, val]) => obj[key] === val)
  ))
);

console.log(getIndex(obj, arrayObj));