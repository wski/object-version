Object.version = require('../module');
Object.assign = require('object-assign');

describe("Returns instance where key is equal to value", function() {
  it("Returns 1 instance containing a city named Alaska.", function() {

      var obj = {
        x: 50,
        y: 20,
        city: 'Baltimore'
      };

      var versionedObject = Object.version(obj, 5);
      // add more versions than our limit
      versionedObject = Object.version(versionedObject);
      versionedObject.x = 40;
      versionedObject.city = 'Alaska';
      versionedObject = Object.version(versionedObject);

      // Find the first instance where the city is Alaska.
      var result = versionedObject.version.where('city').is('Alaska');

      expect(result.length).toBe(1);
  });
});
