interface Attribute {
  [index: string]: string|number|boolean
}

class UnitModifier {

  /**
   * Add attributes to a unit by the given json. Will override
   * exisiting attribute, and will add a new one if not exist
   */
  writeAttribute = (infoToSet: any, attribute: Attribute) => {
    for (let key in attribute) {
      infoToSet[key] = attribute[key];
    }
  };

  writeAttributes = (infoToSet: any, attributes: Attribute[]) => {
    for (let attribute of attributes) {
      this.writeAttribute(infoToSet, attribute);
    }
  };

  /**
   * Set attributes to a unit by the given json. Will override
   * exisiting attribute, but only touches the attribute if the unit
   * has those attributes
   */
  setAttribute = (infoToSet: any, oriInfo: any, attribute: Attribute) => {

    for (let key in attribute) {
      if (oriInfo[key]) {
        infoToSet[key] = attribute[key];
      }
    }
  };

  setAttributes = (infoToSet: any, oriInfo: any, attributes: Attribute[]) => {
    for (let attribute of attributes) {
      this.setAttribute(infoToSet, oriInfo, attribute);
    }
  };

  /**
   * Add or subtract the attribute value of a unit
   */
  modValue = (infoToSet: any, oriInfo: any, attribute: string, inc: number) => {
    if (oriInfo[attribute] && typeof(oriInfo[attribute] === 'number')) {

      infoToSet[attribute] = parseInt(oriInfo[attribute]) + inc;

    }
  }

  /**
   * Multiply or divide the attribute value of a unit
   */
  scaleValue = (infoToSet: any, oriInfo: any, attribute: string, scale: number) => {
    if (oriInfo[attribute] && typeof(oriInfo[attribute] === 'number')) {

      infoToSet[attribute] = parseInt(oriInfo[attribute]) * scale;
      
    }
  } 

}

export const UM = new UnitModifier();