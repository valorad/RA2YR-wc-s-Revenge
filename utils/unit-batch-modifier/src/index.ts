import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { parse, stringify } from 'ini';

import { UM } from "./um";

interface Config {
  fileList: string[],
  listToExtract: string[],
  outputFile: string,
  attributesToAdd: {
    [index: string]: string|number|boolean
  },
  attributesToChange: {
    [index: string]: string|number|boolean
  },
  valuesToChange: any[]
}

const getRawUnitInfo = (unitname: string) => {
  // search every {} in raw unitInfo
  for (let rawInfoGrp of unitInfo) {
    if (rawInfoGrp[unitname]) {
      return rawInfoGrp[unitname];
    }
  }
  return null;
};

const config: Config = JSON.parse(readFileSync(resolve(__dirname, `config/config.json`), { encoding: "utf-8" }));

let filePaths: string[] = [];

// form file list
for (let file of config.fileList) {
  filePaths.push(resolve(__dirname, 'in', file));
}

const unitInfo: any[] = [];
for (let file of filePaths) {
  unitInfo.push(parse(readFileSync(file, {encoding: 'utf-8'})));
}

// extract unit list
let units: string[] = [];

for (let raw of unitInfo) {
  // for every files
  for (let list of config.listToExtract) {
    // for every list given above. e.g infTypes

    // raw[list] is like {'1': "E1", '2': "E2", ...}
    for (let key in raw[list]) {
      units.push(raw[list][key]);
    }

  }
}

// create an output info containing all units
let outputInfo: any = {};

for (let unit of units) {
  outputInfo[unit] = {};
}

// based on every recorde.g. 1=E1 2=E2, ...
// apply actions
for (let unit of units) {
  let rawInfo = getRawUnitInfo(unit);

  // writeAttribute
  UM.writeAttribute(outputInfo[unit], config.attributesToAdd);
  
  // setAttribute and value operations need to make sure attributes already exist
  if (rawInfo && outputInfo[unit]) {
    // attribute to override
    UM.setAttribute(outputInfo[unit], rawInfo, config.attributesToChange);

    // values to change
    for (let vtc of config.valuesToChange) {
      if (vtc.operation === '+') {
        UM.modValue(outputInfo[unit], rawInfo, vtc.attrName, vtc.value);
      }

      if (vtc.operation === '*') {
        UM.scaleValue(outputInfo[unit], rawInfo, vtc.attrName, vtc.value);
      }
    }

  }
}

writeFileSync(resolve(__dirname, 'out', config.outputFile), stringify(outputInfo), { encoding: "UTF-8" });
