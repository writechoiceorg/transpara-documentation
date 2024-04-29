const installation = require('./installation');
const interfaces = require('./interfaces');
const automation = require('./automation');

module.exports = [
  {
    type: 'doc',
    id: 'setup-and-administration/overview',
  },
  installation,
  interfaces,
  //automation,
  /*{
    type: 'doc',
    id: 'setup-and-administration/best-practices',
  },*/
];
