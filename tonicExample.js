Object.assign = require('object-assign');
Object.version = require('object-version');

var obj = {
  x: 50,
  y: 20,
  city: 'Baltimore'
};

var versionedObject = Object.version(obj, 5);
// add more versions than our limit
versionedObject = Object.version(versionedObject);
versionedObject.x = 40;
versionedObject.city = 'Fairbanks';
versionedObject = Object.version(versionedObject);

// Find the first instance where the city is Fairbanks.
console.log( 'Fairbanks Instance', versionedObject.version.where('city').is('Fairbanks') );

// Recover the last instance where the city is Baltimore.
console.log('Salvaged Instance', versionedObject.version.salvage(
  versionedObject.version.where('city').is('Baltimore')[0]
));
