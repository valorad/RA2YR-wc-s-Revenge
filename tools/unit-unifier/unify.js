const fs = require('fs');
const { promisify } = require('util')
/**
 * unify the units with same item property
 * @param {string[]} unitList 
 * @param {string} unionItems item properties line. eg "Strength=3000\nCost=5000"
 */
const unify = async (unitList, unionItems = "") => {

  try {
    const wsA = fs.createWriteStream("./dist/out.txt");
    for (let unit of unitList) {
      let newSnip = `[${unit}]\n${unionItems}\n`;
      // append to a file
      await wsA.write(newSnip);
    }
    console.log("finished unification");
  } catch (error) {
    console.error(error);
  }

}

/**
 * extract units from original ini, and form a list[]
 * @param {string} unitRawList raw unit list from original ini
 */
const extractUnit = (unitRawList) => {
  // eg. unitRawList:
  /*
    [InfantryTypes]
    1=E1
    ...
    24=ALL ; Herbert the Alligator
  */

  let unitNameList = [];

  let unitsRaw = unitRawList.split("\n");
  // cycle through the original given list and extract unit names
  for (let unitRaw of unitsRaw) {
    let unitRawLine = unitRaw.split("=", 2);
    if (unitRawLine.length > 1) {
      // let unitIndex = unitRawLine[0];
      let unixNameRaw = unitRawLine[1];
      unitNameList.push(unixNameRaw);
    }
  }

  // since name still possibly has comment in the original ini list
  // eg. 10020=vaVCommCenterMCV ; 通讯中心组建车 ('通讯中心组建车' after character ';')
  // we need to remove that as well
  // after that, there are still whitespaces at front or back
  // eg. [ 'CCOMAND ', 'PTROOP', 'CIVAN', 'YURIPR', 'SNIPE ', 'COW' ]
  // which also needs to get rid of.
  unitNameList = unitNameList.map((unit) => {
    return unit.split(";")[0].replace(/\s/g,'');
  });

  return unitNameList;
};

module.exports = {
  extractUnit,
  unify
};