const isObject = (obj: any) => obj && typeof obj === 'object';

const deepMergeInner = (target: any, source: any) => {
  Object.keys(source).forEach((key: string) => {
      const targetValue = target[key];
      const sourceValue = source[key];

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
          target[key] = targetValue.concat(sourceValue);
      } else if (isObject(targetValue) && isObject(sourceValue)) {
          target[key] = deepMergeInner(Object.assign({}, targetValue), sourceValue);
      } else {
          target[key] = sourceValue;
      }
  });

  return target;
}

export default (...objects: object[]) => {
  
  if (objects.length < 2) {
      throw new Error(`DeepMerge: This function expects at least 2 objects to be provided`);
  }

  if (objects.some(object => !isObject(object))) {
      throw new Error(`DeepMerge: All values should be of type "object"`);
  }

  return objects.reduce((prev, current) => {
    return deepMergeInner(prev, current)
  })

};