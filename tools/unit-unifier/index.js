const fs = require('fs');
const { extractUnit, unify } = require('./unify');

let unitRawList = "";
try {
  unitRawList = fs.readFileSync("dist/in.txt", {encoding: 'utf-8'});
} catch (error) {
  console.error(error);
  console.error("problem reading your unit list file");
}
if (unitRawList) {
  let units = extractUnit(unitRawList);

  let inputItemProperties = `
Explodes=yes
DeathWeapon=NukeCarrier
  `;
  inputItemProperties = inputItemProperties;

  unify(units, inputItemProperties);
}


