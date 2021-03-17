const squad = [
    {name: 'Isaiah', pod: true},
    {name: 'Alejandra', pod: true},
    {name: 'Hamid', pod: true},
    {name: 'Erin', pod: false},
    {name: 'David', pod: false},
    {name: 'Ernest', pod: false},
    {name: 'Shahzad', pod: false},
    {name: 'Ben', pod: false},
    {name: 'David', pod: false}
  ];
  
  module.exports = {
    getAll: function() {
      return squad;
    }
  };